module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'lines-between-class-members': 0,
    'class-methods-use-this': 0,
    'linebreak-style': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0, // conflicts with typescript aliases
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/prop-types': 0,
    semi: 'warn',
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
    'no-console': 'error',
    quotes: [
      'warn',
      'single',
      'avoid-escape',
    ],
    'jsx-quotes': [
      'warn',
      'prefer-double',
    ],
    'no-trailing-spaces': 'warn',
    indent: [
      'warn',
      2,
    ],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
      },
    ],
    'eol-last': [
      'warn',
      'always',
    ],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'if',
          'try',
          'class',
          'export',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'if',
          'try',
          'class',
          'export',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var',
          'export',
        ],
        next: [
          'const',
          'let',
          'var',
          'export',
        ],
      },
    ],
    'block-spacing': 'warn',
    eqeqeq: [
      'warn',
      'always',
    ],
    'comma-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'func-call-spacing': [
      'warn',
      'never',
    ],
    'no-duplicate-imports': 'error',
    'newline-before-return': 'warn',
    'object-curly-spacing': [
      'warn',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    'padded-blocks': [
      'warn',
      'never',
    ],
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
    'space-infix-ops': 'warn',
    'object-property-newline': 'warn',
    'arrow-spacing': 'warn',
    'key-spacing': [
      'warn',
      {
        afterColon: true,
      },
    ],
  },
};
