(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[722],{7978:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ecommerce-website-design",function(){return i(1616)}])},2383:function(e,t,i){"use strict";var s=i(5893),n=i(7294),a=i(2406),o=i.n(a),r=i(9417),l=i(9603),c=i(5597);let d=e=>{let{padding:t,background:i,testimonials:a}=e,[d,u]=(0,n.useState)(!1),[m,p]=(0,n.useState)(0);return(0,s.jsxs)(c.Z,{padding:t,background:i,title:(0,s.jsx)("span",{className:"titleBackground",children:"Testimonials"}),children:[d&&(0,s.jsx)("div",{className:o().testimonialPopup,children:(0,s.jsxs)("div",{className:o().testimonialModal,children:[(0,s.jsx)(l.G,{icon:r.YIN,className:o().close,onClick:()=>u(!1),style:{width:"30px"}}),(0,s.jsx)("div",{className:o().testimonial,children:(0,s.jsxs)("div",{className:o().details,children:[(0,s.jsx)("div",{className:o().businessImage,children:(0,s.jsx)("img",{src:a[m].business,alt:""})}),(0,s.jsxs)("div",{className:o().text,children:[(0,s.jsx)("h3",{className:o().business,children:a[m].designation}),(0,s.jsx)("p",{children:a[m].text})]})]})})]})}),(0,s.jsxs)("div",{className:o().testimonialContainer,children:[(0,s.jsx)("div",{className:o().testimonialImage,children:(0,s.jsx)("img",{src:a[m].business,alt:""})}),(0,s.jsxs)("div",{className:o().testimonialData,children:[(0,s.jsx)("p",{children:a[m].text.replace(/(.{300})..+/,"$1…")}),(0,s.jsx)("p",{children:(0,s.jsx)("strong",{className:o().readMore,onClick:()=>u(!0),children:"Read More >"})}),(0,s.jsx)("h3",{className:o().business,children:a[m].designation}),(0,s.jsxs)("div",{className:o().controls,children:[(0,s.jsx)(l.G,{icon:r.A35,onClick:()=>p(0===m?a.length-1:m-1)}),(0,s.jsx)(l.G,{icon:r._tD,onClick:()=>p(m===a.length-1?0:m+1)})]})]})]})]})};t.Z=d},6741:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var s=i(5893),n=i(7294),a=i(853),o=i.n(a),r=i(3235),l=i(3387);let c=e=>{let{title:t,desc:i,icon:a,height:c,width:d,href:u}=e,[m,p]=(0,n.useState)(!1);return(0,s.jsx)("div",{className:o().flipboxWrapper,style:{width:"".concat(d||"33%"),height:"".concat(c||"450px")},children:(0,s.jsxs)("div",{className:o().flipbox,children:[!m&&(0,s.jsxs)(l.E.div,{className:o().front,onMouseEnter:()=>p(!0),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1},children:[(0,s.jsx)("div",{className:o().image,children:(0,s.jsx)("img",{src:a,alt:""})}),(0,s.jsx)("h2",{children:t})]}),m&&(0,s.jsxs)(l.E.div,{className:o().back,onMouseLeave:()=>p(!1),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1,delay:.1},children:[(0,s.jsx)("p",{children:i}),(0,s.jsx)(r.Z,{href:u,children:"Learn More"})]})]})})};var d=i(5597),u=i(9417),m=i(5820),p=i(9011),h=i.n(p),g=i(9603),x=i(1664),b=i.n(x);let y=e=>{let{title:t,desc:i,background:a,backgroundD:o,color:r,href:c}=e,[d,p]=(0,n.useState)(!1);return(0,s.jsx)("section",{className:h().accordionContainer,children:(0,s.jsxs)("div",{className:"".concat(d?h().active:""),children:[(0,s.jsxs)("div",{className:h().title,onClick:()=>p(!d),style:{background:"".concat(d?a:"none"),color:"".concat(d?r:"#000"),marginBottom:"".concat(d?"20px":"0"),position:"relative"},children:[t,(0,s.jsx)(g.G,{icon:d?u.Kl4:u.r8p,style:{fontSize:"20px",width:"20px"}})]}),(0,s.jsx)(m.M,{children:d&&(0,s.jsxs)(l.E.div,{initial:{height:0},animate:{height:"auto"},transition:{duration:.2},exit:{height:0},className:h().desc,style:{background:"".concat(d?o:"none")},children:[(0,s.jsx)("p",{children:i}),c&&(0,s.jsx)(b(),{className:h().flipLink,href:c,children:"Learn More"})]})})]})})},w=e=>{let{items:t,background:i,title:n,desc:a,height:r,width:l}=e;return(0,s.jsxs)(d.Z,{background:i,padding:"70px 0",title:n,desc:a,children:[(0,s.jsx)("div",{className:o().flipboxContainer,children:t.map(e=>(0,s.jsx)(c,{title:e.title,desc:e.desc,icon:e.icon,width:l,height:r,href:e.href},e.title))}),(0,s.jsx)("div",{className:o().accordionContainer,children:t.map(e=>(0,s.jsx)(y,{title:(0,s.jsxs)("div",{className:o().flipAccordion,children:[(0,s.jsx)("div",{className:o().image,children:(0,s.jsx)("img",{src:e.icon})}),(0,s.jsx)("h2",{children:e.title})]}),background:"#D6E8EB",backgroundD:"",color:"",desc:e.desc,href:e.href},e.title))})]})};var f=w},1616:function(e,t,i){"use strict";i.r(t);var s=i(5893),n=i(7294),a=i(7460),o=i(6699),r=i(6741),l=i(2383),c=i(9543),d=i(2847),u=i.n(d),m=i(9008),p=i.n(m),h=i(1163),g=i(5722);let x=e=>{let{setHeaderBg:t,uqid:i,utm:d,referrer:m}=e;t(!1);let[x,b]=(0,n.useState)(!1),y=(0,h.useRouter)();return(0,s.jsxs)(n.Fragment,{children:[(0,s.jsxs)(p(),{children:[(0,s.jsx)("link",{rel:"canonical",href:"https://skywarddigital.com.au/ecommerce-website-design"}),(0,s.jsx)("title",{children:"Skyward Digital | Ecommerce Website Design Services"}),(0,s.jsx)("meta",{name:"title",content:"Skyward Digital | Ecommerce Website Design Services"}),(0,s.jsx)("meta",{name:"description",content:"Grow your online sales with Skyward Digital's expert ecommerce website design services. Contact us today to create a beautiful, user-friendly and conversion-optimized ecommerce website."}),(0,s.jsx)(g.Z,{jsonSchema:{"@context":"http://www.schema.org","@type":"ProfessionalService",name:"Skyward Digital | Ecommerce Website Design Services",url:"https://skywarddigital.com.au/ecommerce-website-design",logo:"https://skywarddigital.com.au/Skyward-Digital-Logo.png",image:"https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",description:"Grow your online sales with Skyward Digital's expert ecommerce website design services. Contact us today to create a beautiful, user-friendly and conversion-optimized ecommerce website.",priceRange:"AUD",aggregateRating:{"@type":"AggregateRating",ratingValue:4.8,ratingCount:313,bestRating:5,worstRating:3},address:{"@type":"PostalAddress",streetAddress:"Waterman Business Chadstone, 1341 Dandenong Road, Level 2, UL40",addressLocality:"Chadstone",addressRegion:"Victoria",postalCode:"3148",addressCountry:"Australia"},telephone:"(03)70432364",geo:{"@type":"GeoCoordinates",latitude:-37.88563368049739,longitude:145.0827093593359},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],opens:"09:00",closes:"21:00"}],contactPoint:[{"@type":"ContactPoint",telephone:"(03)70432364",contactType:"customer support",areaServed:["AU"],availableLanguage:["English"]},{"@type":"ContactPoint",telephone:"(03)70432364",contactType:"technical support",areaServed:["AU"],availableLanguage:["English"]}],sameAs:["https://www.facebook.com/skywarddigitalmarketing","https://twitter.com/skywardigitalau","https://www.linkedin.com/company/skyward-digital-solutions/","https://www.instagram.com/skywarddigitalmarketing/","https://youtube.com/@skywarddigitalmarketing"]}})]}),(0,s.jsx)("section",{className:"".concat(u().banner),children:(0,s.jsxs)("div",{className:"container ".concat(u().banner),children:[(0,s.jsxs)("div",{className:u().heroText,children:[(0,s.jsx)("h1",{children:"Web Design To Propel And Power Your Business Around Your Universe"}),(0,s.jsxs)("p",{children:["Our web design service helps local businesses, service providers, and eCommerce website owners with substandard websites grow their leads, convert more clients and increase revenue.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"We reimagine your website with cost-effective packages and transparent reporting to ignite your business."]}),(0,s.jsx)("button",{className:"my-button-yellow",onClick:()=>b(!0),children:"Get in Touch"})]}),(0,s.jsx)("div",{className:u().heroForm,children:(0,s.jsxs)("div",{className:u().form,children:[(0,s.jsx)("h3",{className:"title",children:"Let's Kickstart Your Web Development Project"}),(0,s.jsx)("p",{children:"(Fast turnaround times, cutting-edge designs)"}),(0,s.jsxs)("form",{action:"https://crm.zoho.in/crm/WebToLeadForm",name:"WebToLeads433875000000295017",method:"POST",onSubmit:'javascript:document.charset="UTF-8"; return checkMandatory433875000000295017()',"accept-charset":"UTF-8",children:[(0,s.jsx)("input",{type:"text",style:{display:"none"},name:"xnQsjsdp",defaultValue:"f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3"}),(0,s.jsx)("input",{type:"hidden",name:"zc_gad",id:"zc_gad",defaultValue:""}),(0,s.jsx)("input",{type:"text",style:{display:"none"},name:"xmIwtLD",defaultValue:"9d30a34c942dc338e7b79b92c5d52b78f4c59e112b55286ffafb9173cc698082"}),(0,s.jsx)("input",{type:"text",style:{display:"none"},name:"actionType",defaultValue:"TGVhZHM="}),(0,s.jsx)("input",{type:"text",style:{display:"none"},name:"returnURL",defaultValue:"https://skywarddigital.com.au/thank-you".concat(y.asPath)}),(0,s.jsx)("input",{type:"text",name:"Last Name",id:"Last_Name",placeholder:"Full Name*",required:!0}),(0,s.jsx)("input",{type:"text",name:"Website",id:"Website",placeholder:"Website URL*",required:!0}),(0,s.jsx)("input",{type:"email",name:"Email",id:"Email",placeholder:"Email*",required:!0}),(0,s.jsx)("input",{type:"tel",name:"Mobile",id:"Mobile",placeholder:"Phone Number*",required:!0}),(0,s.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF4",name:"LEADCF4",maxlength:"255",defaultValue:y.asPath}),(0,s.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF5",name:"LEADCF5",maxlength:"255",defaultValue:i}),(0,s.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF6",name:"LEADCF6",maxlength:"255",defaultValue:d}),(0,s.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF7",name:"LEADCF7",maxlength:"255",defaultValue:m}),(0,s.jsxs)("select",{style:{display:"none"},id:"Lead_Source",name:"Lead Source",children:[(0,s.jsx)("option",{value:"-None-",children:"-None-"}),(0,s.jsx)("option",{value:"Website",selected:!0,children:"Website"})]}),(0,s.jsx)("textarea",{name:"Description",id:"Description",cols:"30",rows:"10",placeholder:"Additional info you'd like for us to know"}),(0,s.jsx)("button",{id:"formsubmit",type:"submit",children:"Let's Talk"})]})]})})]})}),x&&(0,s.jsx)(c.Z,{setPopup:b,uqid:i,referrer:m}),(0,s.jsx)(a.Z,{items:[{title:(0,s.jsxs)(s.Fragment,{children:["500+",(0,s.jsx)("br",{}),"Happy Clients"]}),icon:"/happyclients.png"},{title:(0,s.jsxs)(s.Fragment,{children:["Award",(0,s.jsx)("br",{}),"Winning Agency"]}),icon:"/award.png"},{title:(0,s.jsxs)(s.Fragment,{children:["After Hours",(0,s.jsx)("br",{}),"Support"]}),icon:"/support.png"},{title:(0,s.jsxs)(s.Fragment,{children:["Guaranteed",(0,s.jsx)("br",{}),"Results"]}),icon:"/guaranteed.png"}]}),(0,s.jsx)(o.Z,{setPopup:b,tab1i:"/cross browser.png",tab1t:"Cross-browser compatible",tab1d:"Our designs work seamlessly on all popular browsers like Google Chrome, Safari, Internet Explorer, & Firefox, among others.",tab2i:"/mobile friendly.png",tab2t:"Mobile Friendly",tab2d:"We create websites that adapt flawlessly to various screen sizes, and across devices like mobiles, tablets and PCs.",tab3i:"/lightning.png",tab3t:"Lightning Fast",tab3d:"We design lightning fast websites that both search engines and users love.",tab4i:"/conversion optimized.png",tab4t:"Conversion Optimised",tab4d:"Our high-performance website designs are engineered to convert browsers into buyers.",title:(0,s.jsxs)(s.Fragment,{children:["Focused on ",(0,s.jsx)("span",{className:"titleBackground",children:"intuitive design"})," with a simple and ",(0,s.jsx)("span",{className:"titleBackground",children:"fast shopping experience"})]}),desc:(0,s.jsx)("p",{className:"subtitle",children:"Your eCommerce store could be an extension of your existing bricks and mortar shop or exist only online. Either way, creating a delightful and seamless experience focused on your customer’s needs will generate revenue and repeat visits."})}),(0,s.jsx)(r.Z,{items:[{title:"WooCommerce",desc:"Your online store needs a seamless checkout experience. WooCommerce focuses on reducing cart abandonment with features like guest checkout to deliver a successful sale.",icon:"/woocommerce.png",href:"/contact"},{title:"Shopify",desc:"You can use premade themes or create your own with Shopify, so you get your unique shop. An extensive app library allows for personalised experiences to help you stand out.",icon:"/shopify.png",href:"/contact"},{title:"Wix",desc:"Wix can help you deliver an exceptional customer experience by keeping up-to-date with customers’ orders on the go with their store mobile app.",icon:"/wix.png",href:"/contact"},{title:"Magento",desc:"Built with eCommerce in mind, Magento allows you to set up multiple payment gateways and currencies so you can sell no matter where your customers live.",icon:"/magento.png",href:"/contact"},{title:"BigCommerce",desc:"BigCommerce doesn’t think you need to be a rocket scientist to get started. With a simple drag and drop, create your store, and you can launch quickly.",icon:"/bigcommerce.png",href:"/contact"},{title:"Squarespace",desc:"Squarespace offers stunning designs to build an online store. With fast checkout times, intuitive inventory management and no product limits, you’ll be up and away in no time.",icon:"/squarespace.png",href:"/contact"}],title:(0,s.jsxs)(s.Fragment,{children:["All the eCommerce platforms in the galaxy to ",(0,s.jsx)("span",{className:"titleBackground",children:"launch your next mission online"})]}),desc:(0,s.jsxs)("p",{className:"subtitle",children:["Choosing the right solution for your eCommerce website doesn’t need to be Overwhelming.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Do you need to keep up-to-date with customer orders on the go? Or is creating a personal online experience more meaningful? Need a custom theme or premade one?",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"With Skyward Digital, we will assess your business goals and review any existing website you have. Then, after learning all we need during the briefing (the battle plan), we start building your robust and optimised website."]}),background:"#d6e8eb"}),(0,s.jsx)(l.Z,{padding:"70px 0",testimonials:[{designation:"Southern Clothing",text:"Skyward Digital's ecommerce website design team was important in the success of our online store. Their ability to understand our target market and create a user-friendly, visually appealing website helped us increase online sales and improve customer satisfaction. Their team provided a range of services including product page optimization, checkout flow design, and integration with our payment gateway. Their ability to track and analyze website performance allowed for regular adjustments which helped us achieve our goals. Their dedication to customer service and attention to detail is unparalleled.",business:"/Client logo15.png"},{designation:"Technoor",text:"Skyward Digital's website design team went above and beyond for our mobile store. Their team provided a comprehensive strategy that included product page optimization, checkout flow design, and integration with our payment gateway. Their ability to understand our target market and tailor their strategy accordingly was instrumental in driving sales and improving customer satisfaction. Their attention to detail and dedication to customer service is unmatched. Our company recommends their services to any business looking to create their own website.",business:"/client logo1.png"},{designation:"Island Cowgirl Jewelry",text:"We needed an ecommerce website that effectively promoted our unique products and generated leads for our business. We knew that the design, user experience, and functionality of the website would play a crucial role in the success of our online presence. That's why we turned to Skyward Digital for their expert team of designers and developers.",business:"/client logo21.png"}]})]})};t.default=x},2406:function(e){e.exports={testimonialContainer:"Testimonials_testimonialContainer__ZMGuZ",testimonialImage:"Testimonials_testimonialImage__i5nYy",testimonialData:"Testimonials_testimonialData__9y9ye",business:"Testimonials_business__OrHRf",readMore:"Testimonials_readMore__EyEkZ",controls:"Testimonials_controls__rjR5l",testimonialPopup:"Testimonials_testimonialPopup__5Ra4_",close:"Testimonials_close__GnNJu",testimonialModal:"Testimonials_testimonialModal__q0eY3",testimonial:"Testimonials_testimonial__URXnG",details:"Testimonials_details__Y5ymQ",businessImage:"Testimonials_businessImage__ELQRe",text:"Testimonials_text__3BL7C",profile:"Testimonials_profile__BAe6Y"}},9011:function(e){e.exports={accordionContainer:"AccordionFlip_accordionContainer__Mj_Yd",title:"AccordionFlip_title__MUj7l",desc:"AccordionFlip_desc__59I0f",flipLink:"AccordionFlip_flipLink__Xucyt"}},853:function(e){e.exports={flipboxContainer:"Flipbox1_flipboxContainer__epJuS",flipboxWrapper:"Flipbox1_flipboxWrapper__iQklm",flipbox:"Flipbox1_flipbox__GWfhx",front:"Flipbox1_front__Sbmxw",image:"Flipbox1_image__Ilesl",back:"Flipbox1_back__MRFca",flipAccordion:"Flipbox1_flipAccordion__uanhN",accordionContainer:"Flipbox1_accordionContainer__StlKs"}}},function(e){e.O(0,[332,774,888,179],function(){return e(e.s=7978)}),_N_E=e.O()}]);