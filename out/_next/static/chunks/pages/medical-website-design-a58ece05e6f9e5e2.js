(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{7971:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/medical-website-design",function(){return i(8662)}])},2383:function(e,t,i){"use strict";var a=i(5893),s=i(7294),n=i(2406),o=i.n(n),r=i(9417),l=i(9603),c=i(5597);let d=e=>{let{padding:t,background:i,testimonials:n}=e,[d,p]=(0,s.useState)(!1),[h,u]=(0,s.useState)(0);return(0,a.jsxs)(c.Z,{padding:t,background:i,title:(0,a.jsx)("span",{className:"titleBackground",children:"Testimonials"}),children:[d&&(0,a.jsx)("div",{className:o().testimonialPopup,children:(0,a.jsxs)("div",{className:o().testimonialModal,children:[(0,a.jsx)(l.G,{icon:r.YIN,className:o().close,onClick:()=>p(!1),style:{width:"30px"}}),(0,a.jsx)("div",{className:o().testimonial,children:(0,a.jsxs)("div",{className:o().details,children:[(0,a.jsx)("div",{className:o().businessImage,children:(0,a.jsx)("img",{src:n[h].business,alt:""})}),(0,a.jsxs)("div",{className:o().text,children:[(0,a.jsx)("h3",{className:o().business,children:n[h].designation}),(0,a.jsx)("p",{children:n[h].text})]})]})})]})}),(0,a.jsxs)("div",{className:o().testimonialContainer,children:[(0,a.jsx)("div",{className:o().testimonialImage,children:(0,a.jsx)("img",{src:n[h].business,alt:""})}),(0,a.jsxs)("div",{className:o().testimonialData,children:[(0,a.jsx)("p",{children:n[h].text.replace(/(.{300})..+/,"$1…")}),(0,a.jsx)("p",{children:(0,a.jsx)("strong",{className:o().readMore,onClick:()=>p(!0),children:"Read More >"})}),(0,a.jsx)("h3",{className:o().business,children:n[h].designation}),(0,a.jsxs)("div",{className:o().controls,children:[(0,a.jsx)(l.G,{icon:r.A35,onClick:()=>u(0===h?n.length-1:h-1)}),(0,a.jsx)(l.G,{icon:r._tD,onClick:()=>u(h===n.length-1?0:h+1)})]})]})]})]})};t.Z=d},6741:function(e,t,i){"use strict";i.d(t,{Z:function(){return j}});var a=i(5893),s=i(7294),n=i(853),o=i.n(n),r=i(3235),l=i(3387);let c=e=>{let{title:t,desc:i,icon:n,height:c,width:d,href:p}=e,[h,u]=(0,s.useState)(!1);return(0,a.jsx)("div",{className:o().flipboxWrapper,style:{width:"".concat(d||"33%"),height:"".concat(c||"450px")},children:(0,a.jsxs)("div",{className:o().flipbox,children:[!h&&(0,a.jsxs)(l.E.div,{className:o().front,onMouseEnter:()=>u(!0),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1},children:[(0,a.jsx)("div",{className:o().image,children:(0,a.jsx)("img",{src:n,alt:""})}),(0,a.jsx)("h2",{children:t})]}),h&&(0,a.jsxs)(l.E.div,{className:o().back,onMouseLeave:()=>u(!1),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1,delay:.1},children:[(0,a.jsx)("p",{children:i}),(0,a.jsx)(r.Z,{href:p,children:"Learn More"})]})]})})};var d=i(5597),p=i(9417),h=i(5820),u=i(9011),m=i.n(u),x=i(9603),g=i(1664),b=i.n(g);let y=e=>{let{title:t,desc:i,background:n,backgroundD:o,color:r,href:c}=e,[d,u]=(0,s.useState)(!1);return(0,a.jsx)("section",{className:m().accordionContainer,children:(0,a.jsxs)("div",{className:"".concat(d?m().active:""),children:[(0,a.jsxs)("div",{className:m().title,onClick:()=>u(!d),style:{background:"".concat(d?n:"none"),color:"".concat(d?r:"#000"),marginBottom:"".concat(d?"20px":"0"),position:"relative"},children:[t,(0,a.jsx)(x.G,{icon:d?p.Kl4:p.r8p,style:{fontSize:"20px",width:"20px"}})]}),(0,a.jsx)(h.M,{children:d&&(0,a.jsxs)(l.E.div,{initial:{height:0},animate:{height:"auto"},transition:{duration:.2},exit:{height:0},className:m().desc,style:{background:"".concat(d?o:"none")},children:[(0,a.jsx)("p",{children:i}),c&&(0,a.jsx)(b(),{className:m().flipLink,href:c,children:"Learn More"})]})})]})})},f=e=>{let{items:t,background:i,title:s,desc:n,height:r,width:l}=e;return(0,a.jsxs)(d.Z,{background:i,padding:"70px 0",title:s,desc:n,children:[(0,a.jsx)("div",{className:o().flipboxContainer,children:t.map(e=>(0,a.jsx)(c,{title:e.title,desc:e.desc,icon:e.icon,width:l,height:r,href:e.href},e.title))}),(0,a.jsx)("div",{className:o().accordionContainer,children:t.map(e=>(0,a.jsx)(y,{title:(0,a.jsxs)("div",{className:o().flipAccordion,children:[(0,a.jsx)("div",{className:o().image,children:(0,a.jsx)("img",{src:e.icon})}),(0,a.jsx)("h2",{children:e.title})]}),background:"#D6E8EB",backgroundD:"",color:"",desc:e.desc,href:e.href},e.title))})]})};var j=f},3537:function(e,t,i){"use strict";var a=i(5893);i(7294);var s=i(8599),n=i.n(s),o=i(1163);let r=e=>{let{title:t,desc:i,setPopup:s,uqid:r,utm:l,referrer:c}=e,d=(0,o.useRouter)();return(0,a.jsx)("section",{className:"".concat(n().banner),children:(0,a.jsxs)("div",{className:"container ".concat(n().banner),children:[(0,a.jsxs)("div",{className:n().heroText,children:[(0,a.jsx)("h1",{children:t}),i,(0,a.jsx)("button",{className:"my-button-yellow",onClick:()=>s(!0),children:"Get in Touch"})]}),(0,a.jsx)("div",{className:n().heroForm,children:(0,a.jsxs)("div",{className:n().form,children:[(0,a.jsx)("h3",{className:"title",children:"Get a free audit"}),(0,a.jsx)("p",{children:"100% Transparency, No BS, No dodgy stuff. Just pure results."}),(0,a.jsxs)("form",{action:"https://crm.zoho.in/crm/WebToLeadForm",name:"WebToLeads433875000000295017",method:"POST",onSubmit:'javascript:document.charset="UTF-8"; return checkMandatory433875000000295017()',"accept-charset":"UTF-8",children:[(0,a.jsx)("input",{type:"text",style:{display:"none"},name:"xnQsjsdp",defaultValue:"f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3"}),(0,a.jsx)("input",{type:"hidden",name:"zc_gad",id:"zc_gad",defaultValue:""}),(0,a.jsx)("input",{type:"text",style:{display:"none"},name:"xmIwtLD",defaultValue:"9d30a34c942dc338e7b79b92c5d52b78f4c59e112b55286ffafb9173cc698082"}),(0,a.jsx)("input",{type:"text",style:{display:"none"},name:"actionType",defaultValue:"TGVhZHM="}),(0,a.jsx)("input",{type:"text",style:{display:"none"},name:"returnURL",defaultValue:"https://skywarddigital.com.au/thank-you".concat(d.asPath)}),(0,a.jsx)("input",{type:"text",name:"Last Name",id:"Last_Name",placeholder:"Full Name",required:!0}),(0,a.jsx)("input",{type:"text",name:"Website",id:"Website",placeholder:"Website URL",required:!0}),(0,a.jsx)("input",{type:"email",name:"Email",id:"Email",placeholder:"Email",required:!0}),(0,a.jsx)("input",{type:"tel",name:"Mobile",id:"Mobile",placeholder:"Phone Number",required:!0}),(0,a.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF4",name:"LEADCF4",maxlength:"255",defaultValue:d.asPath}),(0,a.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF5",name:"LEADCF5",maxlength:"255",defaultValue:r}),(0,a.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF6",name:"LEADCF6",maxlength:"255",defaultValue:l}),(0,a.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF7",name:"LEADCF7",maxlength:"255",defaultValue:c}),(0,a.jsxs)("select",{style:{display:"none"},id:"Lead_Source",name:"Lead Source",children:[(0,a.jsx)("option",{value:"-None-",children:"-None-"}),(0,a.jsx)("option",{value:"Website",selected:!0,children:"Website"})]}),(0,a.jsx)("button",{id:"formsubmit",type:"submit",children:"Talk to a growth guru"})]})]})})]})})};t.Z=r},8662:function(e,t,i){"use strict";i.r(t);var a=i(5893),s=i(7294);i(3537);var n=i(7460),o=i(6699),r=i(6741),l=i(2383),c=i(9543),d=i(2847),p=i.n(d),h=i(9008),u=i.n(h),m=i(1163),x=i(5722);let g=e=>{let{setHeaderBg:t,uqid:i,utm:d,referrer:h}=e;t(!1);let g=(0,m.useRouter)(),[b,y]=(0,s.useState)(!1);return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)(u(),{children:[(0,a.jsx)("link",{rel:"canonical",href:"https://skywarddigital.com.au/medical-website-design"}),(0,a.jsx)("title",{children:"Skyward Digital | Medical Website Design Services"}),(0,a.jsx)("meta",{name:"title",content:"Skyward Digital | Medical Website Design Services"}),(0,a.jsx)("meta",{name:"description",content:"Improve patient engagement with Skyward Digital's expert medical website design services. Contact us today to create a professional, user-friendly and Privacy Act compliant website for your healthcare practice."}),(0,a.jsx)(x.Z,{jsonSchema:{"@context":"http://www.schema.org","@type":"ProfessionalService",name:"Skyward Digital | Medical Website Design Services",url:"https://skywarddigital.com.au/medical-website-design",logo:"https://skywarddigital.com.au/Skyward-Digital-Logo.png",image:"https://skywarddigital.com.au/_next/static/media/bannerBg.8088924c.jpg",description:"Improve patient engagement with Skyward Digital's expert medical website design services. Contact us today to create a professional, user-friendly and Privacy Act compliant website for your healthcare practice.",priceRange:"AUD",aggregateRating:{"@type":"AggregateRating",ratingValue:4.8,ratingCount:313,bestRating:5,worstRating:3},address:{"@type":"PostalAddress",streetAddress:"Waterman Business Chadstone, 1341 Dandenong Road, Level 2, UL40",addressLocality:"Chadstone",addressRegion:"Victoria",postalCode:"3148",addressCountry:"Australia"},telephone:"(03)70432364",geo:{"@type":"GeoCoordinates",latitude:-37.88563368049739,longitude:145.0827093593359},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],opens:"09:00",closes:"21:00"}],contactPoint:[{"@type":"ContactPoint",telephone:"(03)70432364",contactType:"customer support",areaServed:["AU"],availableLanguage:["English"]},{"@type":"ContactPoint",telephone:"(03)70432364",contactType:"technical support",areaServed:["AU"],availableLanguage:["English"]}],sameAs:["https://www.facebook.com/skywarddigitalmarketing","https://twitter.com/skywardigitalau","https://www.linkedin.com/company/skyward-digital-solutions/","https://www.instagram.com/skywarddigitalmarketing/","https://youtube.com/@skywarddigitalmarketing"]}})]}),(0,a.jsx)("section",{className:"".concat(p().banner),children:(0,a.jsxs)("div",{className:"container ".concat(p().banner),children:[(0,a.jsxs)("div",{className:p().heroText,children:[(0,a.jsx)("h1",{children:"Web Design To Propel And Power Your Business Around Your Universe"}),(0,a.jsxs)("p",{children:["Our web design service helps local businesses, service providers, and eCommerce website owners with substandard websites grow their leads, convert more clients and increase revenue.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"We reimagine your website with cost-effective packages and transparent reporting to ignite your business."]}),(0,a.jsx)("button",{className:"my-button-yellow",onClick:()=>y(!0),children:"Get in Touch"})]}),(0,a.jsx)("div",{className:p().heroForm,children:(0,a.jsxs)("div",{className:p().form,children:[(0,a.jsx)("h3",{className:"title",children:"Let's Kickstart Your Web Development Project"}),(0,a.jsx)("p",{children:"(Fast turnaround times, cutting-edge designs)"}),(0,a.jsxs)("form",{action:"https://crm.zoho.in/crm/WebToLeadForm",name:"WebToLeads433875000000295017",method:"POST",onSubmit:'javascript:document.charset="UTF-8"; return checkMandatory433875000000295017()',"accept-charset":"UTF-8",children:[(0,a.jsx)("input",{type:"text",style:{display:"none"},name:"xnQsjsdp",defaultValue:"f4accba967bb60aaadcbc35e7a6b6b01244f47ac2df9abdf74d46b4765cd7ef3"}),(0,a.jsx)("input",{type:"hidden",name:"zc_gad",id:"zc_gad",defaultValue:""}),(0,a.jsx)("input",{type:"text",style:{display:"none"},name:"xmIwtLD",defaultValue:"9d30a34c942dc338e7b79b92c5d52b78f4c59e112b55286ffafb9173cc698082"}),(0,a.jsx)("input",{type:"text",style:{display:"none"},name:"actionType",defaultValue:"TGVhZHM="}),(0,a.jsx)("input",{type:"text",style:{display:"none"},name:"returnURL",defaultValue:"https://skywarddigital.com.au/thank-you".concat(g.asPath)}),(0,a.jsx)("input",{type:"text",name:"Last Name",id:"Last_Name",placeholder:"Full Name*",required:!0}),(0,a.jsx)("input",{type:"text",name:"Website",id:"Website",placeholder:"Website URL*",required:!0}),(0,a.jsx)("input",{type:"email",name:"Email",id:"Email",placeholder:"Email*",required:!0}),(0,a.jsx)("input",{type:"tel",name:"Mobile",id:"Mobile",placeholder:"Phone Number*",required:!0}),(0,a.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF4",name:"LEADCF4",maxlength:"255",defaultValue:g.asPath}),(0,a.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF5",name:"LEADCF5",maxlength:"255",defaultValue:i}),(0,a.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF6",name:"LEADCF6",maxlength:"255",defaultValue:d}),(0,a.jsx)("input",{type:"text",style:{display:"none"},id:"LEADCF7",name:"LEADCF7",maxlength:"255",defaultValue:h}),(0,a.jsxs)("select",{style:{display:"none"},id:"Lead_Source",name:"Lead Source",children:[(0,a.jsx)("option",{value:"-None-",children:"-None-"}),(0,a.jsx)("option",{value:"Website",selected:!0,children:"Website"})]}),(0,a.jsx)("textarea",{name:"Description",id:"Description",cols:"30",rows:"10",placeholder:"Additional info you'd like for us to know"}),(0,a.jsx)("button",{id:"formsubmit",type:"submit",children:"Let's Talk"})]})]})})]})}),b&&(0,a.jsx)(c.Z,{setPopup:y,uqid:i,utm:d,referrer:h}),(0,a.jsx)(n.Z,{items:[{title:(0,a.jsxs)(a.Fragment,{children:["500+",(0,a.jsx)("br",{}),"Happy Clients"]}),icon:"/happyclients.png"},{title:(0,a.jsxs)(a.Fragment,{children:["Award",(0,a.jsx)("br",{}),"Winning Agency"]}),icon:"/award.png"},{title:(0,a.jsxs)(a.Fragment,{children:["After Hours",(0,a.jsx)("br",{}),"Support"]}),icon:"/support.png"},{title:(0,a.jsxs)(a.Fragment,{children:["Guaranteed",(0,a.jsx)("br",{}),"Results"]}),icon:"/guaranteed.png"}]}),(0,a.jsx)(o.Z,{setPopup:y,tab1i:"/cross browser.png",tab1t:"Cross-browser compatible",tab1d:"Our designs work seamlessly on all popular browsers like Google Chrome, Safari, Internet Explorer, & Firefox, among others.",tab2i:"/mobile friendly.png",tab2t:"Mobile Friendly",tab2d:"We create websites that adapt flawlessly to various screen sizes, and across devices like mobiles, tablets and PCs.",tab3i:"/lightning.png",tab3t:"Lightning Fast",tab3d:"We design lightning fast websites that both search engines and users love.",tab4i:"/conversion optimized.png",tab4t:"Conversion Optimised",tab4d:"Our high-performance website designs are engineered to convert browsers into buyers.",title:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"titleBackground",children:"Trust the Experts"})," in Healthcare Website Design"]}),desc:(0,a.jsxs)("div",{style:{margin:"40px 0",textAlign:"left"},children:[(0,a.jsxs)("div",{style:{marginBottom:"25px"},children:[(0,a.jsx)("h3",{children:"Communicates"}),(0,a.jsx)("p",{children:"Your organisation’s voice, products and services, and mission."})]}),(0,a.jsxs)("div",{style:{marginBottom:"25px"},children:[(0,a.jsx)("h3",{children:"Interactive features"}),(0,a.jsx)("p",{children:"for messaging and data exchange."})]}),(0,a.jsxs)("div",{style:{marginBottom:"25px"},children:[(0,a.jsx)("h3",{children:"Appeals"}),(0,a.jsx)("p",{children:"to both existing and prospective users."})]}),(0,a.jsxs)("div",{style:{marginBottom:"25px"},children:[(0,a.jsx)("h3",{children:"Discoverable"}),(0,a.jsx)("p",{children:"by prospective users through search engines."})]}),(0,a.jsxs)("div",{style:{marginBottom:"25px"},children:[(0,a.jsx)("h3",{children:" Complies"}),(0,a.jsx)("p",{children:"with all applicable security and regulatory standards – including HIPAA, ADA, GDPR, and CCPA."})]})]}),background:"#fff"}),(0,a.jsx)(r.Z,{items:[{title:"Dental",desc:"Showcase your expertise and commitment to patient care with a professional website. Educate your patients on a range of helpful topics around dental care.",icon:"/dental.png",href:"/contact"},{title:"Optometry",desc:"With a custom-built website, you can be found quicker in search than DIY sites. And can position you as a thought leader with a blog.",icon:"/optometry.png",href:"/contact"},{title:"Chiropractors",desc:"Help your clients reach you faster with clickable phone numbers and straightforward appointment booking. And share how your treatments can assist with a comprehensive services page.",icon:"/chiropractor.png",href:"/contact"},{title:"Physiotherapy",desc:"Imagine a client injuring themselves at basketball. They reach for their phone to find the nearest Physio. That’s why you need a mobile responsive website.",icon:"/physiotherapy.png",href:"/contact"},{title:"Private Medical Practitioner",desc:"GPs leveraged online appointments during the pandemic to prevent poor patient experience when reception staff were absent. And including the new patient registry online limits in-person contact.",icon:"/private medical.png",href:"/contact"},{title:"Dermatologist ",desc:"Improve your patient’s experience by avoiding waiting on hold to do basic tasks like updating their address or switching an appointment.",icon:"/dermatologist.png",href:"/contact"},{title:"Private Hospitals ",desc:"A hospital stay is often not something people look forward to visiting. So a hospital website needs to balance compassion, education and engagement.",icon:"/hospital.png",href:"/contact"}],title:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"titleBackground",children:"Healthcare websites"})," for doctors, surgeons, dentists, specialists and allied professionals"]}),desc:(0,a.jsxs)("p",{className:"subtitle",children:["Reliable and accurate healthcare information is essential to building trust as a dentist, local GP or hospital operator.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Your healthcare website should help busy parents book an appointment for a sick child. Or if they have injured themselves playing footy on the weekend, they turn to your physio website to learn how to self-manage or if they should seek expert advice.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"And with every changing rule around Covid-19, patients use healthcare websites to stay informed about entry requirements to medical facilities."]}),background:"#d6e8eb",width:"25%"}),(0,a.jsx)(l.Z,{padding:"70px 0",testimonials:[{designation:"Chiropractic Healthcare Clinic",text:"As a growing chiropractic practice, our website needed to not only look professional but also provide patients with an easy and secure way to access our services. Skyward Digital's team of designers and developers were able to deliver exactly that. They created a sleek and informative website that not only helped us improve our online presence, but also provided our patients with an easy and secure way to access our services. Their ability to create a website that was easy to navigate, providing patients with a great user experience, truly set them apart from the competition.",business:"/client 56.png"},{designation:"Pocono Urgent Care",text:"As an Urgent Care, we needed a website that effectively communicated our services to patients and provided them with valuable information and resources. Skyward Digital's team of designers and developers were able to deliver a website that exceeded our expectations. They were able to create a website that was easy to navigate, providing patients with all the information they would need to know about our services. The end result was a website that truly met our patients' needs and improved their experience when visiting our hospital.",business:"/Client logo 22.png"},{designation:"Asilia Home Health Care",text:"As a provider of home healthcare services, we needed a website that would make it easy for patients to access our services and provide them with all the information they would need to know about our services. Skyward Digital's team of designers and developers were able to deliver a visually appealing and user-friendly website that met all of our requirements. Their attention to detail and dedication to customer service was outstanding. They truly understood our business and were able to create a website that truly met the needs of our patients.",business:"/client logo 57.png"}]})]})};t.default=g},8599:function(e){e.exports={banner:"ServicesBanner_banner___Sp8F",heroText:"ServicesBanner_heroText__BBCHj",heroForm:"ServicesBanner_heroForm__xnDW_",form:"ServicesBanner_form__xOtpd"}},2406:function(e){e.exports={testimonialContainer:"Testimonials_testimonialContainer__ZMGuZ",testimonialImage:"Testimonials_testimonialImage__i5nYy",testimonialData:"Testimonials_testimonialData__9y9ye",business:"Testimonials_business__OrHRf",readMore:"Testimonials_readMore__EyEkZ",controls:"Testimonials_controls__rjR5l",testimonialPopup:"Testimonials_testimonialPopup__5Ra4_",close:"Testimonials_close__GnNJu",testimonialModal:"Testimonials_testimonialModal__q0eY3",testimonial:"Testimonials_testimonial__URXnG",details:"Testimonials_details__Y5ymQ",businessImage:"Testimonials_businessImage__ELQRe",text:"Testimonials_text__3BL7C",profile:"Testimonials_profile__BAe6Y"}},9011:function(e){e.exports={accordionContainer:"AccordionFlip_accordionContainer__Mj_Yd",title:"AccordionFlip_title__MUj7l",desc:"AccordionFlip_desc__59I0f",flipLink:"AccordionFlip_flipLink__Xucyt"}},853:function(e){e.exports={flipboxContainer:"Flipbox1_flipboxContainer__epJuS",flipboxWrapper:"Flipbox1_flipboxWrapper__iQklm",flipbox:"Flipbox1_flipbox__GWfhx",front:"Flipbox1_front__Sbmxw",image:"Flipbox1_image__Ilesl",back:"Flipbox1_back__MRFca",flipAccordion:"Flipbox1_flipAccordion__uanhN",accordionContainer:"Flipbox1_accordionContainer__StlKs"}}},function(e){e.O(0,[332,774,888,179],function(){return e(e.s=7971)}),_N_E=e.O()}]);