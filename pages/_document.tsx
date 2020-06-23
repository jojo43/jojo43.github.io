import React from 'react'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet as ScServerStyleSheet } from 'styled-components'
import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const scSheet = new ScServerStyleSheet()
    const muiSheets = new MuiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            // eslint-disable-next-line react/jsx-props-no-spreading
            scSheet.collectStyles(muiSheets.collect(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          scSheet.getStyleElement(),
          muiSheets.getStyleElement(),
        ],
      }
    } finally {
      scSheet.seal()
    }
  }
}
