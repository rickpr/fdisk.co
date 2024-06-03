import hljs from 'highlight.js/lib/core'
import shell from 'highlight.js/lib/languages/shell'
import React from 'react'

import 'highlight.js/styles/base16/darcula.css'

hljs.registerLanguage('shell', shell)

const CodeBlock = ({ children, language }: { children: string, language: string }): JSX.Element => (
  <div
    className='rounded-lg p-2 border border-solid border-warning text-secondary bg-base-300'
    dangerouslySetInnerHTML={{
      __html: hljs.highlight(children, { language }).value
    }}>
  </div>
)

export default CodeBlock
