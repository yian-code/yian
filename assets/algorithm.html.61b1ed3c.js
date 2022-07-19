import{_ as l,r as o,o as i,c as r,a,w as e,b as n,d as s}from"./app.72515998.js";const p={},u=n("h2",{id:"\u9636\u4E58",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9636\u4E58","aria-hidden":"true"},"#"),s(" \u9636\u4E58")],-1),k=n("div",{class:"language-c ext-c line-numbers-mode"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<iostream>")]),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token keyword"},"int"),s(" ArSize "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"long"),s(),n("span",{class:"token keyword"},"long"),s(" factorials"),n("span",{class:"token punctuation"},"["),s("ArSize"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    factorials`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" factorials"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1LL"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" ArSize"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
        factorials`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" i "),n("span",{class:"token operator"},"*"),s(" factorials"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" ArSize"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
        std`),n("span",{class:"token operator"},"::"),s("cout "),n("span",{class:"token operator"},"<<"),s(" i "),n("span",{class:"token operator"},"<<"),s(),n("span",{class:"token string"},'"! = "'),s(),n("span",{class:"token operator"},"<<"),s(" factorials"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<<"),s(" std"),n("span",{class:"token operator"},"::"),s("endl"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),d=n("div",{class:"language-c ext-c line-numbers-mode"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token comment"},`/* \u8FD0\u884C\u7ED3\u679C
0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
7! = 5040
8! = 40320
9! = 362880
10! = 3628800
11! = 39916800
12! = 479001600
13! = 6227020800
14! = 87178291200
15! = 1307674368000
*/`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function m(b,v){const t=o("CodeGroupItem"),c=o("CodeGroup");return i(),r("div",null,[u,a(c,null,{default:e(()=>[a(t,{title:"\u7A0B\u5E8F"},{default:e(()=>[k]),_:1}),a(t,{title:"\u8FD0\u884C\u7ED3\u679C"},{default:e(()=>[d]),_:1})]),_:1})])}var f=l(p,[["render",m],["__file","algorithm.html.vue"]]);export{f as default};
