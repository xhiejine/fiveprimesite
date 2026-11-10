try{sessionStorage.setItem('fp_intro','1')}catch(e){}
(function(){
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
function $(s,r){return[].slice.call((r||document).querySelectorAll(s))}
var w=document.getElementById('wm');if(w){w.innerHTML='Five Prime Nigeria'.split('').map(function(c,i){return '<span style="--i:'+i+'">'+(c===' '?'&nbsp;':c)+'</span>'}).join('');
if('IntersectionObserver' in window){new IntersectionObserver(function(es,o){if(es[0].isIntersecting){w.classList.add('in');o.disconnect()}}).observe(w)}else w.classList.add('in')}
var b=document.getElementById('bg'),l=document.getElementById('links');
if(b)b.onclick=function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)};
/* scroll reveal */
if('IntersectionObserver' in window&&!rm){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});$('.rv').forEach(function(e){io.observe(e)})}else $('.rv').forEach(function(e){e.classList.add('in')});
/* faq accordion */
function fit(i){var d=i.lastElementChild;d.style.maxHeight=i.classList.contains('o')?d.scrollHeight+'px':'0'}
$('.fi').forEach(function(i){fit(i);i.firstElementChild.onclick=function(){var o=!i.classList.contains('o');i.classList.toggle('o',o);i.firstElementChild.setAttribute('aria-expanded',o);fit(i)}});
addEventListener('resize',function(){$('.fi').forEach(fit)});addEventListener('load',function(){$('.fi').forEach(fit)});
})();
