import React from 'react'

import Card from '../card'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/project.scss'

const Takeaways = () => {
  const centerStyles = {
    placeItems: 'center center'
  }

  const takeaways = (
    <div style={{ maxWidth: '80vw' }}>
      <p>
        The goal for this project was to improve the user experience and design around major pain points. I worked towards that goal by conducting user research and utilizing online forums for helpful feedback. I let this data drive the design and referred back to my user research frequently to keep me on track.
        I enjoyed working on a product that was user-friendly and helped people find entertainment that best fits their needs.
      </p>
    </div>
  )

  const thoughts = (
    <ResponsiveGrid breakpoint='30ch' customStyles={{ columnGap: '6%', marginTop: '2em' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>User Research</h1>
        <p>
          My user research made my designs. By following the research, I was able to increase the speed at which I design and create a product users wanted. From my research, I understood what key features users needed and the design came organically.
        </p>
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Performance</h1>
        <p>
          I focused on easing the pain for the users when forwarding or rewinding, but to fully fix the problem, I would need to pair with an engineer to improve the performance optimization.
        </p>
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Handoff</h1>
        <p>
          I set up my designs in auto-layout using components so they are responsive and are ready for hand off to the engineer.
        </p>
      </div>
    </ResponsiveGrid>
  )
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '90%',
    height: '100%',
    margin: '0 auto',
    ...centerStyles
  }
  return (
    <Card>
      <div style={style}>
        {takeaways}
        {thoughts}
      </div>
    </Card>
  )
}

export default Takeaways