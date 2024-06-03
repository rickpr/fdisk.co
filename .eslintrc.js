module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    __PATH_PREFIX__: true
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    project: ['./tsconfig.json'],
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    '@typescript-eslint'
  ],
  settings: {
    react: { version: 'detect' }
  }
}
