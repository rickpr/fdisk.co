import React from 'react'

import heroPhoto from 'images/cyph/summary.png'

import Card from '../card'
import ImageWithText from '../image_with_text'
import ResponsiveGrid from 'components/responsive_grid'

import 'sass/adalida_page/cyph.scss'

const About = () => {
  const makeEntry = ([title, content]) => (
    <div
      key={title}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <h2>{'//'} {title}</h2><ul><li>{content}</li></ul>
    </div>
  )


  const points = {
    PLATFORM: 'Mobile iOS',
    INDUSTRY: 'Political Technology',
    LOCATION: 'San Francisco, CA',
    DURATION: '2 months'
  }
  // The length of the word plus the two slashes and space.
  const sizeOfLargestTitle = Math.max(...Object.keys(points).map(title => title.length)) + 3
  // 2.4 is a magic number, it should be 2 but probably also involves the font weight.
  const breakpoint = 2.4 * sizeOfLargestTitle + 'ch'

  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <p>
        Cyph is a mobile app designed for users who are interested in contributions and spending between elected
        representatives and businesses.
        Users can scan a person politician and Cyph will recognize who the representative is and who their donors are.
      </p>
      <p><strong style={{ fontVariationSettings: "'wght' 700" }}>Why? Why do this?</strong></p>
      <p>
        This project is a design challenge for myself to do something for social good.
        I wanted to learn about and contribute to solving problems resulting in an increase in voter turnout for all
        demographics and helping voters vote for what is actually in their best interests.
        Then I saw a meme containing a quote by Robin Williams, which kick-started the project:
      </p>
      <p>“Politicians should wear sponsor jackets like NASCAR drivers, then we know who owns them”.</p>
      <ResponsiveGrid breakpoint={breakpoint}>
        {Object.entries(points).map(makeEntry)}
      </ResponsiveGrid>
    </div>
  )

  // 2.4 is a magic number, it should be 2 but probably also involves the font weight.
  const titles = [
    'Product Designer',
    'User Testing',
    'UX Researcher',
    'Interaction Designer',
    'UI Designer'
  ]
  const sizeOfLargestRole = Math.max(...titles.map(title => title.length)) + 3
  const rolesBreakpoint = 1.2 * sizeOfLargestRole + 'ch'
  const roles = (
    <div style={{
      gridColumn: '1 / -1',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      placeContent: 'space-between center',
      placeItems: 'center center'
    }}>
      <h1>{'//'} ROLES</h1>
      <ResponsiveGrid breakpoint={rolesBreakpoint}>
        {titles.map(title => <li key={title}>{title}</li>)}
      </ResponsiveGrid>
    </div>
  )

  return (
    <Card title='// ABOUT THE PROJECT'>
      <ImageWithText image={heroPhoto} text={text} />
      {roles}
    </Card>
  )
}

export default About