(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),s=t(4),o=t.n(s),j=(t(9),t(10),t(2)),r=t(0);function a(e){var n=e.Manipulative,t=e.Directive,i=e.Mean,c=e.Optimistic,s=e.Pessimistic,o=e.onSecondClicked;return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{id:"Manipulative",onClick:function(){o(0)},children:n}),Object(r.jsx)("button",{onClick:function(){o(1)},children:t}),Object(r.jsx)("button",{onClick:function(){o(2)},children:i}),Object(r.jsx)("button",{onClick:function(){o(3)},children:c}),Object(r.jsx)("button",{onClick:function(){o(4)},children:s})]})}function l(e){var n=e.Inspirational,t=e.GoalOriented,i=e.onThirdClicked;return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){i(0)},children:n}),Object(r.jsx)("button",{onClick:function(){console.log("I've been clicked",{GoalOriented:t}),i(1)},children:t})]})}function u(e){var n=e.InspManip,t=e.InspDirect,i=e.InspMean,c=e.InspOpt,s=e.InspPess;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{id:"InspManip",children:n}),Object(r.jsx)("h2",{id:"InspDirect",children:t}),Object(r.jsx)("h2",{id:"InspMean",children:i}),Object(r.jsx)("h2",{id:"InspOpt",children:c}),Object(r.jsx)("h2",{id:"InspPess",children:s})]})}function b(){var e=Object(i.useState)([]),n=Object(j.a)(e,2),t=(n[0],n[1]),c=Object(i.useState)([]),s=Object(j.a)(c,2),o=s[0],b=s[1],d=Object(i.useState)([]),O=Object(j.a)(d,2),p=O[0],h=O[1],f=Object(i.useState)(!1),x=Object(j.a)(f,2),I=x[0],v=x[1],k=Object(i.useState)([]),C=Object(j.a)(k,2),M=C[0],P=C[1],S=Object(i.useState)(""),g=Object(j.a)(S,2),m=(g[0],g[1]),D=Object(i.useState)(!1),T=Object(j.a)(D,2),y=(T[0],T[1]);return Object(i.useEffect)((function(){fetch("data/data.json").then((function(e){return e.json()})).then((function(e){t(e),b(e.Personalities[0].PersonalityType),h(e.Personalities[0].PersonalityBehaviors),P(e.Personalities[0].InspirationalDialogue)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(a,{Manipulative:o[0],Directive:o[1],Mean:o[2],Optimistic:o[3],Pessimistic:o[4],onSecondClicked:function(e){console.log(e),m(e),v(!0)}}),I&&Object(r.jsx)(l,{Inspirational:p[0],GoalOriented:p[1],onThirdClicked:function(e){console.log(e),y(e),y(!0)}}),u&&Object(r.jsx)(u,{InspManip:M[0],InspDirect:M[1],InspMean:M[2],InspOpt:M[3],InspPess:M[4]})]})}var d=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,s=n.getLCP,o=n.getTTFB;t(e),i(e),c(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),O()},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.83c47dff.chunk.js.map