(function(){
var EMAIL="your-email@example.com"; /* replace with the business email */
/* failsafe: never leave the intro screen stuck */
setTimeout(function(){var i=document.getElementById('intro');if(i&&i.style.display!=='none'){i.classList.add('go');document.body.classList.add('go2');setTimeout(function(){i.style.display='none'},1100)}},3500);
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var P=[["Cashew","Cashew nuts for traders, processors and retailers.","images/products/cashew.jpg","Cashew apples with cashew nuts growing on a tree","a"],["Chilli peppers","Bright red and green chilli peppers with the heat Nigerian dishes need.","images/products/chili.jpg","Red and green chilli peppers","a"],["Locust beans","Locust beans, a staple seasoning for Nigerian soups and stews.","images/products/locust-beans.jpg","Processed locust beans","a"],["Dried fish","Smoked and dried fish, ready to cook or resell.","images/products/dried-fish.jpg","Pile of smoked dried fish","a"],["Shea butter","Raw shea butter for food, skincare and cosmetic use.","images/products/shea-butter.jpg","Raw shea butter chunks","a"],["Bitter kola","Bitter kola nuts for traders and retailers.","images/products/bitter-kola.jpg","Bitter kola nuts","a"],["Garlic","Full, dry garlic bulbs that store well.","images/products/garlic.jpg","Dry garlic bulbs","a"],["Ginger","Fresh, firm ginger roots for markets, kitchens and processors.","images/products/ginger.jpg","Fresh ginger roots","a"],["Cereal","Cereal grains for food processors, millers and traders.","images/products/cereal.jpg","Cereal grains","a"],["Hibiscus","Dried hibiscus (zobo) flowers for drinks, tea and processors.","images/products/hibiscus.jpg","Dried hibiscus flowers","a"],["Turmeric","Fresh turmeric roots for markets, kitchens and processors.","images/products/turmeric.jpg","Fresh turmeric roots","a"],["ICT gadgets and solutions","ICT gadgets and equipment, sales and connectivity solutions.","images/products/ict-gadgets.jpg","Technician repairing electronic equipment at a workbench","g"],["ICT installation","Installation of ICT equipment and infrastructure.","images/products/ict.jpg","Technicians installing networking equipment in a server rack","i"],["Printing solutions","Printing solutions and corporate communication services.","images/products/printing.jpg","Wide-format printer printing a large colourful banner","p"]];
var F=[["What do you supply?","Agricultural produce for export, ICT gadgets and solutions including installation, and printing solutions."],["Do you export?","Our export focus covers African countries, Europe, the United States and Canada. Tell us your destination and quantity and we will confirm what is possible."],["Do you install ICT equipment?","Yes. We supply, sell and install ICT equipment and infrastructure. Describe what you need in the quote form."],["How do I place an order?","Use the quote form on the Contact page and send it by email or WhatsApp, or call us on +2348074109054."]];
function $(s,r){return[].slice.call((r||document).querySelectorAll(s))}
function split(el,t){el.innerHTML=t.split('').map(function(c,i){return '<span style="--i:'+i+'">'+(c===' '?'&nbsp;':c)+'</span>'}).join('')}
split(document.getElementById('iw'),'Five Prime Nigeria');split(document.getElementById('wm'),'Five Prime Nigeria');
/* build content */
$('.fl').forEach(function(box){box.innerHTML=F.map(function(f,i){return '<div class="fi rv'+(i==0?' o':'')+'" style="--d:'+i+'"><button aria-expanded="'+(i==0)+'">'+f[0]+'</button><div><p>'+f[1]+'</p></div></div>'}).join('')});
function fit(i){var d=i.lastElementChild;d.style.maxHeight=i.classList.contains('o')?d.scrollHeight+'px':'0'}
$('.fi').forEach(function(i){fit(i);i.firstElementChild.onclick=function(){var o=!i.classList.contains('o');i.classList.toggle('o',o);i.firstElementChild.setAttribute('aria-expanded',o);fit(i)}});
document.getElementById('fq').innerHTML=P.map(function(p,i){return '<option value="'+i+'">'+p[0]+'</option>'}).join('');
/* statement words */
var st=document.getElementById('st');st.innerHTML=st.textContent.split(' ').map(function(w){return '<span>'+w+'</span>'}).join(' ');var sw=$('span',st);
/* routing */
var pages=['home','about','contact'],io,first=true,LEG={agro:'/agro-products.html',ict:'/ict-services.html',products:'/agro-products.html',faq:'/faq.html'};
if('IntersectionObserver' in window)io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
function route(){var h=(location.hash||'#home').slice(1),pre=null,anc=false;
 if(LEG[h]){location.replace(LEG[h]);return}
 if(h==='what-we-do'){h='home';anc=true}
 if(h.indexOf('contact-')==0){pre=+h.slice(8);h='contact'}
 if(pages.indexOf(h)<0)h='home';
 $('.pg').forEach(function(p){p.classList.toggle('on',p.id==='p-'+h)});
 $('.links a').forEach(function(a){a.classList.toggle('on',a.dataset.p===h)});
 document.getElementById('links').classList.remove('open');
 if(pre!==null&&P[pre]){var fq=document.getElementById('fq');fq.value=pre;fq.dispatchEvent(new Event('change'))}
 var pg=document.getElementById('p-'+h);
 $('.rv',pg).forEach(function(e){e.classList.remove('in');if(io)io.observe(e);else e.classList.add('in')});
 $('.fi',pg).forEach(fit);
 if(anc){var t=document.getElementById('what-we-do');if(t)t.scrollIntoView()}else if(!first)scrollTo(0,0);first=false;upd();}
addEventListener('hashchange',route);
document.getElementById('bg').onclick=function(){var l=document.getElementById('links');var o=l.classList.toggle('open');this.setAttribute('aria-expanded',o)};
/* scroll motion */
function sc(){var vh=innerHeight;
 $('[data-xp]').forEach(function(x){var r=x.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;var p=Math.max(0,Math.min(1,(vh-r.top)/(vh*.8)));p=p*p*(3-2*p);
  x.style.clipPath='inset(0 '+((1-p)*(innerWidth<861?5:12))+'vw round '+(44-p*34)+'px)';$('img',x).forEach(function(i){i.style.transform='scale('+(1.06-p*.06)+')'})});
 if(st.offsetParent){var r=st.getBoundingClientRect(),p=Math.max(0,Math.min(1,(vh*.85-r.top)/(r.height+vh*.35)));var n=Math.round(p*sw.length*1.05);sw.forEach(function(w,i){w.classList.toggle('on',i<n)})}
 var wm=document.getElementById('wm'),r2=wm.getBoundingClientRect();if(r2.top<vh*.95)wm.classList.add('in')}
function upd(){requestAnimationFrame(sc)}
if(!rm){addEventListener('scroll',sc,{passive:true});addEventListener('resize',sc)}else{sw.forEach(function(w){w.classList.add('on')})}
/* form */
var f={n:'fn',p:'fp',e:'fe',q:'fq',a:'fa',l:'fl',m:'fm'};
function val(k){return document.getElementById(f[k]).value.trim()}
function msg(){var qi=+val('q'),q=P[qi][4]!=='a'?P[qi][0]:P[qi][0].toLowerCase();return 'Hello Five Prime, my name is '+(val('n')||'(name)')+'. I would like a quote for '+(P[qi][4]!=='a'?q+(val('a')?' ('+val('a')+')':''):(val('a')||'some')+' of '+q)+(val('l')?', delivered to '+val('l'):'')+'.'+(val('m')?' '+val('m'):'')+(val('p')?' My phone: '+val('p')+'.':'')+(val('e')?' My email: '+val('e')+'.':'')}
var FL={a:['Quantity','e.g. 500 kg'],g:['Items and quantity','e.g. 10 laptops, 2 routers'],i:['Installation details','e.g. network cabling for a 20-desk office'],p:['Print job and quantity','e.g. 500 brochures, A4, full colour']};
function fld(){var t=FL[P[+val('q')][4]],l=document.querySelector('label[for="fa"]');l.textContent=t[0];document.getElementById('fa').placeholder=t[1]}
function sync(){fld();document.getElementById('sw').href='https://wa.me/2348074109054?text='+encodeURIComponent(msg());document.getElementById('sm').href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Quote request: '+P[+val('q')][0])+'&body='+encodeURIComponent(msg())}
$('#form input,#form select,#form textarea').forEach(function(i){i.addEventListener('input',sync);i.addEventListener('change',sync)});
['sm','sw'].forEach(function(id){document.getElementById(id).addEventListener('click',function(e){sync();var note=document.getElementById('note');if(!val('n')||(!val('p')&&!val('e'))){e.preventDefault();note.textContent='Add your name and a phone number or email so we can reply.'}else note.textContent=''})});
sync();

/* same-page links (logo, Home, footer) scroll to top when already on that page */
function cur(){var h=(location.hash||'#home').slice(1);return pages.indexOf(h)<0?'home':h}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented)return;var t=a.getAttribute('href').slice(1);if(t.indexOf('contact-')===0||pages.indexOf(t)<0)return;if(t===cur()){e.preventDefault();document.getElementById('links').classList.remove('open');document.getElementById('bg').setAttribute('aria-expanded','false');scrollTo({top:0,behavior:rm?'auto':'smooth'})}});
/* hero slideshow: three business services */
(function(){var x=document.querySelector('.xp');if(!x||rm)return;var im=$('img',x),c=document.getElementById('xc'),L=['Agricultural Exportation','ICT Gadgets and Solutions','Printing Solutions'],k=0;
setInterval(function(){if(document.hidden||!x.offsetParent)return;im[k].classList.remove('on');k=(k+1)%im.length;im[k].classList.add('on');if(c)c.textContent=L[k]},5200)})();
/* start */
route();
var intro=document.getElementById('intro');
function go(){intro.classList.add('go');document.body.classList.add('go2');setTimeout(function(){intro.style.display='none'},1100)}
if(rm||!document.documentElement.classList.contains('first')){intro.style.display='none';document.body.classList.add('go2')}else setTimeout(go,1900);
})();