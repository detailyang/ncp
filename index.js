/*
* @Author: detailyang
* @Date:   2016-02-27 13:36:34
* @Last modified by:   detailyang
* @Last modified time: 2016-03-23T23:09:26+08:00
*/

'use strict';

const fs = require('fs');
const ncp = require('./ncp');
const nc = fs.readFileSync('./nginx.conf').toString();
const ast = ncp.parse(nc);


console.log(JSON.stringify(ast[6][1][22]));
console.log(JSON.stringify(ast));
