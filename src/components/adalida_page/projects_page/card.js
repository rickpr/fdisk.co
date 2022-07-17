import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

import useAnimateOnScroll from 'hooks/use_animate_on_scroll'

const Card = ({ children, title }) => {
  useAnimateOnScroll()
  const primary = useContext(ThemeContext).primary || '#FFFFFF'
  const containerStyle = {
    minWidth: '95%',
    margin: '4vh 2.5vw',
    minHeight: '92vh',
    backgroundColor: '#FFFFFF',
    padding: '7%',
    borderRadius: '2vh'
  }
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    maxWidth: '100%',
    maxHeight: '100%',
    minHeight: '79.12vh' // minHeight of 92vh minus 7% margin on top and bottom
  }
  const textStyle = {
    fontSize: 'min(5em, 7vw)',
    color: primary
  }
  return (
    <div data-aos='fade-up' style={containerStyle}>
      <div style={gridStyle}>
        <div style={{ display: 'grid', justifyItems: 'center', width: '100%' }}>
          <h1 style={textStyle}>{title}</h1>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default Card
