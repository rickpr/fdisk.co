import React from 'react'
import { Environment } from '@react-three/drei'

import FileQuery from 'queries/file'

const Background = (): JSX.Element => {
  const backgroundImage = FileQuery('san_francisco.hdr')
  return <Environment background files={backgroundImage.publicURL} />
}

export default Background
