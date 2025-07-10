import js from '@eslint/js';
import json from '@eslint/json';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        React: true
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier: prettierPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error'
    }
  },

  {
    files: ['**/*.json'],
    plugins: { json },
    languageOptions: {
      parser: json.parsers.JSON
    },
    rules: {
      ...json.configs.recommended.rules
    }
  }
]);
