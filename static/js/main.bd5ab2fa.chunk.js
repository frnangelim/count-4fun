(this["webpackJsonpcount-4fun"]=this["webpackJsonpcount-4fun"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),r=n.n(a),i=(n(9),n(2)),l=(n(10),n(0));var j=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{class:"loader",children:"Carregando..."})})},o=new Date("06/11/2021").getTime();var d=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)({seconds:null,minutes:null,hours:null,days:null}),r=Object(i.a)(a,2),d=r[0],u=r[1],b=Object(c.useState)(!1),h=Object(i.a)(b,2),O=h[0],f=h[1];Object(c.useEffect)((function(){return v(),function(){clearInterval(n)}}),[]);var v=function(){var e=setInterval(m,1e3);s(e)},m=function(){var e=o-(new Date).getTime();if(e>0){var t=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),s=Math.floor(e%36e5/6e4),a=Math.floor(e%6e4/1e3);u({days:t,hours:c,minutes:s,seconds:a})}else clearInterval(n),f(!0)};return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("div",{className:"bg-1"}),Object(l.jsx)("div",{className:"bg-2"}),Object(l.jsx)("div",{className:"bg-3"}),Object(l.jsx)("div",{className:"bg-4"}),Object(l.jsx)("div",{className:"content",children:O?Object(l.jsx)("h1",{children:"PARTIU PRAIA CARAE!"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Contagem para o fim da depress\xe3o"})}),Object(l.jsx)("div",{children:null!=d.seconds?Object(l.jsxs)("h2",{children:[d.days,"d ",d.hours,"h ",d.minutes,"m ",d.seconds,"s"]}):Object(l.jsx)(j,{})})]})})]})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.bd5ab2fa.chunk.js.map