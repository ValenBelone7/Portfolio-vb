// Un solo IntersectionObserver para todos los [data-reveal]. Corre como script en línea
// (antes de hidratar) y vigila también lo que se monte después con navegación cliente.
const script = `(function(){var d=document;if(!("IntersectionObserver" in window)){d.documentElement.removeAttribute("data-js");return}var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.setAttribute("data-in","");io.unobserve(e.target)}})},{rootMargin:"0px 0px -60px 0px"});function scan(r){r.querySelectorAll("[data-reveal]:not([data-in])").forEach(function(el){io.observe(el)})}scan(d);new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;if(n.matches("[data-reveal]:not([data-in])"))io.observe(n);scan(n)})})}).observe(d.body,{childList:true,subtree:true})})()`;

export function RevealScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
