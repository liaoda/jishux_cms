$(function(){function b(b,d){var c=window.Notification||window.mozNotification||window.webkitNotification;c?c.requestPermission(function(e){if("granted"!==e)console.log("granted");else{var a=new c(b,{dir:"auto",lang:"zh-CN",tag:"sds"+Math.random(),icon:"http://www.jishux.com/favicon.ico",body:d});a.onclick=function(){window.focus()};a.onerror=function(){console.log("\u901a\u77e5\u51fa\u9519\uff01\uff01\uff01")};a.onshow=function(){setTimeout(function(){a.close()},2E3)};a.onclose=function(){console.log("\u901a\u77e5\u6d88\u606f\u5173\u95ed\uff01\uff01\uff01")}}}):
    console.log("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u684c\u9762\u6d88\u606f")}$("code,pre").bind({copy:function(){b("(\uff61\uff65\u2200\uff65)\uff89\uff9e\u55e8","\u4ee3\u7801\u5df2\u7ecf\u590d\u5236\u597d\u5566\uff0c\u63a5\u4e0b\u6765\u770b\u4f60\u7684\u4e86~")}})});