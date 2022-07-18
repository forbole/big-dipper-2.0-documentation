"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[844],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=o.createContext({}),l=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4440:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=["components"],s={title:"base-v1.6.0 to base-v1.7.0",sidebar_position:3},m=void 0,l={unversionedId:"cosmos-based/frontend/migrations/v1.6.0-to-v1.7.0",id:"cosmos-based/frontend/migrations/v1.6.0-to-v1.7.0",isDocsHomePage:!1,title:"base-v1.6.0 to base-v1.7.0",description:"Since the release of v1.7.0 we have removed formatDenom in favor of formatToken and formatNumber.",source:"@site/docs/cosmos-based/frontend/migrations/v1.6.0-to-v1.7.0.md",sourceDirName:"cosmos-based/frontend/migrations",slug:"/cosmos-based/frontend/migrations/v1.6.0-to-v1.7.0",permalink:"/cosmos-based/frontend/migrations/v1.6.0-to-v1.7.0",version:"current",lastUpdatedAt:1658156907,formattedLastUpdatedAt:"7/18/2022",sidebarPosition:3,frontMatter:{title:"base-v1.6.0 to base-v1.7.0",sidebar_position:3},sidebar:"mySidebar",previous:{title:"base-v1.9.0 to base-v1.10.0",permalink:"/cosmos-based/frontend/migrations/v1.9.0-to-v1.10.0"},next:{title:"base-v1.x.x to base-v1.6.0",permalink:"/cosmos-based/frontend/migrations/v1.x.x-to-v1.6.0"}},p=[{value:"Update your chain&#39;s base branch",id:"update-your-chains-base-branch",children:[]},{value:"Update custom messages",id:"update-custom-messages",children:[]},{value:"Clean up",id:"clean-up",children:[]}],u={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since the release of ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.7.0")," we have removed ",(0,a.kt)("inlineCode",{parentName:"p"},"formatDenom")," in favor of ",(0,a.kt)("inlineCode",{parentName:"p"},"formatToken")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"formatNumber"),"."),(0,a.kt)("p",null,"Due to the limit of js being js and how denoms can have as much as 18 decimal places, we have switched over to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/big.js"},"Big.js")," and converted all base messages with ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgCoin")," type to save the amount as a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("p",null,"The following global type declaraction has been updated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// before\ntype TokenUnit = {\n  value: number;\n  denom: string;\n  format: string;\n}\n\n// after\ntype TokenUnit = {\n  displayDenom: string;\n  baseDenom: string;\n  exponent: number;\n  value: string;\n}\n")),(0,a.kt)("h2",{id:"update-your-chains-base-branch"},"Update your chain's base branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git fetch --tags\n$ git checkout <your chain base>\n$ git checkout -b merge/v1.7.0\n$ git merge base-v1.7.0\n")),(0,a.kt)("p",null,"Fix all merge conflicts."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you want to keep formatDenom do not delete the file. Fix the merge while keeping the file and you should be good to go"))),(0,a.kt)("h2",{id:"update-custom-messages"},"Update custom messages"),(0,a.kt)("p",null,"By default, the only places the need updating should be custom messages. In your IDE search for files containing ",(0,a.kt)("inlineCode",{parentName:"p"},"formatToken")),(0,a.kt)("p",null,"If it is a custom tx like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import React from 'react';\nimport Trans from 'next-translate/Trans';\nimport useTranslation from 'next-translate/useTranslation';\nimport numeral from 'numeral';\nimport { Typography } from '@material-ui/core';\nimport { Name } from '@components';\nimport { formatDenom } from '@utils/format_denom';\nimport { MsgBurnTokens } from '@models';\nimport { useProfileRecoil } from '@recoil/profiles';\n\nconst BurnTokens = (props: {\n  message: MsgBurnTokens;\n}) => {\n  const { message } = props;\n  const { t } = useTranslation('transactions');\n\n  const liquidityProvider = useProfileRecoil(message.liquidityProvider);\n  const liqdPvdMoniker = liquidityProvider ? liquidityProvider?.name : message.liquidityProvider;\n\n  const amountBeforeParse = message.amount;\n  const parsedAmount = amountBeforeParse.map((x) => {\n    const eachAmount = formatDenom(x.amount, x.denom);\n    return `${numeral(eachAmount.value).format('0,0.[000000]')} ${eachAmount.denom.toUpperCase()}`;\n  });\n  const finalData = parsedAmount.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);\n\n  return (\n    <Typography>\n      <Trans\n        i18nKey=\"message_contents:txBurnTokens\"\n        components={[\n          (\n            <Name\n              address={message.liquidityProvider}\n              name={liqdPvdMoniker}\n            />\n          ),\n          <b />,\n        ]}\n        values={{\n          amount: finalData,\n        }}\n      />\n    </Typography>\n  );\n};\n\nexport default BurnTokens;\n\n")),(0,a.kt)("p",null,"Remove ",(0,a.kt)("inlineCode",{parentName:"p"},"import numeral from 'numeral';")," (leave the import if absolutely necessary)"),(0,a.kt)("p",null,"Remove ",(0,a.kt)("inlineCode",{parentName:"p"},"import { formatDenom } from '@utils/format_denom';")),(0,a.kt)("p",null,"Import ",(0,a.kt)("inlineCode",{parentName:"p"},"import { formatToken, formatNumber} from '@utils/format_token';")),(0,a.kt)("p",null,"Replace all occurance of ",(0,a.kt)("inlineCode",{parentName:"p"},"formatDenom")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"formatToken")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"${numeral(eachAmount.value).format('0,0.[000000]')} ${eachAmount.denom.toUpperCase()}")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"${formatNumber(eachAmount.value, eachAmount.exponent)} ${eachAmount.displayDenom.toUpperCase()}")),(0,a.kt)("p",null,"The final results should be something like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6,7,8,23,25}","{6,7,8,23,25}":!0},"import React from 'react';\nimport Trans from 'next-translate/Trans';\nimport useTranslation from 'next-translate/useTranslation';\nimport { Typography } from '@material-ui/core';\nimport { Name } from '@components';\nimport {\n  formatToken, formatNumber,\n} from '@utils/format_token';\nimport { MsgBurnTokens } from '@models';\nimport { useProfileRecoil } from '@recoil/profiles';\n\nconst BurnTokens = (props: {\n  message: MsgBurnTokens;\n}) => {\n  const { message } = props;\n  const { t } = useTranslation('transactions');\n\n  const liquidityProvider = useProfileRecoil(message.liquidityProvider);\n  const liqdPvdMoniker = liquidityProvider ? liquidityProvider?.name : message.liquidityProvider;\n\n  const amountBeforeParse = message.amount;\n  const parsedAmount = amountBeforeParse.map((x) => {\n    const eachAmount = formatToken(x.amount, x.denom);\n\n    return `${formatNumber(eachAmount.value, eachAmount.exponent)} ${eachAmount.displayDenom.toUpperCase()}`;\n  });\n  const finalData = parsedAmount.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);\n\n  return (\n    <Typography>\n      <Trans\n        i18nKey=\"message_contents:txBurnTokens\"\n        components={[\n          (\n            <Name\n              address={message.liquidityProvider}\n              name={liqdPvdMoniker}\n            />\n          ),\n          <b />,\n        ]}\n        values={{\n          amount: finalData,\n        }}\n      />\n    </Typography>\n  );\n};\n\nexport default BurnTokens;\n")),(0,a.kt)("h2",{id:"clean-up"},"Clean up"),(0,a.kt)("p",null,"Review that ",(0,a.kt)("inlineCode",{parentName:"p"},"formatToken")," is no longer being used. Feel free to open up an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/forbole/big-dipper-2.0-cosmos/issues"},"issue")," if you have questions."))}c.isMDXComponent=!0}}]);