const colors = {
  background: '#000000', // Background
  foreground: '#FDFDFD', // Foreground (Text)

  color_01: '#222222', // Black (Host)
  color_02: '#F01818', // Red (Syntax string)
  color_03: '#24D830', // Green (Command)
  color_04: '#F0D824', // Yellow (Command second)
  color_05: '#7890F0', // Blue (Path)
  color_06: '#F078D8', // Magenta (Syntax var)
  color_07: '#54E4E4', // Cyan (Prompt)
  color_08: '#A5A5A5', // White

  color_09: '#888888', // Bright Black
  color_10: '#EF8383', // Bright Red (Command error)
  color_11: '#7ED684', // Bright Green (Exec)
  color_12: '#EFE28B', // Bright Yellow
  color_13: '#B3BFEF', // Bright Blue (Folder)
  color_14: '#EFB3E3', // Bright Magenta
  color_15: '#9CE2E2', // Bright Cyan
  color_16: '#FFFFFF' // Bright White
}

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: colors.background,
    color: colors.foreground,
    width: '100dvw',
    minHeight: '100dvh',
    padding: '0 10% 2em',
    textShadow: `0 0 0.5em ${colors.foreground}`
  },
  header: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.color_06,
    backgroundColor: colors.color_01,
    border: `1px solid ${colors.color_04}`,
    borderRadius: '0 0 0.5em 0.5em',
    borderTop: 'none',
    fontSize: '3em',
    fontFamily: 'Inconsolata',
    textAlign: 'center' as const,
    boxShadow: `0 0 0.5em ${colors.color_06}`
  },
  heading: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    color: colors.color_02,
    fontSize: '2em',
    fontFamily: 'Inconsolata'
  },
  body: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: colors.background,
    color: colors.foreground,
    fontFamily: 'Inconsolata'
  },
  image: {
    width: 'max-content',
    maxWidth: '100%',
    borderRadius: '0.5em'
  },
  inlineCode: {
    backgroundColor: colors.color_01,
    color: colors.color_06,
    padding: '0 0.5em',
    fontFamily: 'Inconsolata',
    borderRadius: '0.5em',
    border: `1px solid ${colors.color_04}`
  },
  codeBlock: {
    backgroundColor: colors.color_01,
    color: colors.color_06,
    padding: '0.5em',
    fontFamily: 'Inconsolata',
    borderRadius: '0.5em',
    border: `1px solid ${colors.color_04}`
  },
  link: {
    color: colors.color_05,
    textDecoration: 'underline',
    display: 'inline-flex'
  }
}
