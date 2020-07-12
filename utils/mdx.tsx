import React from 'react'
import { Components } from '@mdx-js/react'
import { Link } from '@material-ui/core'

import {
  Blockquote,
  CodeBlock,
  Divider,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  InlineCode,
  ListItem,
  Paragraph,
} from '~/components/atoms'
import { BlogTemplate } from '~/components/templates'

export const components: Components = {
  /* eslint-disable react/jsx-props-no-spreading */
  a: (props) => <Link {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  code: (props) => <CodeBlock {...props} />,
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  h5: (props) => <H5 {...props} />,
  h6: (props) => <H6 {...props} />,
  hr: () => <Divider />,
  inlineCode: (props) => <InlineCode {...props} />,
  li: (props) => <ListItem {...props} />,
  p: (props) => <Paragraph {...props} />,
  pre: (props) => <div {...props} />,

  wrapper: (props) => <BlogTemplate {...props} />,
  /* eslint-enable */
}
