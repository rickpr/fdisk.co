import React, { useContext } from 'react'
import { IconFileInfo, IconBrandDribbble, IconBrandLinkedin, IconMail } from '@tabler/icons'

import { ThemeContext } from 'theme_context'

import 'sass/adalida_page/footer.scss'

const Footer = () => {
  const borderColor = useContext(ThemeContext).border || '#FFFFFF'
  const borderStyle = `0.25vh solid ${borderColor}`
  const borderStyles = {
    borderLeft: borderStyle,
    borderRight: borderStyle,
    borderBottom: borderStyle,
    zIndex: 3
  }
  const linkStyle = { color: '#FFFFFF', pointerEvents: 'all', display: 'flex' }
  const iconHeight = '3vh'

  return (
    <>
      <nav className='adalida-footer' style={{ mixBlendMode: 'difference' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%',
            margin: '0 auto'
          }}
        >
          <a href='#' style={linkStyle}><IconFileInfo height={iconHeight}/></a>
          <a
            href='https://dribbble.com/adalida-baca'
            style={linkStyle}
            target='_blank'
            rel='noreferrer'
          >
            <IconBrandDribbble height={iconHeight}/>
          </a>
          <a
            href='https://www.linkedin.com/in/adalidabaca'
            style={linkStyle}
            target='_blank'
            rel='noreferrer'
          >
            <IconBrandLinkedin height={iconHeight}/>
          </a>
          <a
            href='mailto:adalida.baca@gmail.com'
            style={linkStyle}
            target='_blank'
            rel='noreferrer'
          >
            <IconMail height={iconHeight}/>
          </a>
        </div>
      </nav>
      <nav className='adalida-footer' style={borderStyles} />
    </>
  )
}

export default Footer
