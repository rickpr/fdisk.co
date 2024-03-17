import React from 'react'

import { styles } from './style'

const Link = ({ to, children }: { to: string, children: React.ReactNode }): JSX.Element =>
  <a href={to} style={styles.link}>{children}</a>

export default Link
