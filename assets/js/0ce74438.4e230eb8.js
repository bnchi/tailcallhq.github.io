"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3365],{39148:(e,t,n)=>{n.d(t,{K:()=>s,s:()=>r});const a="The modern GraphQL runtime",r={HOME:a,ABOUT:`About | ${a}`,ENTERPRISE:`Enterprise | ${a}`,CONTACT:`Contact | ${a}`,PLAYGROUND:`Playground | ${a}`},s={HOME:"Tailcall gives you instant GraphQL on new and existing REST, Grpc and GraphQL APIs. Connect Tailcall to your API & get GraphQL in under a minute.",ABOUT:"Know more about Tailcall and how it can help you build better, faster, and more scalable GraphQL APIs.",ENTERPRISE:"Tailcall is the GraphQL platform engineered for scale. Learn how Tailcall can help your enterprise.",CONTACT:"Get in touch with us for any queries, feedback, or support. We are here to help you.",PLAYGROUND:"Play around with Tailcall's GraphQL playground to see how you can build and deploy GraphQL APIs in minutes."}},29414:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(96540),r=n(29970),s=n(7407),o=n(75940),i=n(22375),l=n(74848);const c=()=>{const e="undefined"!=typeof window&&new URLSearchParams(window.location.search).get("u"),t="string"==typeof e&&(0,i.Gz)(e)&&new URL(e)||"",[n,r]=(0,a.useState)(""!==t?new URL(t):""),[s,c]=(0,a.useState)(t.toString()),d=((e,t)=>{const[n,r]=(0,a.useState)(e);return(0,a.useEffect)((()=>{const n=setTimeout((()=>{r(e)}),t);return()=>{clearTimeout(n)}}),[e,t]),n})(s,500);(0,a.useEffect)((()=>{(0,i.Gz)(d)&&r(new URL(d))}),[d]);return(0,l.jsx)("div",{className:"min-h-[90vh]",children:"undefined"!=typeof window&&(0,l.jsxs)("div",{className:"mt-SPACE_06",children:[(0,l.jsx)("div",{className:"flex px-SPACE_04",children:(0,l.jsx)("input",{name:"api-endpoint",type:"url",value:s,onChange:e=>c(e.target.value),className:"border border-solid border-tailCall-border-light-500 rounded-lg font-space-grotesk h-11 w-[100%]\n    p-SPACE_04 text-content-small outline-none focus:border-x-tailCall-light-700",placeholder:"API Endpoint"})}),(0,l.jsx)("div",{className:"flex my-SPACE_03",children:(0,l.jsx)(o.Jd,{fetcher:async(e,t)=>{if(""===n.toString().trim())return Promise.resolve({});(0,i.p8)("GraphQL","tc_fetch_query",n.toString());const a=await fetch(n.toString(),{method:"post",headers:{"Content-Type":"application/json",...t?.headers},body:JSON.stringify(e)});return await a.json()},children:(0,l.jsx)(o.Jd.Logo,{children:(0,l.jsx)(l.Fragment,{})})})})]})})},d=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c,{})});var u=n(56347),h=n(39148);const p=()=>{const e=(0,u.zy)();return(0,a.useEffect)((()=>{r.Ay.send({hitType:"pageview",page:e.pathname,title:"Playground Page"})}),[]),(0,l.jsx)(s.A,{title:h.s.PLAYGROUND,description:h.K.PLAYGROUND,children:(0,l.jsx)(d,{})})}}}]);