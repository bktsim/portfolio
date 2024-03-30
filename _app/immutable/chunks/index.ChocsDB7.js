var C=Object.defineProperty;var j=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,f as v,h as B,i as S,j as I,k as b,l as P,m as T,p as N,q,v as H,w as L}from"./scheduler.BeaK0CkN.js";let $=!1;function M(){$=!0}function O(){$=!1}function z(e,t,n,a){for(;e<t;){const s=e+(t-e>>1);n(s)<=a?e=s+1:t=s}return e}function D(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let r=0;r<t.length;r++){const o=t[r];o.claim_order!==void 0&&i.push(o)}t=i}const n=new Int32Array(t.length+1),a=new Int32Array(t.length);n[0]=-1;let s=0;for(let i=0;i<t.length;i++){const r=t[i].claim_order,o=(s>0&&t[n[s]].claim_order<=r?s+1:z(1,s,_=>t[n[_]].claim_order,r))-1;a[i]=n[o]+1;const u=o+1;n[u]=i,s=Math.max(u,s)}const f=[],l=[];let c=t.length-1;for(let i=n[s]+1;i!=0;i=a[i-1]){for(f.push(t[i-1]);c>=i;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);f.reverse(),l.sort((i,r)=>i.claim_order-r.claim_order);for(let i=0,r=0;i<l.length;i++){for(;r<f.length&&l[i].claim_order>=f[r].claim_order;)r++;const o=r<f.length?f[r]:null;e.insertBefore(l[i],o)}}function R(e,t){if($){for(D(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){$&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ie(){return x(" ")}function re(){return x("")}function ae(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,a,s=!1){G(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const i=n(c);return i===void 0?e.splice(l,1):e[l]=i,s||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const i=n(c);return i===void 0?e.splice(l,1):e[l]=i,s?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return a()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function E(e,t,n,a){return A(e,s=>s.nodeName===t,s=>{const f=[];for(let l=0;l<s.attributes.length;l++){const c=s.attributes[l];n[c.name]||f.push(c.name)}f.forEach(l=>s.removeAttribute(l))},()=>a(t))}function se(e,t,n){return E(e,t,n,V)}function ce(e,t,n){return E(e,t,n,W)}function J(e,t){return A(e,n=>n.nodeType===3,n=>{const a=""+t;if(n.data.startsWith(a)){if(n.data.length!==a.length)return n.splitText(a.length)}else n.data=a},()=>x(t),!0)}function fe(e){return J(e," ")}function ue(e,t){t=""+t,e.data!==t&&(e.data=t)}function oe(e,t,n,a){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,a?"important":"")}function de(e,t,n){e.classList.toggle(t,!!n)}function _e(e,t){return new e(t)}const m=new Set;let d;function me(){d={r:0,c:[],p:d}}function he(){d.r||h(d.c),d=d.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function $e(e,t,n,a){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}else a&&a()}function pe(e){e&&e.c()}function ye(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:a,after_update:s}=e.$$;a&&a.m(t,n),b(()=>{const f=e.$$.on_mount.map(q).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),s.forEach(b)}function X(e,t){const n=e.$$;n.fragment!==null&&(P(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(H.push(e),L(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(e,t,n,a,s,f,l=null,c=[-1]){const i=T;N(e);const r=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:s,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:v(),dirty:c,skip_bound:!1,root:t.target||i.$$.root};l&&l(r.root);let o=!1;if(r.ctx=n?n(e,t.props||{},(u,_,...g)=>{const w=g.length?g[0]:_;return r.ctx&&s(r.ctx[u],r.ctx[u]=w)&&(!r.skip_bound&&r.bound[u]&&r.bound[u](w),o&&Y(e,u)),_}):[],r.update(),o=!0,h(r.before_update),r.fragment=a?a(r.ctx):!1,t.target){if(t.hydrate){M();const u=F(t.target);r.fragment&&r.fragment.l(u),u.forEach(U)}else r.fragment&&r.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),O(),B()}N(i)}class ge{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{ne as A,W as B,ce as C,ge as S,ye as a,fe as b,pe as c,se as d,V as e,ae as f,le as g,te as h,xe as i,$e as j,U as k,X as l,Q as m,x as n,F as o,J as p,R as q,ue as r,ie as s,K as t,de as u,re as v,he as w,oe as x,me as y,_e as z};
