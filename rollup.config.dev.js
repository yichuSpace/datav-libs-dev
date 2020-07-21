const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/index.js')
const outputEsPath = path.resolve(__dirname, './dist/index.es.js')

module.exports = {
  input: inputPath,
  output: [{
    file: outputUmdPath,
    format: 'umd', //编译模式
    name: 'datav',
    globals: {
      vue: 'vue'
    }
  }, {
    file: outputEsPath,
    format: 'es',
    globals: {
      vue: 'vue'
    }
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [
        ['@babel/transform-runtime', {
          regenerator: true
        }]
      ]
    }),
    json(),
    vue(),
    postcss({
      plugins: []
    })
  ],
  external: ['vue']
}