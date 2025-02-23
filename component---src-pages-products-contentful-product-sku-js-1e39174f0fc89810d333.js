"use strict";(self.webpackChunkbarcadia=self.webpackChunkbarcadia||[]).push([[869],{7630:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(1597),i=a(9692).default.section.withConfig({displayName:"BannerModuleStyles",componentId:"sc-7qvn72-0"})(["height:100vh;position:relative;padding:30px var(--borderSpacing);.container{height:100%;display:flex;align-items:flex-end;justify-content:flex-start;}.gradient,.banner__image{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;}.gradient{background:radial-gradient( at bottom left,rgba(0,0,0,0.5),rgba(0,0,0,0) );}.banner__content{position:relative;z-index:2;min-height:33vh;width:100%;max-width:700px;@media (min-width:768px){width:66vw;}h1,h2{text-shadow:var(--textShadow);}h1{border-bottom:2px solid rgba(255,255,255,0.15);display:inline-block;}h2{font-size:var(--h5);font-weight:400;}h1,.price{margin-top:0;font-size:var(--bannerTitle);}}.banner__btns{display:flex;gap:var(--gap);}"]),c=a(396),o=a(3761),l=function(e){var t=e.children,l=e.title,A=e.subTitle,s=e.price,d=e.enquire;return n.createElement(n.Fragment,null,n.createElement(i,null,t||n.createElement(c.S,{className:"banner__image",imgClassName:"banner__image--content",src:"../../../static/macbook-color.jpg",alt:"Banner Image",layout:"fullWidth",placeholder:"blurred",__imageData:a(6058)}),n.createElement("div",{className:"container"},n.createElement("div",{className:"banner__content"},l&&n.createElement("h1",null,l,n.createElement("span",{style:{color:"var(--primary)"}},".")),A&&n.createElement("h2",null,A),s&&n.createElement("h2",{className:"price"},"£",s,n.createElement("span",{style:{color:"var(--primary)"}},".")),n.createElement("div",{className:"banner__btns"},d&&n.createElement(o.Z,{className:"btn",text:"Enquire Now",as:r.rU,to:"/contact"}),n.createElement(o.Z,{onClick:function(){(0,r.c4)("#topContent")},text:"Learn More"})))),n.createElement("div",{className:"gradient"})),n.createElement("span",{id:"topContent"}))}},3865:function(e,t,a){var n=a(7294),r=a(1597),i=a(3761),c=a(396),o=a(1148);t.Z=function(e){var t=e.feature,a=t.gatsbyPath,l=t.headerImage,A=t.title,s=t.introduction,d=(0,c.d)(l);return n.createElement(o.x,null,n.createElement(r.rU,{to:a},n.createElement(c.G,{className:"features__item--img",image:d,alt:"Product Image"}),A&&s&&n.createElement("div",{className:"features__item--content"},A&&n.createElement("h4",null,A),s&&n.createElement("p",null,s),n.createElement(i.Z,{text:"Read More",as:"span",arrow:!0}))))}},3978:function(e,t,a){var n=a(7294),r=a(1597),i=a(1148),c=a(3865),o=a(3055),l=a(3761);t.Z=function(e){var t=e.title,a=e.introduction,A=(0,o.Z)();return n.createElement(i.d,{className:"section"},t||a?n.createElement("div",{className:"container container__tight"},n.createElement("div",{className:"intro__area"},t&&n.createElement("h2",null,t),a&&n.createElement("p",null,a))):null,n.createElement("div",{className:"container container__tight container__scroll"},A.map((function(e,t){return n.createElement(c.Z,{feature:e,key:t})}))),n.createElement("div",{className:"container container__tight learn__more"},n.createElement(l.Z,{as:r.rU,to:"/products",text:"All Products"})))}},1148:function(e,t,a){a.d(t,{d:function(){return r},x:function(){return i}});var n=a(9692),r=n.default.section.withConfig({displayName:"FeaturesStyles__FeaturedProductsStyles",componentId:"sc-1ag9plu-0"})(["> div{&.container__scroll{gap:calc(var(--gap) / 2);padding-bottom:var(--gap);padding-left:var(--borderSpacing);padding-right:var(--borderSpacing);margin-left:calc(var(--borderSpacing) * -1);width:calc(100% + (var(--borderSpacing) * 2));@media (min-width:1200px){padding-bottom:0;width:100%;margin-left:auto;padding-left:0;padding-right:0;gap:var(--gap);}}}"]),i=n.default.aside.withConfig({displayName:"FeaturesStyles__FeaturedProductStyles",componentId:"sc-1ag9plu-1"})(["min-height:408px;background-color:#000;flex:0 0 80%;overflow:hidden;scroll-snap-align:center;scroll-margin-left:25px;position:relative;border-radius:6px;border:2px solid rgba(255,255,255,0.15);transition:border-color 0.6s ease,box-shadow 0.6s ease;@media (min-width:414px){min-height:434px;}@media (min-width:768px){min-height:500px;flex-basis:40%;}@media (min-width:1024px){min-height:600px;}@media (min-width:1200px){flex-basis:33.333%;flex-shrink:1;}.features__item--img{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;transition:transform 0.3s ease,opacity 0.3s ease;}.features__item--content{width:100%;position:absolute;z-index:2;padding:20px 10px;bottom:0;left:0;right:0;background:linear-gradient( 0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100% );@media (min-width:768px){padding:20px;}@media (min-width:1024px){padding:40px 20px;}@media (min-width:1200px){padding:50px 30px;}h4,p{text-shadow:var(--textShadow);}h4{color:#fff;}p{color:var(--bodyColor);}}&:hover{cursor:pointer;border-color:var(--primary);box-shadow:var(--boxShadow);.features__item--img{transform:scale(1.1);opacity:0.5;}}"])},3333:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(7294),r=a(3370),i=a(396),c=a(9692),o=a(7630),l=c.default.section.withConfig({displayName:"FaqStyles",componentId:"sc-c3c2cb-0"})([".question{min-height:calc(var(--gap) * 2);border-radius:6px;width:100%;background-color:transparent;border:2px solid rgba(255,255,255,0.15);color:#fff;display:flex;align-items:center;justify-content:space-between;padding:8px 20px;font-size:var(--p);cursor:pointer;transition:border-color 0.3s ease;&:hover{border-color:var(--primary);}.trigger{display:inline-flex;height:40px;width:50px;position:relative;font-size:35px;justify-content:center;align-items:center;color:var(--primary);transform-origin:center;transition:transform 0.6s ease;}}.answer{padding:calc(var(--gap) / 2);font-size:var(--p);}margin-bottom:calc(var(--gap) / 2);&.faq-open{.trigger{transform:rotate(-180deg);}}"]),A=a(2775),s=a(8872),d=a(4976),m=function(e){var t=e.title,a=e.description,r=(0,n.useState)(!1),i=r[0],c=r[1];return n.createElement(l,{className:i?"faq-open":"faq-closed"},n.createElement("button",{className:"question",onClick:function(){c((function(e){return!e}))}},t,n.createElement("div",{className:"trigger"},n.createElement(A.Yc6,null))),i&&n.createElement(d.E.div,{initial:"closed",animate:i?"open":"closed",variants:{open:{opacity:1,height:"auto"},closed:{opacity:0,height:0}},className:"answer"},(0,s.Z)(a)))},p=a(3978),g=a(5288),f=c.default.div.withConfig({displayName:"product-template__ProductTemplateStyles",componentId:"sc-bde07-0"})([".container{display:flex;flex-wrap:wrap;.column{flex:0 0 100%;@media (min-width:768px){flex-basis:50%;&:nth-child(1){padding-right:20px;}&:nth-child(2){padding-left:20px;}> *{&:last-child{margin-bottom:0;}}}> *{&:first-child{margin-top:0;}}}}"]),u=c.default.section.withConfig({displayName:"product-template__ProductGallery",componentId:"sc-bde07-1"})(["width:100%;> .container{display:flex;flex-wrap:wrap;gap:calc(var(--gap) / 2);@media (min-width:1024px){gap:var(--gap);}> *{width:calc(50% - 10px);@media (min-width:768px){width:calc(33.333% - 14px);}@media (min-width:1024px){width:calc(25% - 30px);}}}"]),h=function(e){var t=e.headerImage,a=e.title,c=e.price,l=e.introduction,A=e.description,s=e.faqs,d=e.gallery,h=(0,i.d)(t);return n.createElement(n.Fragment,null,n.createElement(r.Z,{title:a}),n.createElement(o.Z,{title:a,price:c,subTitle:l,enquire:!0},n.createElement(i.G,{className:"banner__image",image:h,alt:a})),n.createElement(f,{className:"section"},n.createElement("div",{className:"container container__tight"},A&&n.createElement("div",{className:"column"},n.createElement(g.Z,{richText:A})),s&&n.createElement("div",{className:"column"},s.map((function(e,t){return n.createElement(m,{key:t,title:e.question,description:e.answer})}))))),d&&n.createElement(u,{className:"section"},n.createElement("div",{className:"container container__tight"},d.map((function(e,t){var a=(0,i.d)(e);return n.createElement(i.G,{key:t,image:a})})))),n.createElement(p.Z,{title:"Featured Products from Barcadia.",introduction:"Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."}))},b=a(9935),E=function(e){var t=e.data.contentfulProduct;return n.createElement(n.Fragment,null,n.createElement(r.Z,{title:t.title}),n.createElement(b.Z,null,n.createElement(h,t)))}},6058:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4DaNM5If/8QAGRABAAMBAQAAAAAAAAAAAAAAAQACAxES/9oACAEBAAEFAg7LZ+SFkjrZJ//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAAQAREhMf/aAAgBAQAGPwI7Cwpf/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAEREHH/2gAIAQEAAT8hogylOY5rF2ef/9oADAMBAAIAAwAAABCbD//EABYRAAMAAAAAAAAAAAAAAAAAAAEQYf/aAAgBAwEBPxAVf//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAECAQE/EIf/xAAbEAEAAQUBAAAAAAAAAAAAAAABEQAQITGRQf/aAAgBAQABPxBhHrEwscpIzmxM8QsTQJTDAd2//9k="},"images":{"fallback":{"src":"/static/2247c39f145df7505f72ce04ceaeef39/71357/macbook-color.jpg","srcSet":"/static/2247c39f145df7505f72ce04ceaeef39/982db/macbook-color.jpg 750w,\\n/static/2247c39f145df7505f72ce04ceaeef39/e4f86/macbook-color.jpg 1080w,\\n/static/2247c39f145df7505f72ce04ceaeef39/c255e/macbook-color.jpg 1366w,\\n/static/2247c39f145df7505f72ce04ceaeef39/71357/macbook-color.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/2247c39f145df7505f72ce04ceaeef39/b99ea/macbook-color.webp 750w,\\n/static/2247c39f145df7505f72ce04ceaeef39/acf6c/macbook-color.webp 1080w,\\n/static/2247c39f145df7505f72ce04ceaeef39/8245d/macbook-color.webp 1366w,\\n/static/2247c39f145df7505f72ce04ceaeef39/74526/macbook-color.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7078125}')}}]);
//# sourceMappingURL=component---src-pages-products-contentful-product-sku-js-1e39174f0fc89810d333.js.map