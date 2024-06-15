import React, { useEffect, useState } from 'react'

import FileQuery from 'queries/file'
import CodeBlock from './code_block'

const CodeFile = ({ filename, klassName }: { filename: string, klassName: string }): JSX.Element => {
  const codeURL = FileQuery(filename).publicURL
  const [code, setCode] = useState('')
  useEffect(() => {
    const fetchCode = async (): Promise<void> => {
      const response = await fetch(codeURL)
      const text = await response.text()
      setCode(text)
    }
    void fetchCode()
  }, [codeURL])
  return (
    <details className='collapse bg-base-200 collapse-arrow'>
      <summary className='collapse-title text-xl font-medium'>
        <span className='text-secondary'>class</span> <span className='text-warning'>{klassName}:</span>
      </summary>
      <div className='collapse-content'>
        <CodeBlock language='python'>
          {code}
        </CodeBlock>
      </div>
    </details>
  )
}

export default CodeFile
