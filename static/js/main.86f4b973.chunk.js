(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={block:"WeatherBlock_block__2Bx9w",day:"WeatherBlock_day__3M__h",cloudFront:"WeatherBlock_cloudFront__Zw8ca",cloudBack:"WeatherBlock_cloudBack__B07xJ",night:"WeatherBlock_night__1eM6j",cloud:"WeatherBlock_cloud__u8SFr",sun:"WeatherBlock_sun__3cbsW",moon:"WeatherBlock_moon__gbPKF",move:"WeatherBlock_move__2rx5U",move2:"WeatherBlock_move2__2JdLY",text:"WeatherBlock_text__gbPBv",num:"WeatherBlock_num__nOu37"}},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),i=(a(15),a(2)),l=a(3),s=a(5),u=a(4),h=a(6),m=(a(16),a(1)),d=a.n(m),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={weather:"..."},a.changeMode=function(){return a.setState(function(e){return{mode:e.mode===k?p:k}})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=(new Date).getHours();this.setState({mode:t>18||t<6?p:k}),fetch("https://api.openweathermap.org/data/2.5/weather?id=498817&appid=bcae149a17be581d7c3528ce08e41099").then(function(e){return e.json()}).then(function(t){return e.setState({weather:Math.floor(t.main.temp-273.15)})})}},{key:"render",value:function(){var e=this.state.weather,t=this.props,a=t.mode,n=t.city;return o.a.createElement("div",{onClick:this.changeMode,className:"".concat(d.a.block," ").concat(a===k?d.a.day:d.a.night)},a===k?o.a.createElement("div",{className:d.a.sun}):o.a.createElement("div",{className:d.a.moon}),o.a.createElement("div",{className:"".concat(d.a.cloud," ").concat(d.a.cloudFront)}),o.a.createElement("div",{className:"".concat(d.a.cloud," ").concat(d.a.cloudBack)}),o.a.createElement("div",{className:d.a.text},o.a.createElement("span",null,n),o.a.createElement("span",{className:d.a.num},e,"\xb0C")))}}]),t}(o.a.PureComponent),k="light",p="dark",v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={mode:k},a.changeMode=function(){return a.setState(function(e){return{mode:e.mode===k?p:k}})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=(new Date).getHours(),t=e>6&&e<21;this.setState({mode:t?k:p})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App ".concat(this.state.mode===k?"app_light":"app_dark")},o.a.createElement("div",{onClick:this.changeMode},o.a.createElement("p",{className:"".concat(this.state.mode===k?"clickTextLight":"clickTextDark")},"Click to change theme:"),o.a.createElement(_,{city:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",mode:this.state.mode})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.86f4b973.chunk.js.map