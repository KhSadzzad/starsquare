/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-starzad}',
    Once: (root, { rule }) => {
      console.log(root)
    }
  }
}

module.exports.postcss = true
