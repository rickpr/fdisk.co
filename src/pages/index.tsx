import React, { useRef } from 'react'

import Main from '../components/main'

const Root = (): JSX.Element => {
  const layoutRef = useRef(null)
  return (
    <div ref={layoutRef} style={{ height: '100dvh', background: '#000000' }}>
      <Main />
    </div>
  )
}

export default Root
