// ==UserScript==
// @name         你忙啥了.js
// @namespace    https://lictex.pw/
// @version      0.13
// @description  nmsl
// @author       lictex_
// @match        http://study.zhihuishu.com/learning/videoList*
// @grant        none
// @homepage     https://github.com/xyning/ZhiHuiShu-Assistant
// ==/UserScript==

(function() {
    'use strict';
    $("body").prepend('<div style="width:calc(100% - 16px);height:32px;background:white;border:8px solid red;text-align:center;color:red;font-size:20px;font-weight:bold;"><span id="nmsl">NMSL is loading.</span></div>');
    $.ajax({
        url:"https://raw.githubusercontent.com/xyning/ZhiHuiShu-Assistant/master/main.js", 
        async:true,
        success:function(data){
            $("#nmsl").text("NMSL is running.");
            eval(data);
        }
    });
})();
