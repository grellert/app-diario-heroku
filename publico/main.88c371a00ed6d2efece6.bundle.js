(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{tjUo:function(e,a,t){"use strict";t.r(a);t("60Zk");var n=t("q1tI"),r=t.n(n),o=t("i8i4"),i=t.n(o),s=(t("07d7"),t("5s+n"),t("lSNA")),c=t.n(s),u=t("J4zp"),d=t.n(u),l=(t("2B1R"),t("o0o1")),f=t.n(l),p=(t("ls82"),t("yXPU")),m=t.n(p),v=t("W8MJ"),h=t.n(v),b=t("lwsE"),g=t.n(b),E=function e(a,t){g()(this,e),this.conteudo=t,this.data=a},y=function(){function e(){g()(this,e),this.entradas={},this.num_entradas=0}return h()(e,[{key:"addEntrada",value:function(e){this.entradas[e.data]=e,this.num_entradas++}},{key:"getEntrada",value:function(e){if(e in this.entradas)return this.entradas[e]}}]),e}();function w(e,a){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"==typeof e)return N(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,a)}(e))||a&&e&&"number"==typeof e.length){t&&(e=t);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function N(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var k="https://app-diario-grellert.herokuapp.com/diario";function D(){return(D=m()(f.a.mark((function e(a){var t,n,r,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(a);case 2:t=e.sent,n=new y,r=w(t);try{for(r.s();!(o=r.n()).done;)i=o.value,n.addEntrada(i)}catch(e){r.e(e)}finally{r.f()}return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return O.apply(this,arguments)}function O(){return(O=m()(f.a.mark((function e(a){var t,n,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(k,"/busca/"),n=JSON.stringify({token:a}),e.next=4,window.fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:n});case 4:if(!1!==(r=e.sent).ok){e.next=7;break}throw new Error("Não foi possível acessar dados no servidor.");case 7:return e.next=9,r.json();case 9:return o=e.sent,e.abrupt("return",x(o));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return(0===e.length?[]:e).map((function(e){return j(e)}))}function j(e){return new E(e.data,e.conteudo)}function I(){return(I=m()(f.a.mark((function e(a,t,n,r){var o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="".concat(k,"/adiciona/"),i=JSON.stringify({token:a,data:t,entrada:n}),e.next=4,window.fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:i});case 4:if(!1!==e.sent.ok){e.next=7;break}throw new Error("Não foi possível acessar dados no servidor.");case 7:r.addEntrada(j({data:t,conteudo:n}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=t("17x9"),q=t.n(T),S=function(e){var a=e.entrada;return r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"card-header"},r.a.createElement("span",{className:"card-header-title has-background-primary"},"Diário do Dia ",a.data)),r.a.createElement("div",{className:"card-content"},a.conteudo))},P=function(e){var a=e.mostraAreaTexto;return r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"card-header"},r.a.createElement("span",{className:"card-header-title has-background-warning"},"Sem entrada nesta data.")),r.a.createElement("button",{className:"button is-dark",onClick:a},"adicionar entrada"))},C=function(){return r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"card-header"},r.a.createElement("span",{className:"card-header-title has-background-success"},"Dados registrados com sucesso.")))},B=function(e){var a=e.onAdicionaEntrada,t=e.alteraEntrada,n=e.data;return r.a.createElement("div",{className:"box"},r.a.createElement("input",{className:"input",type:"text",title:"Nova entrada para"+n,placeholder:"Fale sobre seu dia",onChange:t}),r.a.createElement("button",{className:"button is-dark",onClick:a},"submeter"))};S.propTypes={entrada:q.a.instanceOf(E).isRequired},P.propTypes={mostraAreaTexto:q.a.func.isRequired},B.propTypes={onAdicionaEntrada:q.a.func.isRequired,alteraEntrada:q.a.func.isRequired,data:q.a.string.isRequired};t("rB9j"),t("EnZy");var R=function(e){var a,t,o=(a=Object(n.useState)(""),[(t=d()(a,2))[0],{setData:t[1],validaData:function(e){var a=e.split("-");return 3===a.length&&4===a[0].length&&2===a[1].length&&2===a[2].length&&!(isNaN(parseInt(a[0],10))||parseInt(a[0],10)<1970||isNaN(parseInt(a[1],10))||isNaN(parseInt(a[2],10)))&&!isNaN(Date.parse(e))}}]),i=d()(o,2),s=i[0],c=i[1],u=c.setData,l=c.validaData;return r.a.createElement("input",{className:"input",type:"text",title:"Exemplo: 2019-03-27",placeholder:"AAAA-MM-DD",value:s,onChange:function(a){var t=a.target.value;u(t),l(t)?e.onDataValida(t):e.onDataInvalida()}})};R.propTypes={onDataValida:q.a.func.isRequired,onDataInvalida:q.a.func.isRequired};var J=R,L=t("3HZZ"),U=t.n(L);function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(Object(t),!0).forEach((function(a){c()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var M={clientId:void 0,data:void 0,entradaDiario:void 0,diario:void 0,viewAtual:"login",cssBotao:"button is-dark",pesquisando:!1,logado:!1,userToken:void 0};function Z(){var e=Object(n.useState)(M),a=d()(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){window.fetch("/chave").then((function(e){return e.json()})).then((function(e){return r(F(F({},M),{},{clientId:e}))})).catch((function(e){return function(e){r(F(F({},M),{},{nomeBotao:e.message,cssBotao:"button is-black",pesquisando:!1}))}(e)}))}),[]),Object(n.useEffect)((function(){t.logado&&function(e){return D.apply(this,arguments)}(t.userToken).then((function(e){return function(e){r(F(F({},t),{},{diario:e}))}(e)}))}),[t.logado]),Object(n.useEffect)((function(){if(t.pesquisando){var e=(a=t.diario,n=t.data,a.getEntrada(n));e?function(e){r((function(a){return F(F({},a),{},{entradaDiario:e,cssBotao:"button is-dark",pesquisando:!1,viewAtual:"entrada"})}))}(e):r((function(e){return F(F({},e),{},{entradaDiario:void 0,cssBotao:"button is-dark",pesquisando:!1,viewAtual:"sem entrada"})}))}var a,n}),[t.pesquisando]),[t,{onDataInvalida:function(){r(F(F({},t),{},{pesquisando:!1}))},onDataValida:function(e){r(F(F({},t),{},{data:e,pesquisando:!1,logado:t.logado}))},onPesquisando:function(){r(F(F({},t),{},{pesquisando:!0,cssBotao:"button is-dark is-loading"}))},onLogado:function(e){r(F(F({},t),{},{entradaDiario:void 0,pesquisando:!1,logado:!0,userToken:e.tokenId}))},onDeslogado:function(){r(F(F({},M),{},{clientId:t.clientId}))},onAdicionaEntrada:function(){!function(e,a,t,n){I.apply(this,arguments)}(t.userToken,t.data,t.entradaTexto,t.diario),r(F(F({},t),{},{viewAtual:"cadastro sucesso"}))},mostraAreaTexto:function(){r(F(F({},t),{},{cssEntradaTexto:"box",viewAtual:"modo edição"}))},alteraEntrada:function(e){var a=e.target.value;r(F(F({},t),{},{entradaTexto:a}))}}]}var _=function(){var e,a,t,n=Z(),o=d()(n,2),i=o[0],s=o[1],c=s.onDataValida,u=s.onDataInvalida,l=s.onPesquisando,f=s.onLogado,p=s.onDeslogado,m=s.onAdicionaEntrada,v=s.mostraAreaTexto,h=s.alteraEntrada;return"entrada"===i.viewAtual?(console.log("modo entrada"),e=r.a.createElement(S,{entrada:i.entradaDiario})):"sem entrada"===i.viewAtual?(console.log("modo sem entrada"),e=r.a.createElement(P,{mostraAreaTexto:v})):"modo edição"===i.viewAtual?e=r.a.createElement(B,{onAdicionaEntrada:m,alteraEntrada:h,data:i.data}):"cadastro sucesso"===i.viewAtual&&(e=r.a.createElement(C,null)),i.logado?(t=r.a.createElement(L.GoogleLogout,{buttonText:"Logout",onLogoutSuccess:p}),a=r.a.createElement(r.a.Fragment,null,t,r.a.createElement(J,{onDataValida:c,onDataInvalida:u}),r.a.createElement("button",{className:i.cssBotao,onClick:l},"pesquisar"),e)):i.clientId&&(a=r.a.createElement(U.a,{clientId:i.clientId,buttonText:"Login",onSuccess:f,onFailure:function(e){return console.log(e)},cookiePolicy:"single_host_origin"})),r.a.createElement("div",{className:"container is-fluid"},r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"message-header"},"UFSC - CTC - INE - INE5646 :: App Diário"),r.a.createElement("div",{className:"box"},a)))},z=document.createElement("div");document.body.appendChild(z),i.a.render(r.a.createElement(_,null),z)}},[["tjUo",1,2]]]);