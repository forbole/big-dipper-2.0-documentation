"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[482],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},563:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(2122),o=t(9756),s=(t(7294),t(3905)),a=["components"],i={title:"base-v1.x.x to base-v1.6.0",sidebar_position:4},c=void 0,l={unversionedId:"cosmos-based/frontend/migrations/v1.x.x-to-v1.6.0",id:"cosmos-based/frontend/migrations/v1.x.x-to-v1.6.0",isDocsHomePage:!1,title:"base-v1.x.x to base-v1.6.0",description:"Since the release of v1.6.0 we have removed the use of React.Context and migrated to Recoil.",source:"@site/docs/cosmos-based/frontend/migrations/v1.x.x-to-v1.6.0.md",sourceDirName:"cosmos-based/frontend/migrations",slug:"/cosmos-based/frontend/migrations/v1.x.x-to-v1.6.0",permalink:"/cosmos-based/frontend/migrations/v1.x.x-to-v1.6.0",version:"current",lastUpdatedAt:1650374390,formattedLastUpdatedAt:"4/19/2022",sidebarPosition:4,frontMatter:{title:"base-v1.x.x to base-v1.6.0",sidebar_position:4},sidebar:"mySidebar",previous:{title:"base-v1.6.0 to base-v1.7.0",permalink:"/cosmos-based/frontend/migrations/v1.6.0-to-v1.7.0"}},p=[{value:"Update your chain&#39;s base branch",id:"update-your-chains-base-branch",children:[]},{value:"Update custom messages",id:"update-custom-messages",children:[]},{value:"Update custom messages (extras)",id:"update-custom-messages-extras",children:[]},{value:"Clean up",id:"clean-up",children:[]}],m={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Since the release of ",(0,s.kt)("inlineCode",{parentName:"p"},"v1.6.0")," we have removed the use of ",(0,s.kt)("inlineCode",{parentName:"p"},"React.Context")," and migrated to ",(0,s.kt)("a",{parentName:"p",href:"https://recoiljs.org/"},"Recoil"),"."),(0,s.kt)("p",null,"Doing so helped us better manage our global states on the long run and avoided context hell."),(0,s.kt)("h2",{id:"update-your-chains-base-branch"},"Update your chain's base branch"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ git fetch --tags\n$ git checkout <your chain base>\n$ git checkout -b merge/v1.6.0\n$ git merge base-v1.6.0\n")),(0,s.kt)("p",null,"Fix all merge conflicts."),(0,s.kt)("h2",{id:"update-custom-messages"},"Update custom messages"),(0,s.kt)("p",null,"By default, the only places the need updating should be custom messages. In your IDE search for files containing ",(0,s.kt)("inlineCode",{parentName:"p"},"useChainContext")),(0,s.kt)("p",null,"If it is a test file like the following, you can safely remove the mock"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"jest.mock('@contexts', () => ({\n  useChainContext: () => ({\n    findAddress: jest.fn(() => ({\n      moniker: 'moniker',\n      imageUrl: null,\n    })),\n  }),\n}));\n")),(0,s.kt)("p",null,"If it is a custom tx like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"import React from 'react';\nimport Trans from 'next-translate/Trans';\nimport { Typography } from '@material-ui/core';\nimport { Name } from '@components';\nimport { MsgLinkChainAccount } from '@models';\nimport { useChainContext } from '@contexts';\n\nconst LinkChainAccount = (props: {\n  message: MsgLinkChainAccount;\n}) => {\n  const { findAddress } = useChainContext();\n  const { message } = props;\n\n  const signer = findAddress(message.signer);\n  const signerMoniker = signer ? signer?.moniker : message\n    .signer;\n\n  return (\n    <Typography>\n      <Trans\n        i18nKey=\"message_contents:txLinkChainAccount\"\n        components={[\n          (\n            <Name\n              address={message.signer}\n              name={signerMoniker}\n            />\n          ),\n          (\n            <b />\n          ),\n        ]}\n        values={{\n          name: message.chainConfig.name,\n        }}\n      />\n    </Typography>\n  );\n};\n\nexport default LinkChainAccount;\n")),(0,s.kt)("p",null,"Replace ",(0,s.kt)("inlineCode",{parentName:"p"},"import { useChainContext } from '@contexts';")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"import { useProfileRecoil } from '@recoil/profiles';")," and delete ",(0,s.kt)("inlineCode",{parentName:"p"},"const { findAddress } = useChainContext();"),"."),(0,s.kt)("p",null,"Replace ",(0,s.kt)("inlineCode",{parentName:"p"},"const signer = findAddress(message.signer);")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"const signer = useProfileRecoil(message.signer);"),"."),(0,s.kt)("p",null,"Replace ",(0,s.kt)("inlineCode",{parentName:"p"},"const signerMoniker = signer ? signer?.moniker : message.signer;")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"const signerMoniker = signer ? signer?.name : message.signer;")),(0,s.kt)("p",null,"The final results should be something like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6,13,14}","{6,13,14}":!0},"import React from 'react';\nimport Trans from 'next-translate/Trans';\nimport { Typography } from '@material-ui/core';\nimport { Name } from '@components';\nimport { MsgLinkChainAccount } from '@models';\nimport { useProfileRecoil } from '@recoil/profiles';\n\nconst LinkChainAccount = (props: {\n  message: MsgLinkChainAccount;\n}) => {\n  const { message } = props;\n\n  const signer = useProfileRecoil(message.signer);\n  const signerMoniker = signer ? signer?.name : message.signer;\n\n  return (\n    <Typography>\n      <Trans\n        i18nKey=\"message_contents:txLinkChainAccount\"\n        components={[\n          (\n            <Name\n              address={message.signer}\n              name={signerMoniker}\n            />\n          ),\n          (\n            <b />\n          ),\n        ]}\n        values={{\n          name: message.chainConfig.name,\n        }}\n      />\n    </Typography>\n  );\n};\n\nexport default LinkChainAccount;\n")),(0,s.kt)("h2",{id:"update-custom-messages-extras"},"Update custom messages (extras)"),(0,s.kt)("p",null,"If you have a list of users please look at ",(0,s.kt)("inlineCode",{parentName:"p"},"src/components/msg/bank/multisend/index.tsx")," and see how ",(0,s.kt)("inlineCode",{parentName:"p"},"useProfilesRecoil")," is used."),(0,s.kt)("p",null,"All recoil related functions are located inside ",(0,s.kt)("inlineCode",{parentName:"p"},"src/recoil")),(0,s.kt)("h2",{id:"clean-up"},"Clean up"),(0,s.kt)("p",null,"Review that React Context is no longer being used. Feel free to open up an ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/forbole/big-dipper-2.0-cosmos/issues"},"issue")," if you have questions."))}u.isMDXComponent=!0}}]);