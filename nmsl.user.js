// ==UserScript==
// @name         你忙啥了.js
// @namespace    https://lictex.pw/
// @version      0.1
// @description  nmsl
// @author       lictex_
// @match        http://study.zhihuishu.com/learning/videoList*
// @grant        none
// @homepage     https://github.com/xyning/ZhiHuiShu-Assistant
// ==/UserScript==

(function() {
    'use strict';
    $("body").prepend('<div style="width:calc(100% - 16px);height:32px;background:white;border:8px solid red;text-align:center;color:red;font-size:20px;font-weight:bold;"><span id="nmsl" href="https://github.com/xyning/ZhiHuiShu-Assistant">NMSL is loading.</span></div>');
    (async function(){
        var script=$.ajax({url:"https://raw.githubusercontent.com/xyning/ZhiHuiShu-Assistant/master/main.js",async:false}).responseText;
        $("#nmsl").text("NMSL is running.");
        eval(script);
    })();
})();
