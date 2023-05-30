import React from 'react'
import 'sass/custom.scss'

import GainTain from 'components/adalida_page/projects_page/gaintain'
import ScrollProgress from 'components/adalida_page/projects_page/scroll_progress'
import { ThemeContext, Projects } from 'theme_context'

const GainTainPage = () =>
  <ThemeContext.Provider value={Projects.GainTain}>
    <ScrollProgress />
    <GainTain />
  </ThemeContext.Provider>

export default GainTainPage
