/* eslint-disable indent */
import fs from 'fs';
// 支持加载json文件
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
// 支持字符串替换, 比如动态读取package.json的version到代码
import replace from '@rollup/plugin-replace';
// 为了让 rollup 识别 commonjs 类型的包,默认只支持导入 ES6
import commonjs from '@rollup/plugin-commonjs';
// 为了支持 import xx from 'xxx'
import resolve from '@rollup/plugin-node-resolve';
// ts转js的编译器
import typescript from 'rollup-plugin-typescript2';
// 压缩代码
import {
  terser
} from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

// 读取package.json
import pkg from './package.json';

/**
 * 生成索引文件
 * @param {String} 名称
 * @param {String} 格式
 */
function generateIndex(name) {
  const tpl = `if (process.env.NODE_ENV === 'production') {
  module.exports = require('./${name}.common.prod.js');
} else {
  module.exports = require('./${name}.common.dev.js');
}`;

  fs.writeFileSync(`dist/${name}.common.js`, tpl, 'utf8');
}

// 代码头
const banner = `/*!
 * Name: ${pkg.name}
 * Version ${pkg.version}
 * Author: ${pkg.author}
 * (c) 2018-${new Date().getFullYear()} Russell
 * Released under the MIT License.
 */`;

const IS_PROD = process.env.NODE_ENV === 'production';
const IS_DEV = process.env.NODE_ENV === 'development';
const DIST_DIR = 'dist';
const NAME = 'index';

let plugins = [
  json(),
  typescript(),
  commonjs(),
  resolve(),
  babel({
    exclude: 'node_modules/**'
  })
];
if (IS_PROD) {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  plugins = [
    replace({
      __VERSION__: pkg.version
    }),
    ...plugins,
    terser()
  ];
  generateIndex(NAME);
} else {
  plugins = [
    ...plugins,
    livereload(),
    serve({
      open: true,
      port: 8180,
      contentBase: ''
    })
  ];
}


export default [{
    input: 'src/index.ts',
    plugins,
    external: ['axios', 'qs'],
    output: [{
        format: 'cjs',
        file: `dist/${NAME}.common.prod.js`,
        banner,
        sourcemap: IS_DEV
      },
      {
        format: 'es',
        file: `dist/${NAME}.esm.js`,
        banner,
        sourcemap: IS_DEV
      },
      {
        format: 'cjs',
        file: `dist/${NAME}.common.dev.js`,
        banner,
        sourcemap: IS_DEV
      }
    ]
  },
  {
    input: './src/index.ts',
    plugins,
    external: ['axios', 'qs'],
    output: [{
        format: 'iife',
        name: 'index',
        file: `dist/${NAME}.min.js`,
        banner,
        sourcemap: IS_DEV
      },
      {
        format: 'iife',
        name: 'index',
        file: `dist/${NAME}.js`,
        banner,
        sourcemap: IS_DEV
      }
    ]
  }
];
