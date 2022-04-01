import React from 'react'
import PropTypes from 'prop-types'

const ImageWithText = ({ image, text, reversed = false }) => {
  const imageTag = (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      flexBasis: '65%',
      flexGrow: 2,
      placeItems: 'center center'
    }}>
      <img src={image} style={{ maxWidth: '100%' }} />
    </div>
  )

  const textTag = (
    <div style={{ flexBasis: '32%', flexGrow: 3, flexShrink: 1 }}>
      {text}
    </div>
  )

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', placeItems: 'center', gap: '3%' }}>
      {reversed ? [textTag, imageTag] : [imageTag, textTag]}
    </div>
  )
}

ImageWithText.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  reversed: PropTypes.bool
}

export default ImageWithText
