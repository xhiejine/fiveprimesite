(function(){
var EMAIL="your-email@example.com"; /* replace with the business email */
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var P=[["Cashew","Cashew nuts for traders, processors and retailers.","images/products/cashew.jpg","Cashew apples with cashew nuts growing on a tree"],["Chilli peppers","Bright red and green chilli peppers with the heat Nigerian dishes need.","images/products/chili.jpg","Red and green chilli peppers"],["Locust beans","Locust beans, a staple seasoning for Nigerian soups and stews.","images/products/locust-beans.jpg","Processed locust beans"],["Dried fish","Smoked and dried fish, ready to cook or resell.","images/products/dried-fish.jpg","Pile of smoked dried fish"],["Shea butter","Raw shea butter for food, skincare and cosmetic use.","images/products/shea-butter.jpg","Raw shea butter chunks"],["Bitter kola","Bitter kola nuts for traders and retailers.","images/products/bitter-kola.jpg","Bitter kola nuts"],["Garlic","Full, dry garlic bulbs that store well.","images/products/garlic.jpg","Dry garlic bulbs"],["Ginger","Fresh, firm ginger roots for markets, kitchens and processors.","images/products/ginger.jpg","Fresh ginger roots"],["Cereal","Cereal grains for food processors, millers and traders.","images/products/cereal.jpg","Cereal grains"],["Hibiscus","Dried hibiscus (zobo) flowers for drinks, tea and processors.","images/products/hibiscus.jpg","Dried hibiscus flowers"],["Turmeric","Fresh turmeric roots for markets, kitchens and processors.","images/products/turmeric.jpg","Fresh turmeric roots"],["ICT gadgets and solutions","ICT gadgets and equipment, installation and connectivity solutions.","images/products/ict.jpg","Technicians installing networking equipment in a server rack"],["Printing solutions","Printing solutions and corporate communication services.","images/products/printing-press.jpg","Industrial digital printing press"]];
var F=[["What do you supply?","Agricultural produce for export (cashew, chilli peppers, locust beans, dried fish, shea butter, bitter kola, garlic, ginger, cereal, hibiscus and turmeric), ICT gadgets and solutions, and printing solutions."],["Do you export?","Our export focus covers African countries, Europe, the United States and Canada. Tell us your destination and quantity and we will confirm what is possible."],["Do you install ICT equipment?","Yes. We supply, sell and install ICT equipment and infrastructure. Describe what you need in the quote form."],["Do you sell small quantities?","Yes. Tell us how much you need and we will confirm what we can supply."],["How do I place an order?","Use the quote form on the Contact page and send it by email or WhatsApp, or call us on 0807 410 9054."],["Where are you located?","Onifade Bus-stop, 9 Abdullahi Close, Itele, Ota 102213, Ogun State."],["Do you deliver?","Enter your delivery location in the quote form and we will confirm the options with you."],["When do you open?","We open at 6 am. Please call to confirm days and availability."]];
function $(s,r){return[].slice.call((r||document).querySelectorAll(s))}
function split(el,t){el.innerHTML=t.split('').map(function(c,i){return '<span style="--i:'+i+'">'+(c===' '?'&nbsp;':c)+'</span>'}).join('')}
split(document.getElementById('iw'),'Five Prime Nigeria');split(document.getElementById('wm'),'Five Prime Nigeria');
/* build content */
document.getElementById('car').innerHTML=P.map(function(p,i){return '<a class="pc" href="#contact-'+i+'"><img src="'+p[2]+'" alt="'+p[3]+'" loading="lazy" decoding="async"><div><h3>'+p[0]+'</h3><p>'+p[1]+'</p></div><em>Request a quote ↗</em></a>'}).join('');
document.getElementById('pgrid').innerHTML=P.map(function(p,i){return '<article class="pb rv" style="--d:'+(i%2)+'"><div class="im"><img src="'+p[2]+'" alt="'+p[3]+'" loading="lazy" decoding="async"></div><div class="tx"><h3>'+p[0]+'</h3><p>'+p[1]+'</p><a class="btn" href="#contact-'+i+'">Request a quote</a></div></article>'}).join('');
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
function msg(){var qi=+val('q'),q=qi>=P.length-2?P[qi][0]:P[qi][0].toLowerCase();return 'Hello Five Prime, my name is '+(val('n')||'(name)')+'. I would like a quote for '+(qi>=P.length-2?q+(val('a')?' ('+val('a')+')':''):(val('a')||'some')+' of '+q)+(val('l')?', delivered to '+val('l'):'')+'.'+(val('m')?' '+val('m'):'')+(val('p')?' My phone: '+val('p')+'.':'')+(val('e')?' My email: '+val('e')+'.':'')}
function sync(){document.getElementById('sw').href='https://wa.me/2348074109054?text='+encodeURIComponent(msg());document.getElementById('sm').href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Quote request: '+P[+val('q')][0])+'&body='+encodeURIComponent(msg())}
$('#form input,#form select,#form textarea').forEach(function(i){i.addEventListener('input',sync);i.addEventListener('change',sync)});
['sm','sw'].forEach(function(id){document.getElementById(id).addEventListener('click',function(e){sync();var note=document.getElementById('note');if(!val('n')||(!val('p')&&!val('e'))){e.preventDefault();note.textContent='Add your name and a phone number or email so we can reply.'}else note.textContent=''})});
sync();

/* same-page links (logo, Home, footer) scroll to top when already on that page */
function cur(){var h=(location.hash||'#home').slice(1);return pages.indexOf(h)<0?'home':h}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented)return;var t=a.getAttribute('href').slice(1);if(t.indexOf('contact-')===0||pages.indexOf(t)<0)return;if(t===cur()){e.preventDefault();document.getElementById('links').classList.remove('open');document.getElementById('bg').setAttribute('aria-expanded','false');scrollTo({top:0,behavior:rm?'auto':'smooth'})}});
/* product carousel auto-slide */
(function(){var car=document.getElementById('car'),t=null,paused=false,vis=true;if(!car||rm)return;
function step(){if(paused||!vis||document.hidden||!car.offsetParent)return;var c=car.firstElementChild;if(!c)return;var w=c.offsetWidth+14;if(car.scrollLeft+car.clientWidth>=car.scrollWidth-8)car.scrollTo({left:0,behavior:'smooth'});else car.scrollBy({left:w,behavior:'smooth'})}
function hold(){paused=true}function free(){paused=false}
car.addEventListener('mouseenter',hold);car.addEventListener('mouseleave',free);car.addEventListener('focusin',hold);car.addEventListener('focusout',free);
car.addEventListener('touchstart',hold,{passive:true});car.addEventListener('touchend',function(){setTimeout(free,4000)},{passive:true});
$('[data-c]').forEach(function(b){b.addEventListener('click',function(){hold();setTimeout(free,4000)})});
if('IntersectionObserver' in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting}).observe(car);
t=setInterval(step,3200)})();
/* start */
route();
var intro=document.getElementById('intro');
function go(){intro.classList.add('go');document.body.classList.add('go2');setTimeout(function(){intro.style.display='none'},1100)}
if(rm){intro.style.display='none';document.body.classList.add('go2')}else setTimeout(go,1900);
})();