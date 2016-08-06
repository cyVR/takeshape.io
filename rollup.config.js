import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
const {NODE_ENV} = process.env;

export default {
  entry: '_assets/javascripts/scripts.js',
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    NODE_ENV === 'production' ? uglify() : {}
  ],
  dest: 'javascripts/scripts.js',
  format: 'cjs'
};
