module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'react/no-unescaped-entities': 'off'
      }
    }
  ]
} 