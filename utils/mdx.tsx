import React from 'react'
import { Components } from '@mdx-js/react'
import { Link } from '@material-ui/core'

import {
  Blockquote,
  CodeBlock,
  Divider,
  Headline,
  InlineCode,
  ListItem,
  Paragraph,
} from '~/components/atoms'
import { DefaultTemplate } from '~/components/templates'

export const components: Components = {
  /* eslint-disable react/jsx-props-no-spreading */
  a: (props) => <Link {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  code: (props) => <CodeBlock {...props} />,
  h1: (props) => <Headline component="h1" {...props} />,
  h2: (props) => <Headline component="h2" {...props} />,
  h3: (props) => <Headline component="h3" {...props} />,
  h4: (props) => <Headline component="h4" {...props} />,
  h5: (props) => <Headline component="h5" {...props} />,
  h6: (props) => <Headline component="h6" {...props} />,
  hr: () => <Divider />,
  inlineCode: (props) => <InlineCode {...props} />,
  li: (props) => <ListItem {...props} />,
  p: (props) => <Paragraph {...props} />,
  pre: (props) => <div {...props} />,

  wrapper: (props) => <DefaultTemplate {...props} />,
  /* eslint-enable */
}
