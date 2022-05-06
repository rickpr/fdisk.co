import React from 'react'

import Card from '../card'
import MediaWithText from '../media_with_text'
import PictureCaption from '../picture_caption'

import 'sass/adalida_page/cyph.scss'

const Test = () => {
  const pictureCaption = (
    <div className='picture-caption'>
      <PictureCaption
        heading='Problem:'
        text='Users stream from several platforms.'
      />
      <PictureCaption
        heading='Solution'
        text='Design bottom up or mobile first to ensure the best user-experience. Also, utilize components during the design phase.s'
      />
    </div>

  )

  return (
    <Card title='// Test'>
      <MediaWithText
        media='images/hbo_max/test.png'
        text={pictureCaption}
      />
    </Card>
  )
}

export default Test
