//コンパイルしたファイルを tampermonkey形式に変える
const raw = require("fs").readFileSync(`./out/index.js`).toString("utf-8");
const 接頭語 = `
// ==UserScript==
// @name         コミケカタログにジャンプボタンを追加
// @match        https://webcatalog.circle.ms/*
// ==/UserScript==
/* jshint esnext:true */
`.trim();
require("fs").writeFileSync(`./out/tampermonkey.js`, `${接頭語}\n\n${raw.trim()}`);
console.log("./out/tampermonkey.js にファイルを出力しました");
