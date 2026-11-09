(function(){
var w=document.getElementById('wm');if(w){w.innerHTML='Five Prime Nigeria'.split('').map(function(c,i){return '<span style="--i:'+i+'">'+(c===' '?'&nbsp;':c)+'</span>'}).join('');
if('IntersectionObserver' in window){new IntersectionObserver(function(es,o){if(es[0].isIntersecting){w.classList.add('in');o.disconnect()}}).observe(w)}else w.classList.add('in')}
var b=document.getElementById('bg'),l=document.getElementById('links');
if(b)b.onclick=function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)};
})();
