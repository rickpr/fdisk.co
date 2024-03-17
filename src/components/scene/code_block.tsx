import hljs from 'highlight.js/lib/core'
import shell from 'highlight.js/lib/languages/shell'
import React from 'react'

import 'highlight.js/styles/base16/darcula.css'

import { styles } from './style'

hljs.registerLanguage('shell', shell)

const CodeBlock = ({ children, language }: { children: string, language: string }): JSX.Element => (
  <div
    style={styles.codeBlock}
    dangerouslySetInnerHTML={{
      __html: hljs.highlight(children, { language }).value
    }}>
  </div>
)

export default CodeBlock
