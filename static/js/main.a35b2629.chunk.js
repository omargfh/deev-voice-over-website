(this["webpackJsonpdeev-app"]=this["webpackJsonpdeev-app"]||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),s=a(28),n=a.n(s),r=(a(35),a(7)),l=a(8),o=a(11),d=a(10),h=a(9),j=a(15),g=a(3),b=(a(36),a(0)),u=function(e){var t=Object(i.useRef)(null);return Object(b.jsx)("div",{className:"background-image",style:{minHeight:e.defaultHeight,height:"100vh"},ref:t,children:Object(b.jsx)("img",{src:e.image})})},p=function(e){return Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("img",{src:"".concat("/deev-voice-over-website","/img/logofull.png"),className:"logoImage"})})},m=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={expanded:!1},i.expand=i.expand.bind(Object(o.a)(i)),i}return Object(l.a)(a,[{key:"expand",value:function(){this.setState((function(e){return{expanded:!e.expanded}}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"homeCard",children:[Object(b.jsx)("h2",{children:"\xa0About"}),Object(b.jsx)("div",{className:"homeCard-Image",children:Object(b.jsx)("img",{src:"".concat("/deev-voice-over-website","/img/donia.png")})}),Object(b.jsxs)("div",{className:"homeCard-Text",children:[Object(b.jsx)("h3",{children:"\xa0Donia Osama"}),Object(b.jsx)("p",{className:this.state.expanded?"expanded":"",children:"Voiceover artist with over 5 years of professional experience in TV ads, dubbing and radio in various Arabic dialects,American English, as well as a passionate singer in    multi natiVoiceover artist with over 5 years of professional experience in TV ads, dubbing and radio in various Arabic dialects,American English, as well as a passionate singer in    multi nati "}),Object(b.jsx)("p",{className:"red clickable",onClick:this.expand,children:this.state.expanded?"Show Less":"Read More"})]})]})}}]),a}(c.a.Component),v=a(19),O=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={active:0},i.setActive=i.setActive.bind(Object(o.a)(i)),i.carouselContent=[{id:0,image:"https://i.ytimg.com/vi/5NqitWbBim8/maxresdefault.jpg"},{id:1,image:"https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"},{id:2,image:"https://i.ytimg.com/vi/5NqitWbBim8/maxresdefault.jpg"},{id:3,image:"https://i.ytimg.com/vi/5NqitWbBim8/maxresdefault.jpg"},{id:4,image:"https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"},{id:5,image:"https://i.ytimg.com/vi/5NqitWbBim8/maxresdefault.jpg"}],i}return Object(l.a)(a,[{key:"setActive",value:function(e){this.setState({active:e})}},{key:"render",value:function(){var e,t=this,a=this.state.active===this.carouselContent.length-1?0:this.state.active+1,i=0===this.state.active?this.carouselContent.length-1:this.state.active-1,c=[],s=Object(v.a)(this.carouselContent);try{for(s.s();!(e=s.n()).done;){var n=e.value,r=n.id===this.state.active?"active":n.id===a?"follow":n.id===i?"precede":"";c.push(Object(b.jsx)("div",{className:"carouselElement ".concat(r),children:Object(b.jsx)("img",{src:n.image})},n.id))}}catch(l){s.e(l)}finally{s.f()}return Object(b.jsxs)("div",{className:"homeCard carousel",children:[Object(b.jsx)("h2",{children:"Previous Work"}),Object(b.jsx)("div",{className:"carouselElements",children:c}),Object(b.jsxs)("div",{class:"navigationButtons",children:[Object(b.jsx)("div",{class:"arrow back clickable",onClick:function(){t.setActive(i)},children:Object(b.jsxs)("div",{class:"icon-container",children:["                        ",Object(b.jsx)("div",{class:"icon"})]})}),Object(b.jsx)("div",{class:"arrow next clickable",onClick:function(){t.setActive(a)},children:Object(b.jsxs)("div",{class:"icon-container",children:["                        ",Object(b.jsx)("div",{class:"icon"})]})})]})]})}}]),a}(c.a.Component),f=a(20),x=a(21),N=a(17),C=a(18),k=a(25),y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).ref=c.a.createRef(),i.firstCard=c.a.createRef(),i.secondCard=c.a.createRef(),i.logo=c.a.createRef(),i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){C.a.registerPlugin(k.a),C.a.defaults({ease:"power3.inOut"});for(var e=C.a.timeline(),t=0,a=[this.firstCard.current,this.secondCard.current];t<a.length;t++){var i=a[t];e.to(i,{scrollTrigger:{trigger:i,toggleActions:"play pause resume reset"},opacity:1,y:"+=100"})}this.props.changePage(this.props.id)}},{key:"render",value:function(){var e=this.props.content;return Object(b.jsxs)("article",{id:e.name,className:"page",children:[Object(b.jsx)(u,{image:e.image,defaultHeight:this.props.defaultHeight,parent:this.ref}),Object(b.jsx)("div",{className:"content",ref:this.ref,children:Object(b.jsx)(f.a,{children:Object(b.jsxs)(x.a,{className:"d-flex justify-content-center align-items-center",children:[Object(b.jsx)(N.a,{className:"d-flex justify-content-center align-items-center",ref:this.logo,children:Object(b.jsx)(p,{})}),Object(b.jsx)(f.a,{children:Object(b.jsxs)(x.a,{children:[Object(b.jsx)(N.a,{md:4,id:"about-card",className:"d-flex justify-content-end align-items-start",ref:this.firstCard,children:Object(b.jsx)(m,{})}),Object(b.jsx)(N.a,{md:8,className:"d-flex justify-content-start align-items-start",ref:this.secondCard,children:Object(b.jsx)(O,{})})]})})]})})})]})}}]),a}(c.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).ref=c.a.createRef(),i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.changePage(this.props.id)}},{key:"render",value:function(){var e=this.props.content;return Object(b.jsxs)("article",{id:e.name,className:"page",children:[Object(b.jsx)(u,{image:e.image,defaultHeight:this.props.defaultHeight,parent:this.ref}),Object(b.jsx)("div",{className:"content",ref:this.ref})]})}}]),a}(c.a.Component),S=a(30),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={toggled:!1},i.toggle=i.toggle.bind(Object(o.a)(i)),i.scrolled=i.scrolled.bind(Object(o.a)(i)),i}return Object(l.a)(a,[{key:"toggle",value:function(){this.setState((function(e){return{toggled:!e.toggled}}))}},{key:"scrolled",value:function(){window.scrollY>30&&!0!==this.props.handleScroll.state?this.props.handleScroll.function(!0):window.scrollY<=30&&!1!==this.props.handleScroll.state&&this.props.handleScroll.function(!1)}},{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){e.scrolled()}}},{key:"render",value:function(){var e,t=this,a=[],i=0,s="sidebarElement",n=Object(v.a)(this.props.pages.entries());try{var r=function(){var c=Object(S.a)(e.value,2),n=c[0],r=c[1];a.push(Object(b.jsxs)("div",{className:n===t.props.currentPage?"".concat(s," active"):s,children:[Object(b.jsx)(j.b,{to:t.props.paths[n],onClick:function(){t.props.handleClick(n)},children:r}),Object(b.jsx)("img",{src:"".concat("/deev-voice-over-website","/img/sidebar_break.png"),className:"sidebarBreak"})]},n)),i++};for(n.s();!(e=n.n()).done;)r()}catch(o){n.e(o)}finally{n.f()}var l="";return null!==this.props.USERNAME?l=Object(b.jsxs)("div",{id:"account-logged",children:[Object(b.jsx)("a",{href:"#",children:this.props.USERNAME}),Object(b.jsx)("img",{src:"".concat("/deev-voice-over-website","/img/wave.png")})]}):(l=Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsxs)("div",{id:"account-signin",children:[Object(b.jsx)("a",{href:"#",children:"Sign In"}),Object(b.jsx)("img",{src:"".concat("/deev-voice-over-website","/img/wave.png")})]}),Object(b.jsxs)("div",{id:"account-signup",children:[Object(b.jsx)("a",{href:"#",children:"Sign Up"}),Object(b.jsx)("img",{src:"".concat("/deev-voice-over-website","/img/wave.png")})]})]}),a.push(Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsxs)("div",{className:"".concat(s," mobilebar"),children:[Object(b.jsx)(j.b,{to:"/signin",children:"Sign In"}),Object(b.jsx)("img",{src:"".concat("/deev-voice-over-website","/img/sidebar_break.png"),className:"sidebarBreak"})]},i+1),Object(b.jsxs)("div",{className:"".concat(s," mobilebar"),children:[Object(b.jsx)(j.b,{to:"/signup",children:"Sign Up"}),Object(b.jsx)("img",{src:"".concat("/deev-voice-over-website","/img/sidebar_break.png"),className:"sidebarBreak"})]},i+2)]}))),Object(b.jsxs)("header",{children:[Object(b.jsxs)("nav",{children:[Object(b.jsxs)("div",{className:"navbar mobilebar ".concat(this.props.handleScroll.state?"scrolled":""," ").concat(this.state.toggled?"toggled":""),children:[Object(b.jsx)("div",{className:"navbrand ".concat(this.props.handleScroll.state?"enabled":""," ").concat(this.state.toggled?"enabled":""),children:Object(b.jsx)(p,{})}),Object(b.jsxs)("div",{className:this.state.toggled?"sidebarButton change":"sidebarButton",onClick:this.toggle,children:[Object(b.jsx)("div",{className:"bar1"},1),Object(b.jsx)("div",{className:"bar2"},2),Object(b.jsx)("div",{className:"bar3"},3)]})]}),Object(b.jsx)("div",{className:"sidebar ".concat(this.state.toggled?"":"disabled"),children:a})]}),Object(b.jsx)("div",{className:"accounts",children:l})]})}}]),a}(c.a.Component),A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).pages=[{id:0,name:"Home",path:"/",image:"".concat("/deev-voice-over-website","/img/deev-bg.png")},{id:1,name:"About",path:"/about",image:null},{id:2,name:"Pricing",path:"/pricing",image:"".concat("/deev-voice-over-website","/img/pricing-bg.png")},{id:3,name:"Recruit",path:"/recruit",image:null},{id:4,name:"Contact",path:"/contact",image:null}],e.state={currentPage:0,USERNAME:null,scrolled:!1},e.defaultHeight=0,e.pageChange=e.pageChange.bind(Object(o.a)(e)),e.scrollChange=e.scrollChange.bind(Object(o.a)(e)),e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.defaultHeight=screen.availHeight-100}},{key:"pageChange",value:function(e){this.setState((function(t){return{currentPage:e,USERNAME:t.USERNAME,scrolled:t.scrolled}}))}},{key:"scrollChange",value:function(e){this.setState((function(t){return{currentPage:t.currentPage,USERNAME:t.USERNAME,scrolled:e}}))}},{key:"render",value:function(){return Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(E,{currentPage:this.state.currentPage,pages:this.pages.map((function(e){return e.name})),paths:this.pages.map((function(e){return e.path})),handleClick:this.pageChange,defaultHeight:this.defaultHeight,USERNAME:this.state.USERNAME,handleScroll:{function:this.scrollChange,state:this.state.scrolled}}),Object(b.jsx)("main",{children:Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{exact:!0,path:this.pages[0].path,children:Object(b.jsx)(y,{id:this.pages[0].id,content:this.pages[0],changePage:this.pageChange,defaultHeight:this.props.defaultHeight})}),Object(b.jsx)(g.a,{path:this.pages[2].path,children:Object(b.jsx)(w,{id:this.pages[2].id,content:this.pages[2],changePage:this.pageChange,defaultHeight:this.props.defaultHeight})})]})})]})})}}]),a}(c.a.Component),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),i(e),c(e),s(e),n(e)}))};n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),R()}},[[46,1,2]]]);
//# sourceMappingURL=main.a35b2629.chunk.js.map