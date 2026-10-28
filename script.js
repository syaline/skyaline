// Edit this file to change interactive behaviour. Content lives in index.html.
const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('#nav-links');
menuToggle.addEventListener('click', () => {const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰';});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
document.querySelector('#year').textContent=new Date().getFullYear();
const themeToggle=document.querySelector('#theme-toggle');
themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light');themeToggle.textContent=document.body.classList.contains('light')?'☾':'☼';});
// Type complete characters rather than slicing UTF-16 code units.
// Keep the waving hand and its skin-tone modifier together as one visible character.
const typewriterChars = [...Array.from("Hey, I'm Yaline "), '👋🏻'];
const target = document.querySelector('#typewriter');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  target.textContent = '';
  let i = 0;
  const type = () => {
    if (i < typewriterChars.length) {
      target.textContent += typewriterChars[i++];
      if (i < typewriterChars.length) setTimeout(type, i < 5 ? 100 : 65);
    }
  };
  setTimeout(type, 350);
} else {
  target.textContent = typewriterChars.join('');
}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.section-top,.about-layout,.timeline-card,.skill-card,.experience-card,.project-card,.cert-card,.creative-feature,.creative-card').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===button));document.querySelectorAll('.project-card').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter);}));
const navObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}})},{rootMargin:'-28% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(s=>navObserver.observe(s));
// Lightweight canvas-based network animation, inspired by the original site's animated Vanta NET hero.
(function network(){const wrap=document.querySelector('#network');if(!wrap||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const canvas=document.createElement('canvas');wrap.appendChild(canvas);const ctx=canvas.getContext('2d');let w,h,dpr,points=[],raf=0,mouse={x:-9999,y:-9999};function resize(){w=wrap.clientWidth;h=wrap.clientHeight;dpr=Math.min(devicePixelRatio||1,2);canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);const count=Math.min(90,Math.max(32,Math.round(w*h/15000)));points=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.42,vy:(Math.random()-.5)*.42}));}resize();window.addEventListener('resize',resize);wrap.addEventListener('pointermove',e=>{const r=wrap.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;});wrap.addEventListener('pointerleave',()=>mouse={x:-9999,y:-9999});function frame(){ctx.clearRect(0,0,w,h);for(let i=0;i<points.length;i++){const p=points[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;for(let j=i+1;j<points.length;j++){const q=points[j],dx=p.x-q.x,dy=p.y-q.y,dist=Math.hypot(dx,dy);if(dist<155){ctx.strokeStyle=`rgba(233, 80, 167, ${.27*(1-dist/155)})`;ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}}const md=Math.hypot(p.x-mouse.x,p.y-mouse.y);if(md<160){ctx.strokeStyle=`rgba(46,220,191,${.35*(1-md/160)})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);ctx.stroke();}ctx.fillStyle='rgba(229,124,188,.48)';ctx.fillRect(p.x,p.y,1.5,1.5);}raf=requestAnimationFrame(frame)}frame();document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(raf);else frame();});})();
