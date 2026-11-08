(function(){
var EMAIL="your-email@example.com"; /* replace with the business email */
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var P=[["Ginger","Fresh, firm ginger roots for markets, kitchens and processors.","images/ginger.jpg"],["Chili peppers","Bright red peppers with the heat Nigerian dishes need.","images/chili.jpg"],["Garlic","Full, dry garlic bulbs that store well.","images/garlic.jpg"],["Cocoa","Dried cocoa beans for traders and processors.","images/cocoa.jpg"],["Smoked fish","Smoked fish ready to cook or resell.","images/fish.jpg"]];
var F=[["What do you supply?","We supply ginger, chili peppers, garlic, cocoa and smoked fish."],["Do you sell small quantities?","Yes. Tell us how much you need and we will confirm what we can supply."],["How do I place an order?","Use the quote form on the Contact page and send it by email or WhatsApp, or call us on 0807 410 9054."],["Where are you located?","Onifade Bus-stop, 9 Abdullahi Close, Itele, Ota 102213, Ogun State."],["Do you deliver?","Enter your delivery location in the quote form and we will confirm the options with you."],["When do you open?","We open at 6 am. Please call to confirm days and availability."]];
function $(s,r){return[].slice.call((r||document).querySelectorAll(s))}
function split(el,t){el.innerHTML=t.split('').map(function(c,i){return '<span style="--i:'+i+'">'+(c===' '?'&nbsp;':c)+'</span>'}).join('')}
split(document.getElementById('iw'),'Five Prime');split(document.getElementById('wm'),'Five Prime');
/* build content */
document.getElementById('car').innerHTML=P.map(function(p,i){return '<a class="pc" href="#contact-'+i+'"><img src="'+p[2]+'" alt="'+p[0]+'"><div><h3>'+p[0]+'</h3><p>'+p[1]+'</p></div><em>Request a quote ↗</em></a>'}).join('');
document.getElementById('pgrid').innerHTML=P.map(function(p,i){return '<article class="pb rv" style="--d:'+(i%2)+'"><div class="im"><img src="'+p[2]+'" alt="'+p[0]+'"></div><div class="tx"><h3>'+p[0]+'</h3><p>'+p[1]+'</p><a class="btn" href="#contact-'+i+'">Request a quote</a></div></article>'}).join('');
$('.fl').forEach(function(box){box.innerHTML=F.map(function(f,i){return '<div class="fi rv'+(i==0?' o':'')+'" style="--d:'+i+'"><button aria-expanded="'+(i==0)+'">'+f[0]+'</button><div><p>'+f[1]+'</p></div></div>'}).join('')});
function fit(i){var d=i.lastElementChild;d.style.maxHeight=i.classList.contains('o')?d.scrollHeight+'px':'0'}
$('.fi').forEach(function(i){fit(i);i.firstElementChild.onclick=function(){var o=!i.classList.contains('o');i.classList.toggle('o',o);i.firstElementChild.setAttribute('aria-expanded',o);fit(i)}});
document.getElementById('fq').innerHTML=P.map(function(p,i){return '<option value="'+i+'">'+p[0]+'</option>'}).join('');
$('[data-c]').forEach(function(b){b.onclick=function(){document.getElementById('car').scrollBy({left:320*b.dataset.c,behavior:'smooth'})}});
/* statement words */
var st=document.getElementById('st');st.innerHTML=st.textContent.split(' ').map(function(w){return '<span>'+w+'</span>'}).join(' ');var sw=$('span',st);
/* routing */
var pages=['home','about','products','faq','contact'],io,first=true;
if('IntersectionObserver' in window)io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
function route(){var h=(location.hash||'#home').slice(1),pre=null;
 if(h.indexOf('contact-')==0){pre=+h.slice(8);h='contact'}
 if(pages.indexOf(h)<0)h='home';
 $('.pg').forEach(function(p){p.classList.toggle('on',p.id==='p-'+h)});
 $('.links a').forEach(function(a){a.classList.toggle('on',a.dataset.p===h)});
 document.getElementById('links').classList.remove('open');
 if(pre!==null&&P[pre])document.getElementById('fq').value=pre;
 var pg=document.getElementById('p-'+h);
 $('.rv',pg).forEach(function(e){e.classList.remove('in');if(io)io.observe(e);else e.classList.add('in')});
 $('.fi',pg).forEach(fit);
 if(!first)scrollTo(0,0);first=false;upd();}
addEventListener('hashchange',route);
document.getElementById('bg').onclick=function(){var l=document.getElementById('links');var o=l.classList.toggle('open');this.setAttribute('aria-expanded',o)};
/* scroll motion */
function sc(){var vh=innerHeight;
 $('[data-xp]').forEach(function(x){var r=x.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;var p=Math.max(0,Math.min(1,(vh-r.top)/(vh*.8)));p=p*p*(3-2*p);
  x.style.clipPath='inset(0 '+((1-p)*12)+'vw round '+(44-p*34)+'px)';x.firstElementChild.style.transform='scale('+(1.2-p*.2)+')'});
 if(st.offsetParent){var r=st.getBoundingClientRect(),p=Math.max(0,Math.min(1,(vh*.85-r.top)/(r.height+vh*.35)));var n=Math.round(p*sw.length*1.05);sw.forEach(function(w,i){w.classList.toggle('on',i<n)})}
 var wm=document.getElementById('wm'),r2=wm.getBoundingClientRect();if(r2.top<vh*.95)wm.classList.add('in')}
function upd(){requestAnimationFrame(sc)}
if(!rm){addEventListener('scroll',sc,{passive:true});addEventListener('resize',sc)}else{sw.forEach(function(w){w.classList.add('on')})}
/* form */
var f={n:'fn',p:'fp',e:'fe',q:'fq',a:'fa',l:'fl',m:'fm'};
function val(k){return document.getElementById(f[k]).value.trim()}
function msg(){var q=P[+val('q')][0].toLowerCase();return 'Hello Five Prime, my name is '+(val('n')||'(name)')+'. I would like a quote for '+(val('a')||'some')+' of '+q+(val('l')?', delivered to '+val('l'):'')+'.'+(val('m')?' '+val('m'):'')+(val('p')?' My phone: '+val('p')+'.':'')+(val('e')?' My email: '+val('e')+'.':'')}
function sync(){document.getElementById('sw').href='https://wa.me/2348074109054?text='+encodeURIComponent(msg());document.getElementById('sm').href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Quote request: '+P[+val('q')][0])+'&body='+encodeURIComponent(msg())}
$('#form input,#form select,#form textarea').forEach(function(i){i.addEventListener('input',sync);i.addEventListener('change',sync)});
['sm','sw'].forEach(function(id){document.getElementById(id).addEventListener('click',function(e){sync();var note=document.getElementById('note');if(!val('n')||(!val('p')&&!val('e'))){e.preventDefault();note.textContent='Add your name and a phone number or email so we can reply.'}else note.textContent=''})});
sync();
/* start */
route();
var intro=document.getElementById('intro');
function go(){intro.classList.add('go');document.body.classList.add('go2');setTimeout(function(){intro.style.display='none'},1100)}
if(rm){intro.style.display='none';document.body.classList.add('go2')}else setTimeout(go,1900);
})();