import React from 'react'

import 'sass/adalida_page/project.scss'

const About = (): JSX.Element => {
  const text = (
    <div style={{ maxWidth: '95vw', flexBasis: '37%', flexGrow: 3 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: '10%', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Date</strong><span>09/09/23</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Purpose</strong><span>Generative AI - 1 Day Hackathon</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Location</strong><span>Digital Garage in San Francisco, CA</span>
        </div>
      </div>
      <p><strong>Project Details</strong></p>
      <p>
        TL;DR is a revolutionary product that aims to simplify the often convoluted and intimidating world of End User
        License Agreements (EULAs). TL;DR was born out of the dynamic environment of the Generative AI Hackathon, where
        a team of dedicated designers and developers came together to tackle the challenge of making EULAs
        comprehensible in a fraction of the time. In just one day, TL;DR was conceptualized, designed, and developed to
        address the common frustration of users grappling with lengthy and complex legal agreements. This case study
        offers a comprehensive look into the design process, user research, and the transformative impact of TL;DR in
        bridging the gap between legal jargon and user comprehension.
      </p>
      <p><strong>Role Details</strong></p>
      <div>Product Design</div>
      <p>
        <a
          href='https://www.figma.com/proto/IdXeFw3mk3ISLgPNwKNy0O/TL%3BDR-%7C-Generative-AI-Hackathon?page-id=20%3A625&type=design&node-id=21-6713&viewport=30%2C-88%2C0.08&t=7CnvT6l8xkXgxrFy-1&scaling=scale-down&starting-point-node-id=21%3A6713&show-proto-sidebar=1&mode=design'
          target='_blank'
          rel='noreferrer'
        >
          <strong>VIEW FIGMA ➜</strong>
        </a>
      </p>
      <p>
        <a
          href='https://docs.google.com/presentation/d/1qXeKJTsfPWMx_gYd4cbBtRxIbwm7jJqWRpy747TrlWM/edit?usp=sharing'
          target='_blank'
          rel='noreferrer'
        >
          <strong>VIEW SLIDE DECK ➜</strong>
        </a>
      </p>
    </div>
  )

  return (
    <div
      data-aos='fade-up'
      style={{
        minWidth: '95%',
        margin: '4vh 2.5vw',
        padding: '2em 7%',
        borderRadius: '2vh'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          maxWidth: '100%',
          maxHeight: '100%'
        }}>
        {text}
      </div>
    </div>
  )
}

export default About
