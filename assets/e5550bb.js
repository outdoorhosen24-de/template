(window.webpackJsonp=window.webpackJsonp||[]).push([[20,4,6,7,8,12,15,16,17,19],{256:function(t,e,n){"use strict";n.r(e);n(141),n(10),n(30);var r=n(19),o=n(68),l=n(140),c=n(257),d={name:"productItem",props:{product:Object},data:function(){var t=this,e=o.find((function(e){return e.name===t.product.category})),n=l.find((function(e){return e.name===t.product.brand}));return{config:r,categoryData:e,brandData:n}},methods:{decode:function(t){return c.decode(t)}}},f=n(18),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"course-item bg-light"},[n("div",{staticClass:"position-relative overflow-hidden"},[n("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[n("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumbs[0],alt:t.product.linkTitle}})],1),t._v(" "),n("div",{staticClass:"\n          w-100\n          d-flex\n          justify-content-center\n          position-absolute\n          bottom-0\n          start-0\n          mb-4\n        "},[n("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3 border-end",staticStyle:{"border-radius":"30px 0 0 30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")]),t._v(" "),n("a",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"0 30px 30px 0"},attrs:{href:t.product.shopLink,target:"_blank",rel:"nofollow noopener"}},[t._v("Bestellen")])],1)],1),t._v(" "),n("div",{staticClass:"text-center p-4 pb-0"},[n("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),n("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return n("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return n("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),n("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),n("div",{staticClass:"mb-4 h5"},[n("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),n("div",{staticClass:"d-flex border-top"},[n("small",{staticClass:"flex-fill text-center border-end py-2"},[n("i",{staticClass:"fa fa-toilet text-primary me-2"}),n("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),n("small",{staticClass:"flex-fill text-center border-end py-2"},[n("i",{staticClass:"fa text-primary me-2"}),n("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,n){"use strict";n.r(e);var r={name:"products",props:{products:Array}},o=n(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.products,(function(t,e){return n("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[n("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:n(256).default})},259:function(t,e,n){"use strict";n.r(e);var r=n(19),o={data:function(){return{config:r}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row gy-2 gx-4 mb-4 mt-5"},t._l(t.config.checklist,(function(e,r){return n("div",{key:r,staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v(t._s(e)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("3d80f2a4",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n.r(e);var r={name:"seoText",props:{seoData:Object}},o=n(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-8 fadeInUp",staticStyle:{"min-height":"400px"}},["content"in t.seoData.seotext?n("div",t._l(t.seoData.seotext.content,(function(text,e){return n("div",{key:e},[n("div",{staticClass:"mb-3 mt-5 h2",domProps:{innerHTML:t._s(text.title)}}),t._v(" "),n("p",{staticClass:"mb-4",domProps:{innerHTML:t._s(text.text)}})])})),0):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n(263)},266:function(t,e,n){var r=n(70)(!1);r.push([t.i,"h1[data-v-2e3e5140]{color:#fff}.bg-image[data-v-2e3e5140]{min-height:400px;background-image:url(/assets/images/featureHeader/outdoorhosen.webp);height:100%;background-repeat:no-repeat;background-size:cover}",""]),t.exports=r},269:function(t,e,n){"use strict";n.r(e);var r={name:"featureHeaderTwo",props:{headline:String,subline:String}},o=(n(265),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bg-dark py-5 bg-image"},[n("div",{staticClass:"container px-4 px-lg-5 my-5"},[n("div",{staticClass:"text-center text-white"},[n("h1",{staticClass:"display-4 fw-bolder"},[t._v(t._s(t.headline))]),t._v(" "),n("p",{staticClass:"lead fw-normal text-white mb-0"},[t._v("\n        "+t._s(t.subline)+"\n      ")])])])])}),[],!1,null,"2e3e5140",null);e.default=component.exports;installComponents(component,{Header:n(193).default})},270:function(t,e,n){"use strict";n.r(e);var r=n(19),o={data:function(){return{config:r}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-xxl py-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[n("div",{staticClass:"position-relative h-100"},[n("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{preset:"default",src:"/assets/images/featureHeader/outdoorhose.jpg",alt:t.config.seo.mainKeyword,width:"612",height:"514"}})],1)]),t._v(" "),n("div",{staticClass:"col-lg-6 fadeInUp"},[n("div",{staticClass:"section-title bg-white text-start text-primary pe-3"},[t._v("\n            Damen und Herren\n          ")]),t._v(" "),n("div",{staticClass:"mb-4 h1"},[t._v(t._s(t.config.seo.mainKeyword))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.config.seo.featureText)}}),t._v(" "),n("Checklist"),t._v(" "),n("nuxt-link",{staticClass:"btn btn-primary btn-lg py-3 px-5 mt-2",attrs:{to:"/shop/",title:t.config.seo.mainKeyword+" Shop"}},[t._v("zum "+t._s(t.config.seo.mainKeyword)+" Shop")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Checklist:n(259).default})},271:function(t,e,n){"use strict";n.r(e);n(43);var r=n(19),o=n(140),l=n(109),c={name:"brandsComponent",data:function(){var t=l.a.seo.getSeoForPage("shop");return{config:r,seoData:t,brands:o.slice(0,20)}}},d=n(18),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row py-5"},[n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),n("div",{staticClass:"mb-5 h2"},[t._v("Marken")])]),t._v(" "),t._l(t.brands,(function(e,r){return n("div",{key:r,staticClass:"col-2 h4 w-50"},[n("nuxt-link",{attrs:{to:"/marken/"+e.slug+"/",title:t.config.seo.mainKeyword+" von "+e.name},domProps:{innerHTML:t._s(e.name)}})],1)})),t._v(" "),n("div",{staticClass:"text-center pt-5"},[n("nuxt-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/marken/",title:t.seoData.title}},[t._v("Alle Marken")])],1)],2)])}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);n(20),n(10),n(44),n(56);var r=n(19),o=n(51).filter((function(t){return r.winnerProducts.includes(t.sku)})),l={name:"testsieger",data:function(){return{featured:o,config:r}}},c=n(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),n("div",{staticClass:"mb-5 h2"},[t._v("Testsieger")])]),t._v(" "),n("div",{staticClass:"row g-4 justify-content-center"},t._l(t.featured,(function(t){return n("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[n("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:n(256).default})},273:function(t,e,n){"use strict";n.r(e);var r=n(19),o=n(109).a.products.getFeaturedProducts(),l={name:"popularProducts",data:function(){return{config:r,products:o}}},c=n(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),n("div",{staticClass:"mb-5 h2"},[t._v("Beliebte Produkte")])]),t._v(" "),n("div",{staticClass:"row g-4 justify-content-center"},t._l(t.products,(function(t){return n("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[n("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:n(256).default})},286:function(t,e,n){"use strict";n.r(e);n(43);var r=n(19),o=n(51),l=r.seo.index,c={name:"IndexPage",head:{title:l.title,meta:[{hid:"description",name:"description",content:l.metaDescription},{hid:"robots",name:"robots",content:l.robots}]},data:function(){return{seoData:l,config:r,products:o.slice(0,r.numberOfProductsOnStartpage)}}},d=n(18),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FeatureHeaderTwo",{attrs:{headline:t.config.seo.mainKeyword,subline:t.config.subline}}),t._v(" "),n("FeaturedHeader"),t._v(" "),n("Brands"),t._v(" "),n("WinnerProducts"),t._v(" "),n("div",{staticClass:"container"},[n("Products",{attrs:{products:t.products}})],1),t._v(" "),n("PopularProducts"),t._v(" "),t.seoData&&"publish"in t.seoData.seotext&&!0===t.seoData.seotext.publish?n("SeoText",{attrs:{seoData:t.seoData}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FeatureHeaderTwo:n(269).default,FeaturedHeader:n(270).default,Brands:n(271).default,WinnerProducts:n(272).default,Products:n(258).default,PopularProducts:n(273).default,SeoText:n(264).default})}}]);