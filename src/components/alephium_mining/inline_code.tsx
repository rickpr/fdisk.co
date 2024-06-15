import React from 'react'

const InlineCode = ({ children }: { children: React.ReactNode }): JSX.Element =>
  <span className='rounded-lg border border-solid border-warning bg-base-300 text-secondary px-2'>
    {children}
  </span>

export default InlineCode
