"use strict";(self.webpackChunk_1j1s_main_cms_docs=self.webpackChunk_1j1s_main_cms_docs||[]).push([[307],{8998:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=i(4848),r=i(8453);const s={sidebar_label:"Que faire si l'indexation des donn\xe9es Meilisearch reste bloqu\xe9e \xe0 10000 donn\xe9es dans Strapi ?",sidebar_position:3},t="Lorsque l'indexation depuis Strapi \xe9choue : lancer l'indexation depuis un strapi branch\xe9 \xe0 Meilisearch version locale",a={id:"tuto/fixer-la-synchro-meilisearch",title:"Lorsque l'indexation depuis Strapi \xe9choue : lancer l'indexation depuis un strapi branch\xe9 \xe0 Meilisearch version locale",description:"21 Ao\xfbt 2024",source:"@site/docs/tuto/fixer-la-synchro-meilisearch.md",sourceDirName:"tuto",slug:"/tuto/fixer-la-synchro-meilisearch",permalink:"/1j1s-main-cms/docs/tuto/fixer-la-synchro-meilisearch",draft:!1,unlisted:!1,editUrl:"https://github.com/DNUM-SocialGouv/1j1s-main-cms/tree/main/docs/docs/docs/tuto/fixer-la-synchro-meilisearch.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Que faire si l'indexation des donn\xe9es Meilisearch reste bloqu\xe9e \xe0 10000 donn\xe9es dans Strapi ?",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Comment copier les donn\xe9es Meilisearch en local ?",permalink:"/1j1s-main-cms/docs/tuto/copie-donnee-en-local"},next:{title:"Comment mettre en Production ?",permalink:"/1j1s-main-cms/docs/tuto/tutoMeP"}},l={},c=[{value:"Explication de la proc\xe9dure",id:"explication-de-la-proc\xe9dure",level:2}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"lorsque-lindexation-depuis-strapi-\xe9choue--lancer-lindexation-depuis-un-strapi-branch\xe9-\xe0-meilisearch-version-locale",children:"Lorsque l'indexation depuis Strapi \xe9choue : lancer l'indexation depuis un strapi branch\xe9 \xe0 Meilisearch version locale"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"21 Ao\xfbt 2024"})}),"\n",(0,o.jsx)(n.admonition,{title:"Contexte",type:"info",children:(0,o.jsx)(n.p,{children:"Si vous avez suivi la proc\xe9dure de resynchronisation et qu'\xe0 l'appui sur \"update\" la valeur du nombre de donn\xe9es index\xe9e reste bloqu\xe9e \xe0 10000 : L'anomalie provient du plugin Meilisearch Cloud utilis\xe9 qui limite \xe0 10000 indexations. Lorsque l\u2019ETL effectue son travail d\u2019upsert des contenus \xe0 charger sur Strapi, celui-ci impacte le nombre d'\xe9l\xe9ments d\u2019une collection (offre de stage, annonces de logements\u2026) et modifie nombre d\u2019entre eux. Puis, le plugin Meilisearch, au travers d\u2019une r\xe9action \xe0 un \xe9v\xe8nement propag\xe9 par Strapi, envoie un document \xe0 indexer dans Meilisearch."})}),"\n",(0,o.jsx)(n.h2,{id:"explication-de-la-proc\xe9dure",children:"Explication de la proc\xe9dure"}),"\n",(0,o.jsx)(n.p,{children:"Une d\xe9synchronisation entre le contenu index\xe9 par Meilisearch et le contenu pr\xe9sent en base de donn\xe9es est donc quotidiennement pr\xe9sente. Pour r\xe9soudre le probl\xe8me nous avons mis en place une solution de contournement en lan\xe7ant l'indexation depuis un strapi branch\xe9 \xe0 Meilisearch version locale, connect\xe9 aux url de Recette ou Prod."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["R\xe9aliser une copie des donn\xe9es Meilisearch en local. ",(0,o.jsx)(n.a,{href:"../tuto/copie-donnee-en-local",children:"Voir la section copie des donn\xe9es du CMS en local"})]}),"\n",(0,o.jsx)(n.li,{children:"Lancer l'indexation depuis la version locale"}),"\n",(0,o.jsx)(n.li,{children:"V\xe9rifier que l'indexation n'est plus bloqu\xe9e \xe0 10000 entr\xe9es"}),"\n"]}),"\n",(0,o.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var o=i(6540);const r={},s=o.createContext(r);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);