(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);a(24);var c=a(1),n=a(12),i=a.n(n),s=(a(29),a(30),a(52)),r=a(53),o=(a(31),a.p+"static/media/logo.52e2978c.png"),l=a(0),j=function(e){return Object(l.jsxs)(s.a,{collapseOnSelect:!0,expand:"lg",sticky:"top",className:"navbar",children:[Object(l.jsx)(s.a.Brand,{className:"navbar-brand",href:"#top",children:Object(l.jsx)("img",{src:o,style:{width:"80px"},alt:"logo sara lotfi"})}),Object(l.jsx)(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(l.jsx)(s.a.Collapse,{id:"responsive-navbar-nav",children:Object(l.jsxs)(r.a,{className:"ml-auto",children:[Object(l.jsx)(r.a.Link,{className:"navbar-link",href:"#top",children:e.navLinks.about}),Object(l.jsx)(r.a.Link,{className:"navbar-link",href:"#projects-anchor",children:e.navLinks.projects}),Object(l.jsx)(r.a.Link,{className:"navbar-link",href:"#contact",children:e.navLinks.contact})]})})]})},p=(a(38),a(39),function(e){return Object(l.jsx)("button",{className:"button-pill text-sm ".concat(e.className),children:e.text})}),d={navLinks:{about:"About",projects:"Projects",contact:"Contact"},intro:{hello:"Hi, my name is",introText:"I\u2019m a web developer and illustrator based in Uppsala, Sweden. Check out some of my previous work below. If you\u2019re looking for a freelance web developer, illustrator or designer to help bring an idea to life or to fix an existing issue - let\u2019s chat!"},contactData:{header:"Hey there!",text:["If you would like to get in contact, pop me an e-mail at","or message me on"]},buttonText:{contact:"Get in touch",visit:"Visit website"},graphicDesign:{disclaimer:"This selection of works is a mix of personal and client work."},copyright:"\xa9 2021 Sara Lotfi",filterOptions:{header:"Filter Content",webDev:"Web Development",illustrations:"Illustrations",graphicDesign:"Logo/Graphic Design"},projectData:[{id:1,type:"Solo project",name:"What movie?",description:"Movie generator built in React with a Rails back-end API to fetch movies. Users can generate a random movie or filter the result based on release year, rating and genres.",technologies:["React.js","Ruby on Rails","JSON","API","Heroku","HTML/SCSS","Responsive"],repo:"https://github.com/saralotfi/rails-find-me-a-movie",web:"https://whatmovieapp.herokuapp.com/"},{id:2,type:"Team project",name:"Wellsy",description:"A platform where users can create or book workout sessions and participate via Zoom from their own home. Includes search, authorization, image-hosting and payments via Stripe.",technologies:["Ruby on Rails","JavaScript ES6","Stripe","Heroku","HTML/SCSS","PostgreSQL"],repo:"https://github.com/saralotfi/wellsy",web:"https://wellsy.herokuapp.com/"},{id:3,type:"Team project",name:"Packathon",description:"Winner of Hackathon 2021 - Le Wagon, an order packing-helper app for online retailers using Ruby on Rails and Three.js. (The site breaks at the moment due to the external packing algorithm API being down.)",technologies:["Ruby on Rails","Three.js","JavaScript ES6","Heroku","HTML/SCSS","Responsive"],repo:"https://github.com/thomas-kenny/veeqo",web:"https://packathon.herokuapp.com/"},{id:4,type:"Solo project",name:"Catsweeper",description:"Based on the game Minesweeper and built in JavaScript. I recreated the game mechanics as close to the classic game as possible. The design includes my own illustrations.",technologies:["JavaScript ES6","HTML","CSS","Responsive"],repo:"https://github.com/saralotfi/catsweeper",web:"https://saralotfi.github.io/catsweeper/"},{id:5,type:"Team project",name:"Floatify",description:"An Airbnb like platform built in Ruby on Rails featuring search, geocoding and authorization. Users can create or rent boats as well as manage and review their bookings.",technologies:["Ruby on Rails","JavaScript ES6","Mapbox","Heroku","HTML/SCSS","PostgreSQL"],repo:"https://github.com/saralotfi/float_boat",web:"https://floatifyapp.herokuapp.com/"}]},b=a.p+"static/media/portrait.4032371a.jpg",h=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{id:"intro-container",children:Object(l.jsxs)("div",{id:"intro",children:[Object(l.jsxs)("div",{className:"intro-left",children:[Object(l.jsx)("p",{className:"text-orange text-300 text-lg",children:e.introData.hello}),Object(l.jsx)("h1",{children:"Sara Lotfi"}),Object(l.jsx)("p",{className:"text-md text-300 mt-4",children:e.introData.introText})]}),Object(l.jsx)("a",{href:"mailto: lotfi.sara@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"contact-button",children:Object(l.jsx)(p,{text:d.buttonText.contact})}),Object(l.jsx)("img",{onContextMenu:function(e){e.preventDefault()},onDragStart:function(e){e.preventDefault()},id:"portrait",src:b,alt:"Sara Lotfi portrait"})]})})})},m=a(11),g=(a(40),a(41),a(9)),f=a(13),u=function(e){var t={backgroundImage:"url(".concat(e.projectImage,")")};return Object(l.jsx)("div",{className:"project-container",children:Object(l.jsxs)("div",{className:"project-item",children:[Object(l.jsx)("p",{className:"text-orange text-sm",children:e.projectData.type}),Object(l.jsxs)("div",{className:"d-flex justify-content-between align-items-end",children:[Object(l.jsx)("h2",{className:"text-700 mb-3 mt-1",children:e.projectData.name}),Object(l.jsx)("a",{href:e.projectData.repo,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("p",{className:"text-orange",children:Object(l.jsx)(g.a,{icon:f.a,className:"text-lg mb-4 link"})})})]}),Object(l.jsx)("div",{className:"image-container",children:Object(l.jsx)("div",{className:"image",style:t})}),Object(l.jsxs)("div",{className:"project-info",children:[Object(l.jsx)("p",{className:"project-text text-sm text-300",children:e.projectData.description}),Object(l.jsx)("div",{className:"tech-tags",children:e.projectData.technologies.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"tech-tag",children:e})},e)}))})]}),Object(l.jsx)("a",{href:e.projectData.web,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)(p,{className:"mt-4",text:d.buttonText.visit})})]})})},x=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{projectData:e.projectData[0],projectImage:e.projectImages.whatmovieImage}),Object(l.jsx)(u,{projectData:e.projectData[1],projectImage:e.projectImages.wellsyImage}),Object(l.jsx)(u,{projectData:e.projectData[2],projectImage:e.projectImages.packathonImage}),Object(l.jsx)(u,{projectData:e.projectData[3],projectImage:e.projectImages.catsweeperImage}),Object(l.jsx)(u,{projectData:e.projectData[4],projectImage:e.projectImages.floatifyImage})]})},O=(a(45),function(e){return Object(l.jsx)("div",{className:"illustration-container",children:Object(l.jsx)("img",{onContextMenu:function(e){e.preventDefault()},onDragStart:function(e){e.preventDefault()},className:"illustration",src:e.src,alt:e.alt})})}),w=a.p+"static/media/bear.739bd062.jpg",v=a.p+"static/media/tv.554897e1.jpg",k=a.p+"static/media/birds.06be9aba.jpg",y=a.p+"static/media/backgammon.6f68e506.jpg",N=a.p+"static/media/basket.8d1f1ff0.jpg",D=a.p+"static/media/catwerewolf.297f908f.jpg",S=a.p+"static/media/girl.ec8860ef.jpg",I=a.p+"static/media/face.cb430771.jpg",C=a.p+"static/media/pennywise.eace29e5.jpg",L=a.p+"static/media/vans.83545fe4.jpg",T=a.p+"static/media/abc.2391713d.jpg",F=a.p+"static/media/cat_turnaround.87b97d8a.gif",R=a.p+"static/media/duck.18b39297.gif",E=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{src:v,alt:"Vintage tv flying among the clouds"}),Object(l.jsx)(O,{src:y,alt:"Cat playing backgammon"}),Object(l.jsx)(O,{src:k,alt:"Birds in watercolor and ink"}),Object(l.jsx)(O,{src:w,alt:"Bear listening to music in his room"}),Object(l.jsx)(O,{src:L,alt:"old vans shoes in watercolor and ink"}),Object(l.jsx)(O,{src:D,alt:"Cat-werewolf in a pumpkin"}),Object(l.jsx)(O,{src:R,alt:"Walking duck animation"}),Object(l.jsx)(O,{src:I,alt:"A girls face in watercolor with thick eyeliner"}),Object(l.jsx)(O,{src:F,alt:"Black and white cat turnaround animation"}),Object(l.jsx)(O,{src:T,alt:"The alphabet as different figures"}),Object(l.jsx)(O,{src:N,alt:"A basket in a rubber hose retro style"}),Object(l.jsx)(O,{src:S,alt:"Crying girl in halftone asking for vegan chocolate in vintage comic book halftone style"}),Object(l.jsx)(O,{src:C,alt:"Pennywise the clown in rubber hose retro style"})]})})},H=a.p+"static/media/baby.8d487174.jpg",_=a.p+"static/media/publishing.6a165df7.jpg",W=a.p+"static/media/beach.f0a34b19.jpg",M=a.p+"static/media/photography.b10664fe.jpg",q=a.p+"static/media/camping.e2fbcb5b.jpg",A=a.p+"static/media/paddleboards.a81b971b.jpg",J=a.p+"static/media/roses.be63e138.jpg",P=a.p+"static/media/soap.b21ebf4c.jpg",B=a.p+"static/media/pug.c58853af.jpg",Y=a.p+"static/media/cafe.78b9e679.jpg",z=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{id:"logo-personal",className:"text-sm mt-5",children:Object(l.jsx)("p",{children:d.graphicDesign.disclaimer})}),Object(l.jsx)(O,{src:_,alt:"publisher logo design"}),Object(l.jsx)(O,{src:H,alt:"baby boutique logo design"}),Object(l.jsx)(O,{src:W,alt:"beachy logo design"}),Object(l.jsx)(O,{src:M,alt:"photography logo design"}),Object(l.jsx)(O,{src:q,alt:"outdoors logo design"}),Object(l.jsx)(O,{src:A,alt:"paddle board logo design"}),Object(l.jsx)(O,{src:B,alt:"business card with pug logo"}),Object(l.jsx)(O,{src:Y,alt:"gaming cafe logo design"}),Object(l.jsx)(O,{src:J,alt:"t-shirt design with roses"}),Object(l.jsx)(O,{src:P,alt:"cute soap logo design"})]})})},U=(a(46),a(15)),V=function(e){var t,a=Object(c.useState)(!1),n=Object(m.a)(a,2),i=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(m.a)(r,2),j=o[0],p=o[1],b=Object(c.useState)(window.innerWidth),h=Object(m.a)(b,2),f=h[0],u=h[1];return Object(c.useEffect)((function(){window.innerWidth>800&&p(!1),window.innerWidth<=800&&p(!0)}),[]),Object(c.useEffect)((function(){var e=function(){var e=document.querySelector(".scroll-anchor").offsetTop,t=document.querySelector("#projects").offsetTop,a=document.querySelector("#projects").offsetHeight,c=a+t;console.log("scroll-top",e),console.log("top",t),console.log("height",a),console.log("bottom",c),console.log("scroll",window.scrollY),console.log("----------------"),p(!0),window.scrollY>e+200&&window.scrollY<c-200?s(!0):(s(!1),window.innerWidth>800&&p(!1))};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),Object(c.useEffect)((function(){var e=function(){var e=document.querySelector(".scroll-anchor").offsetTop,t=document.querySelector("#projects").offsetTop,a=document.querySelector("#projects").offsetHeight+t-200;p(!0),window.scrollY>e+200&&window.scrollY<a?s(!0):(s(!1),window.innerWidth>800&&p(!1)),u(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),e.showDropdown&&(t=Object(l.jsxs)("button",{onClick:e.onFilter,className:"filter-button",children:[d.filterOptions.header,Object(l.jsx)("span",{className:"ml-3 arrow",children:Object(l.jsx)(g.a,{icon:U.b})})]})),e.showDropdown||(t=Object(l.jsxs)("button",{onClick:e.onFilter,className:"filter-button",children:[e.filterText,Object(l.jsx)("span",{className:"ml-3 arrow",children:Object(l.jsx)(g.a,{icon:U.a})})]})),Object(l.jsxs)(l.Fragment,{children:[f>800&&Object(l.jsxs)("ul",{className:"tabs",children:[Object(l.jsx)("li",{children:Object(l.jsx)("p",{"data-page":"1",className:"tab ".concat("1"===e.page?"underline-tab":""),onClick:e.onFilterChange,children:d.filterOptions.webDev})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{"data-page":"2",className:"tab ".concat("2"===e.page?"underline-tab":""),onClick:e.onFilterChange,children:d.filterOptions.illustrations})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{"data-page":"3",className:"tab ".concat("3"===e.page?"underline-tab":""),onClick:e.onFilterChange,children:d.filterOptions.graphicDesign})})]}),Object(l.jsxs)("div",{className:"filter-container ".concat(i?"filter-container-sticky":""," ").concat(j?"":"invisible"," "),children:[t,e.showDropdown&&Object(l.jsx)("div",{className:"filter-dropdown",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("p",{className:"filter-option",children:Object(l.jsx)("span",{"data-page":"1",onClick:e.onFilterChange,id:"filter-text",className:"1"===e.page?"underline-filter":"",children:d.filterOptions.webDev})})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{className:"filter-option",children:Object(l.jsx)("span",{"data-page":"2",onClick:e.onFilterChange,id:"filter-text",className:"2"===e.page?"underline-filter":"",children:d.filterOptions.illustrations})})}),Object(l.jsx)("li",{children:Object(l.jsx)("p",{className:"filter-option",children:Object(l.jsx)("span",{"data-page":"3",onClick:e.onFilterChange,id:"filter-text",className:"3"===e.page?"underline-filter":"",children:d.filterOptions.graphicDesign})})})]})})]})]})},G=function(e){var t,a=Object(c.useState)("1"),n=Object(m.a)(a,2),i=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(m.a)(r,2),j=o[0],p=o[1];switch(i){case"1":t=d.filterOptions.webDev;break;case"2":t=d.filterOptions.illustrations;break;case"3":t=d.filterOptions.graphicDesign;break;default:t=d.filterOptions.webDev}return Object(l.jsxs)("div",{id:"projects",children:[Object(l.jsx)("div",{id:"projects-anchor",className:"scroll-anchor"}),Object(l.jsx)("h1",{className:"mb-5 header",children:d.navLinks.projects}),Object(l.jsx)(V,{filterText:t,page:i,onFilterChange:function(e){s(e.target.dataset.page),p(!1),document.querySelector(".scroll-anchor").scrollIntoView()},showDropdown:j,onFilter:function(e){p((function(e){return!e}))}}),"1"===i&&Object(l.jsx)(x,{projectData:e.projectData,projectImages:e.projectImages}),"2"===i&&Object(l.jsx)(E,{}),"3"===i&&Object(l.jsx)(z,{})]})},Q=(a(47),function(){return Object(l.jsxs)("div",{id:"contact",children:[Object(l.jsx)("h1",{className:"header",children:d.contactData.header}),Object(l.jsxs)("p",{className:"text-md text-300 mt-3 text-center",children:[d.contactData.text[0]," ",Object(l.jsx)("a",{href:"mailto: lotfi.sara@gmail.com",children:"lotfi.sara@gmail.com "}),d.contactData.text[1]," ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/sara-lotfi/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),"."]}),Object(l.jsx)("a",{href:"mailto: lotfi.sara@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"text-center d-block",children:Object(l.jsx)(p,{className:"mt-5",text:d.buttonText.contact})})]})}),Z=(a(48),function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"social-links",children:[Object(l.jsx)("a",{href:"https://github.com/saralotfi",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("p",{className:"text-orange text-md",children:Object(l.jsx)(g.a,{icon:f.a})})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/sara-lotfi/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("p",{className:"text-orange text-md",children:Object(l.jsx)(g.a,{icon:f.b})})})]}),Object(l.jsx)("p",{className:"text-orange mb-5 mt-4",children:d.copyright})]})}),K=a.p+"static/media/whatmovie_small.6ef8f957.png",X=a.p+"static/media/wellsy_new.07d4176f.png",$=a.p+"static/media/floatify_small.94230e4a.png",ee=a.p+"static/media/catsweeper_new.82c35497.png",te=a.p+"static/media/packathon.891ec00d.png",ae=d.projectData,ce=[];ae.forEach((function(e){return ce.push(e.web)}));var ne=function(){return Object(c.useEffect)((function(){ce.forEach((function(e){return function(e){fetch(e,{mode:"no-cors"}).then((function(e){})).catch((function(e){}))}(e)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{navLinks:d.navLinks}),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(h,{introData:d.intro}),Object(l.jsx)(G,{projectData:ae,projectImages:{whatmovieImage:K,wellsyImage:X,floatifyImage:$,catsweeperImage:ee,packathonImage:te}}),Object(l.jsx)(Q,{}),Object(l.jsx)(Z,{})]})]})};i.a.render(Object(l.jsx)(ne,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.565ad56f.chunk.js.map