(this["webpackJsonpmy-app3"]=this["webpackJsonpmy-app3"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n.n(c),s=n(7),o=n.n(s),i=(n(14),n(5)),l=n(2),j=n(8),u=n(4),b=n(3),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(t){var r;return Object(l.a)(this,n),(r=e.call(this,t)).buy=function(){r.setState({qty:r.state.qty+1}),r.props.handbleTotal(r.props.price)},r.show=function(){r.props.handleShow(r.props.name)},r.state={qty:0},r}return Object(j.a)(n,[{key:"render",value:function(t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"card",style:{width:"12rem"},children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsxs)("p",{children:["Book name: ",this.props.name]}),Object(r.jsxs)("div",{className:"card-text",children:[Object(r.jsxs)("p",{children:["Price: ",this.props.price]}),Object(r.jsx)("button",{className:"btn btn-primary mr-2",onClick:this.buy,children:"Buy"}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:this.show,children:"show"})]})]})}),Object(r.jsx)("hr",{})]})})}}]),n}(c.Component),d=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).render=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("h3",{children:["Total Cash: $",t.props.total," "]})})})},t}return n}(c.Component),h=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).submit=function(e){e.preventDefault();var n={name:t.refs.name.value,price:parseInt(t.refs.price.value)};t.props.handleCreate(n),t.refs.name.value="",t.refs.price.value=""},t.render=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container mt-4",children:[Object(r.jsxs)("form",{onSubmit:t.submit,children:[Object(r.jsx)("input",{type:"text",placeholder:"Book name..",ref:"name"}),Object(r.jsx)("input",{type:"text",placeholder:"Book price..",ref:"price"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"btn btn-primary btn-sm mb-4 mt-3",children:"Create Product"})]}),Object(r.jsx)("hr",{})]})})},t}return n}(c.Component),m=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).calculationTotal=function(t){c.setState({total:c.state.total+t})},c.createProduct=function(t){c.setState({ProductList:c.state.ProductList.reverse(t).concat(t)})},c.showProduct=function(t){alert("You selsected "+t)},c.render=function(){var t=Object(i.a)(c),e=c.state.ProductList.map((function(e){return Object(r.jsx)(p,{name:e.name,price:e.price,handleShow:t.showProduct,handbleTotal:t.calculationTotal})}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{handleCreate:c.createProduct}),e,Object(r.jsx)(d,{total:c.state.total})]})},c.state={total:0,ProductList:[{name:"JavaScript",price:121},{name:"Node js",price:100},{name:"Python",price:65}]},c}return n}(c.Component);n(15);var O=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(m,{})})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2399cc14.chunk.js.map