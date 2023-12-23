import{a as v,j as n}from"./jsx-runtime-29545a09.js";import{I as o}from"./Icon-86003388.js";const l=({disabled:i=!1,size:e="base",variant:u="primary",backgroundColor:s,label:d,iconBefore:t=void 0,iconAfter:a=void 0,type:r="button",...c})=>{const m="inline-flex items-center gap-2.5 rounded-sm w-fit",f={xs:"p-0.5 text-xs",sm:"p-2 text-sm",base:"p-3 text-base",lg:"p-4 text-lg",xl:"p-5 text-xl"},g={primary:"bg-indigo-700 text-white hover:bg-indigo-500 active:bg-indigo-500 focus:bg-blue-500 focus:outline focus:outline-2 focus:outline-indigo-700 disabled:text-indigo-300 disabled:bg-indigo-100",outline:"outline outline-1 outline-indigo-700 bg-bwhite text-indigo-700 hover:bg-indigo-100 hover:text-indigo-300 active:bg-indigo-100 active:text-indigo-300 focus:outline focus:outline-2 focus:outline-indigo-700 focus:text-indigo-700 disabled:bg-indigo-100 disabled:text-indigo-300 disabled:outline-none",text:"bg-white text-black hover:text-indigo-500 hover:bg-indigo-100 focus:bg-white focus:text-indigo-700 focus:outline focus:outline-2 focus:outline-indigo-700 disabled:text-indigo-300 disabled:bg-white"};return v("button",{type:r,disabled:i,className:[m,f[e],g[u]].join(" "),style:{backgroundColor:s},...c,children:[t&&n(o,{name:t,fill:"currentColor",className:e==="xs"?"w-4 h-4 fill-current":void 0}),d,a&&n(o,{name:a,className:e==="xs"?"w-4 h-4 fill-current":void 0})]})};try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"primary"'},{value:'"text"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"base"'},{value:'"lg"'},{value:'"xl"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'},{value:'"reset"'}]}},iconBefore:{defaultValue:{value:"undefined"},description:"",name:"iconBefore",required:!1,type:{name:"enum",value:[{value:'"star"'},{value:'"chevron"'}]}},iconAfter:{defaultValue:{value:"undefined"},description:"",name:"iconAfter",required:!1,type:{name:"enum",value:[{value:'"star"'},{value:'"chevron"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{l as B};
