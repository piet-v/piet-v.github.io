(this["webpackJsonptetris-react"]=this["webpackJsonptetris-react"]||[]).push([[0],{16:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var a=n(1),r=n(17),c=n.n(r),o=function e(){Object(a.a)(this,e)};o.prefixHex=function(e){return 1===e.length?"0".concat(e):e},o.getColumnBinary=function(e,t){return e.map((function(e){return e[t]})).map((function(e){return e.val})).join("")},o.convert=function(t,n){for(var a="",r=0;r<n;r+=2){var u=o.getColumnBinary(t,r),i=o.getColumnBinary(t,r+1),l="".concat(u).concat(i).replace(/2/g,"1"),s=Number.parseInt(l,2).toString(16),m=o.prefixHex(s),f=new e(m,"hex"),h=c.a.encode(f);a=a.concat(h)}return a}}).call(this,n(13).Buffer)},19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(14),u=n.n(o),i=(n(24),n(1)),l=n(2),s=n(4),m=n(3),f=n(5),h=(n(25),n(7)),p=n(15);!function(e){e[e.INIT=0]="INIT",e[e.WORK=1]="WORK",e[e.PAUSE=2]="PAUSE",e[e.OVER=3]="OVER"}(a||(a={}));var d=new Array(4).fill(new Array(20).fill(0)),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleKey=function(e){var t=e.key;return n.props.handleKeyDown(t)},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKey)}},{key:"render",value:function(){return null}}]),t}(r.Component),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).game=void 0,n.handleKeyDown=function(e){var t=Object(h.a)(n).game;switch(e){case"ArrowRight":t.rotate();break;case"ArrowLeft":t.moveDown();break;case"ArrowUp":t.moveLeft();break;case"ArrowDown":t.moveRight()}},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;this.game=(e=function(e){return t.props.onUpdate(e)},new p.Engine(4,20,e,d)),this.game.start();setInterval((function(){t.game.moveDown()}),1e3)}},{key:"render",value:function(){return c.a.createElement(v,{handleKeyDown:this.handleKeyDown})}}]),t}(r.Component),b=n(6),y=function(e){var t,n=e.status,r=(t={},Object(b.a)(t,a.INIT,"LOADING"),Object(b.a)(t,a.WORK,"IN PROGRESS"),Object(b.a)(t,a.OVER,"GAME OVER"),Object(b.a)(t,a.PAUSE,"PAUSED"),t)[n];return c.a.createElement("h5",null,"STATUS: ",r)},O=function(e){var t=e.hash;return window.location.hash="|".concat(t),null},w=n(18),g=function e(){Object(i.a)(this,e)};g.mirror=function(e){return e.map((function(e){return Object(w.a)(e).reverse()}))},g.transpose=function(e){return e[0].map((function(t,n){return e.map((function(e){return e[n]}))}))},g.projectSideways=function(e){return g.mirror(g.transpose(e))};var j=n(16),S=function(e){var t=e.grid;if(!t.length)return null;var n=g.projectSideways(t),a=j.a.convert(n,20);return c.a.createElement(O,{hash:a})},A=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("h3",null,"Controls"),c.a.createElement("p",null,"\u2192 Rotate"),c.a.createElement("p",null,"\u2190 Move left"),c.a.createElement("p",null,"\u2191 Move up"),c.a.createElement("p",null,"\u2193 Move down"))},R=function(e){var t=e.statistic,n=1*t.countLinesReduced*1+2*t.countDoubleLinesReduced*3+3*t.countTrippleLinesReduced*4+4*t.countQuadrupleLinesReduced*5;return c.a.createElement("h5",null,"Score: ",n)},k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={gameState:{body:[],gameStatus:a.INIT,statistic:{}}},n.setGameState=function(e){n.setState({gameState:e})},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.gameState,t=e.body,n=e.gameStatus,a=e.statistic;return c.a.createElement("div",{className:"App"},c.a.createElement(E,{onUpdate:this.setGameState}),c.a.createElement(S,{grid:t}),c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"URL Tetris"),c.a.createElement(y,{status:n}),c.a.createElement(R,{statistic:a}),c.a.createElement(A,null)))}}]),t}(r.Component);u.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.736e6bbd.chunk.js.map