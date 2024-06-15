import React from 'react'

import Title from '../title'

const Blog = (): JSX.Element => {
  return (
    <div className='flex flex-col px-16 pb-4 gap-6'>
      <Title title='My blog!' />
      <div className='mockup-code link'>
        <pre data-prefix='$'><a href='/scene'>Crafting 3D Magic: Building Immersive Interactive Scenes for the Web</a></pre>
        <pre data-prefix='$'><a href='/alephium_mining'>Mining Alephium with GoldShell AL Box</a></pre>
      </div>
    </div>
  )
}
export default Blog
