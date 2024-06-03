import TailwindTypography from '@tailwindcss/typography'
import DaisyUI from 'daisyui'

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: { extend: {} },
  plugins: [TailwindTypography, DaisyUI]
}
