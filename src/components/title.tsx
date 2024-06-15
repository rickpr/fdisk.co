import React from 'react'

const Title = ({ title }: { title: string }): JSX.Element =>
  <div className='navbar flex glass items-center justify-center border border-solid prose max-w-none p-5 border-warning rounded-lg shadow shadow-secondary'>
    <h1 className='text-secondary'>{title}</h1>
  </div>

export default Title
