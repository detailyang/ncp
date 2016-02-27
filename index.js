/*
* @Author: detailyang
* @Date:   2016-02-27 13:36:34
* @Last Modified by:   detailyang
* @Last Modified time: 2016-02-27 13:40:08
*/

'use strict';

const fs = require('fs');
const ncp = require('./ncp');
const nc = fs.readFileSync('./nginx.conf').toString();
const result = ncp.parse(nc);

console.log(result);