module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-unused-vars': 0
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'react/no-unescaped-entities': 0
      }
    }
  ]
} 