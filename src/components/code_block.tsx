import hljs from 'highlight.js/lib/core'
import python from 'highlight.js/lib/languages/python'
import shell from 'highlight.js/lib/languages/shell'
import React from 'react'

import 'highlight.js/styles/base16/tomorrow-night.css'

hljs.registerLanguage('shell', shell)
hljs.registerLanguage('python', python)

const CodeBlock = ({ children, language }: { children: string, language: string }): JSX.Element => (
  <div
    className='rounded-lg p-2 border border-solid border-warning bg-base-300 whitespace-pre-wrap'
    dangerouslySetInnerHTML={{
      __html: hljs.highlight(children, { language }).value
    }}>
  </div>
)

export default CodeBlock
