const { createRequire } = require('module');
const require = createRequire(import.meta.url);

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Add any custom rules here
  },
}