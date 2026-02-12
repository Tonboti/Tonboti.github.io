const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/github-svgrepo-C4n7JkZW.js","assets/index-BzQofF7n.js","assets/index-CgGN4R0R.css","assets/linkedin-DmQynsSE.js"])))=>i.map(i=>d[i]);
import{f as l,r as o,j as e,_ as a}from"./index-BzQofF7n.js";const i=o.lazy(()=>a(()=>import("./github-svgrepo-C4n7JkZW.js"),__vite__mapDeps([0,1,2]))),c=o.lazy(()=>a(()=>import("./linkedin-DmQynsSE.js"),__vite__mapDeps([3,1,2])));function d(t){window.open(t,"_blank").focus()}const p=({href:t,children:r,Icon:n})=>e.jsxs("button",{className:`left-0 flex items-center justify-center w-full  md:gap-1 gap-0.25 \r
                bg-conic-60 from-purple-500 via-purple-800 to-purple-500 md:p-2 md:px-3 p-1.5 px-2 rounded-full\r
                text-amber-400 \r
                transition-shadow relative\r
                hover:shadow-[0_0_0_5px_var(--bg-color),_0_0_0_7px_#ffb900,_0_0_20px_2px_#ffb900]\r
                \r
                before:h-auto before:top-0.75 before:bottom-0.75 before:left-0.75 before:right-0.75 before:absolute \r
\r
                before:bg-conic-250 before:from-purple-500 before:via-purple-800 before:to-purple-500\r
                before:rounded-full\r
                font-semibold\r
                `,onClick:()=>d(t),children:[e.jsx("div",{className:"absolute top-0.75 bottom-0.75 left-0.75 right-0.75 backdrop-blur-xl backdrop-brightness-95 rounded-full z-4 "}),n&&e.jsx("div",{className:"z-5 w-auto aspect-square md:h-3 h-2 flex justify-center items-center",children:e.jsx(n,{})}),e.jsx("div",{className:"z-5",children:r})]});function v(){const t=[["https://github.com/tonboti","Github",i],["https://www.linkedin.com/in/ivan-rafalskyi-28221a300","Linkedin",c],["https://ozint.eu/ozinter/27538/","Ozint.eu",void 0]],{isLightTheme:r,changeTheme:n}=l();console.log(r);const[u,f]=o.useState(0),[m,x]=o.useState(255),[b,h]=o.useState(255);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-[var(--text-primary)] w-full left-0 font-mono absolute top-1 md:top-2 mx-auto ",children:[e.jsx("div",{className:"text-3xl md:text-4xl",children:"Links"}),e.jsx("a",{href:"/",className:"underline font-mono  md:text-2xl  ",children:"Back to menu"})]}),e.jsx("div",{className:`rounded-4xl border-2
                        w-fit m-auto flex flex-col 
                        md:gap-1.5 gap-1 p-4 font-mono md:text-4xl text-2xl
                        ${r?"border-purple-800":"border-purple-400"}
                        `,children:t.map(s=>e.jsx(p,{href:s[0],Icon:s[2],children:s[1]}))})]})}export{v as default};
