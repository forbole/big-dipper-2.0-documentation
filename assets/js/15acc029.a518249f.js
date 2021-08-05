"use strict";(self.webpackChunkbig_dipper_2_0_docs=self.webpackChunkbig_dipper_2_0_docs||[]).push([[497],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,y=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return t?o.createElement(y,i(i({ref:n},d),{},{components:t})):o.createElement(y,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2829:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=["components"],s={title:"Customisation",sidebar_position:2},l=void 0,p={unversionedId:"cosmos-based/frontend/customisation",id:"cosmos-based/frontend/customisation",isDocsHomePage:!1,title:"Customisation",description:"You are free to change big dipper however you'd like to fit your needs. Below will be some basic changes available.",source:"@site/docs/cosmos-based/frontend/customisation.md",sourceDirName:"cosmos-based/frontend",slug:"/cosmos-based/frontend/customisation",permalink:"/cosmos-based/frontend/customisation",version:"current",lastUpdatedAt:1628144932,formattedLastUpdatedAt:"8/5/2021",sidebarPosition:2,frontMatter:{title:"Customisation",sidebar_position:2},sidebar:"mySidebar",previous:{title:"Setup",permalink:"/cosmos-based/frontend/setup"}},d=[{value:"Theme(s)",id:"themes",children:[]},{value:"TX Messages",id:"tx-messages",children:[]}],c={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You are free to change big dipper however you'd like to fit your needs. Below will be some basic changes available."),(0,a.kt)("h2",{id:"themes"},"Theme(s)"),(0,a.kt)("p",null,"By default we offer ",(0,a.kt)("inlineCode",{parentName:"p"},"light"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dark"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deuteranopia")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tritanopia")," themes to make our explorer more accessible."),(0,a.kt)("p",null,"We recommend you only edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"light")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dark")," modes. They are available in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/styles/themes"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index")," - holds the overall common usage for ",(0,a.kt)("inlineCode",{parentName:"p"},"light")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dark"),". They can easily be overwritten by copying and pasting their individual values in ",(0,a.kt)("inlineCode",{parentName:"p"},"dark.ts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"light.ts"),"."),(0,a.kt)("h2",{id:"tx-messages"},"TX Messages"),(0,a.kt)("p",null,"By default, message types that don't exist on the base chain (cosmos in this case) will be displayed as ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")," but you can easily customize your own by doing the following:"),(0,a.kt)("p",null,"Setup a class model in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/models/msg/<module>"),". By default we have separated all tx msgs by their corresponding chain module making it easy to locate and associate. All messages must contain the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," (module), ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," (message type), ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," prop and a ",(0,a.kt)("inlineCode",{parentName:"p"},"fromJson")," static method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class MsgUnjail {\n  public category: Categories; // required\n  public type: string; // required\n  public json: any; // required\n  public validatorAddress: string;\n\n  constructor(payload: any) {\n    this.category = 'slashing'; // required\n    this.type = payload.type; // required\n    this.json = payload.json; // required\n    this.validatorAddress = payload.validatorAddress;\n  }\n\n  static fromJson(json: any) {\n    return new MsgUnjail({\n      json,\n      type: json['@type'],\n      validatorAddress: json.validator_addr,\n    });\n  }\n}\n")),(0,a.kt)("p",null,"Import and export your model in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/models/index.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import MsgUnjail from './msg/slashing/msg_unjail';\n\nexport {\n  MsgUnjail\n}\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"src/screens/transaction_details/components/msg")," create a corresponding component for your newly created model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'const Unjail = (props: {\n  message: MsgUnjail;\n}) => {\n  const { findAddress } = useChainContext();\n  const { message } = props;\n  const validator = findAddress(message.validatorAddress);\n  const validatorMoniker = validator ? validator?.moniker : message.validatorAddress;\n\n  return (\n    <Typography>\n      <Trans\n        i18nKey="message_contents:txUnjailContent"\n        components={[\n          (\n            <Name\n              address={message.validatorAddress}\n              name={validatorMoniker}\n            />\n          ),\n        ]}\n      />\n    </Typography>\n  );\n};\n')),(0,a.kt)("p",null,"Import and export your component in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/screens/transaction_details/components/index.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import Unjail from './msg/slashing/unjail';\n\nexport {\n  Unjail\n}\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"src/screens/transaction_details/utils.tsx")," go to ",(0,a.kt)("inlineCode",{parentName:"p"},"customTypeToModel")," and add your model in the following format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<message type>: {\n  model: <Model>,\n  content: <Component>,\n  tagTheme: <tag color>,\n  tagDisplay: <tag value>,\n}\n\n## example\n\n'/cosmos.slashing.v1beta1.MsgUnjail': {\n  model: MODELS.MsgUnjail,\n  content: COMPONENTS.Unjail,\n  tagTheme: 'five',\n  tagDisplay: 'txUnjailLabel',\n}\n")),(0,a.kt)("p",null,"Your newly added transaction message should be showing up correctly."))}m.isMDXComponent=!0}}]);