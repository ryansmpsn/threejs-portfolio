module.exports = {
  plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort'],
  extends: [
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    'react/jsx-key': 'off',
    quotes: [2, 'single'],
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'none', endOfLine: 'auto' }
    ],
    'comma-dangle': ['error', 'never'],
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': [2, { ignore: ['className'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/consistent-type-imports': 'error'
  },
  env: {
    browser: true,
    es2021: true
  }
};
