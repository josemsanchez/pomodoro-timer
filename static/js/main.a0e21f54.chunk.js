(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s(8),r=s.n(i),a=(s(16),s(17),s(2)),c=s(3),o=s(5),l=s(4),u=s(0);function d(){return Object(u.jsxs)("div",{className:"header-container",children:[Object(u.jsxs)("h1",{className:"title",children:["P",Object(u.jsx)("span",{children:"o"}),"m",Object(u.jsx)("span",{children:"o"}),"d",Object(u.jsx)("span",{children:"o"}),"r",Object(u.jsx)("span",{children:"o"})," Timer"]}),Object(u.jsxs)("h2",{children:["Online timer based on the"," ",Object(u.jsx)("a",{href:"https://en.wikipedia.org/wiki/Pomodoro_Technique",target:"_blank",rel:"noopener noreferrer",children:"Pomodoro Technique."})]}),Object(u.jsx)("h2",{children:"Increase or decrease the session and break lengths below as needed, and click the timer to start."}),Object(u.jsx)("h2",{children:"The timer will let you know when either a session or a break has ended by playing a sound."})]})}function m(){return Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsxs)("ul",{className:"social-list",children:[Object(u.jsx)("li",{className:"contact",children:Object(u.jsx)("a",{href:"mailto:jmsanchezdiaz@gmail.com",children:Object(u.jsx)("i",{className:"fa fa-envelope"})})}),Object(u.jsx)("li",{className:"linkedin",children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/jmsanchezdiaz",children:Object(u.jsx)("i",{className:"fa fa-linkedin"})})}),Object(u.jsx)("li",{className:"github",children:Object(u.jsx)("a",{href:"https://github.com/josemsanchez",children:Object(u.jsx)("i",{className:"fa fa-github"})})}),Object(u.jsx)("li",{className:"twitter",children:Object(u.jsx)("a",{href:"https://twitter.com/JoseSzDz",children:Object(u.jsx)("i",{className:"fa fa-twitter"})})}),Object(u.jsx)("li",{className:"freecodecamp",children:Object(u.jsx)("a",{href:"http://www.freecodecamp.com/lifeisshort",children:Object(u.jsx)("i",{className:"fa fa-fire"})})})]}),Object(u.jsxs)("p",{className:"footer-note",children:["Made with ",Object(u.jsx)("i",{className:"fa fa-heart"})," by Jose Sanchez / 2022"]})]})}var j=s(6),h=s.p+"static/media/martian-gun.5ec88a0c.mp3",b=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleSetterClick=function(t,s,n){e.props.timerRunning||("increment"===t&&n<60&&e.props.updateSetter("increment",s,n),"decrement"===t&&n>1&&e.props.updateSetter("decrement",s,n))},e}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"setters",children:[Object(u.jsxs)("div",{className:"session-setter box-shadow",children:[Object(u.jsx)("p",{id:"session-label",children:"Session length"}),Object(u.jsx)("button",{id:"session-increment",className:"control-button",onClick:function(){return e.handleSetterClick("increment","sessionMinutes",e.props.sessionMinutes)},children:Object(u.jsx)("i",{className:"fa fa-arrow-up"})}),Object(u.jsxs)("p",{className:"session-length",children:[Object(u.jsx)("span",{id:"session-length",children:this.props.sessionMinutes})," min"]}),Object(u.jsx)("button",{id:"session-decrement",className:"control-button",onClick:function(){return e.handleSetterClick("decrement","sessionMinutes",e.props.sessionMinutes)},children:Object(u.jsx)("i",{className:"fa fa-arrow-down"})})]}),Object(u.jsxs)("div",{className:"break-setter box-shadow",children:[Object(u.jsx)("p",{id:"break-label",children:"Break length"}),Object(u.jsx)("button",{id:"break-increment",className:"control-button",onClick:function(){return e.handleSetterClick("increment","breakMinutes",e.props.breakMinutes)},children:Object(u.jsx)("i",{className:"fa fa-arrow-up"})}),Object(u.jsxs)("p",{className:"break-length",children:[Object(u.jsx)("span",{id:"break-length",children:this.props.breakMinutes})," min"]}),Object(u.jsx)("button",{id:"break-decrement",className:"control-button",onClick:function(){return e.handleSetterClick("decrement","breakMinutes",e.props.breakMinutes)},children:Object(u.jsx)("i",{className:"fa fa-arrow-down"})})]})]})}}]),s}(n.Component),p=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"handleTimerStatusMessage",value:function(){return this.props.timerRunning?"Timer is running.":"Timer is paused. Click to run."}},{key:"handleTimerTypeMessage",value:function(){return this.props.onSession?"Session pomodoro.":"Break pomodoro."}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"start_stop",className:"timer box-shadow",onClick:this.props.controlTimerPause,children:[Object(u.jsx)("h3",{id:"time-left",className:"timer-length",children:this.props.timeLeft}),Object(u.jsx)("h4",{id:"timer-label",className:"type",children:this.handleTimerTypeMessage()}),Object(u.jsx)("h4",{id:"timer-label",className:"status",children:this.handleTimerStatusMessage()})]})}}]),s}(n.Component);function f(e){var t=e.resetTimer;return Object(u.jsx)("div",{className:"reset",children:Object(u.jsx)("button",{id:"reset",className:"control-button box-shadow",onClick:t,children:"Reset"})})}var O=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).updateTimer=function(){var e=n.state,t=e.timerRunning,s=e.minutes,i=e.onSession,r=e.seconds,a=e.sessionMinutes,c=e.onFirstPomodoro;if(t){if(r>0)n.setState({seconds:r-=1});else if(s+r>1){var o=i&&c?a:s;n.setState({minutes:o-1,seconds:60,onFirstPomodoro:!1},(function(){return n.updateTimerInformation(o,r)}))}else 1===s&&0===r?n.setState({minutes:0,seconds:60}):s+r===0&&n.handleSessionOrBreak();setTimeout(n.updateTimer,1e3),n.updateTimerInformation(s,r)}},n.handleSessionOrBreak=function(){var e=n.state,t=e.onSession,s=e.breakMinutes,i=e.sessionMinutes;document.getElementById("beep").play(),t?n.setState({onSession:!1,minutes:s,seconds:0}):t||n.setState({onSession:!0,minutes:i,seconds:0})},n.updateTimerInformation=function(e,t){var s=function(e,t){var s=e<10?"0".concat(e):"".concat(e),n=t<10?"0".concat(t):"".concat(t);return"".concat(s,":").concat(n)}(e,t);n.setState({timeLeft:s})},n.updateSetter=function(e,t,s){n.setState({seconds:0});var i,r,a="sessionMinutes"===t;"increment"===e&&n.setState((i={},Object(j.a)(i,t,s+1),Object(j.a)(i,"minutes",a?s+1:n.state.minutes),i),(function(){return n.updateTimerInformation(n.state.minutes,n.state.seconds)}));"decrement"===e&&n.setState((r={},Object(j.a)(r,t,s-1),Object(j.a)(r,"minutes",a?s-1:n.state.minutes),r),(function(){return n.updateTimerInformation(n.state.minutes,n.state.seconds)}))},n.controlTimerPause=function(){n.state.timerRunning?n.setState({timerRunning:!1}):n.setState({timerRunning:!0},(function(){return n.updateTimer()}))},n.resetTimer=function(){var e=document.getElementById("beep");e.pause(),e.currentTime=0,n.setState(n.initialState)},n.state=n.initialState,n}return Object(c.a)(s,[{key:"initialState",get:function(){return{breakMinutes:5,minutes:25,onFirstPomodoro:!0,onSession:!0,seconds:0,sessionMinutes:25,timeLeft:"25:00",timerRunning:!1}}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"pomodoro-container",children:[Object(u.jsx)(p,{controlTimerPause:this.controlTimerPause,onSession:this.state.onSession,timeLeft:this.state.timeLeft,timerRunning:this.state.timerRunning}),Object(u.jsx)(f,{resetTimer:this.resetTimer}),Object(u.jsx)(b,{breakMinutes:this.state.breakMinutes,sessionMinutes:this.state.sessionMinutes,timerRunning:this.state.timerRunning,updateSetter:this.updateSetter}),Object(u.jsx)("audio",{id:"beep",src:h})]})}}]),s}(n.Component),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"content-container",children:[Object(u.jsx)(d,{}),Object(u.jsx)(O,{}),Object(u.jsx)(m,{})]})}}]),s}(n.Component);r.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a0e21f54.chunk.js.map