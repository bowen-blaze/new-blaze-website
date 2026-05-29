// Blaze Robotics Academy — shared site JS (scroll-reveal + mobile nav toggle).
// Loaded on every page via <script src="js/main.js">.
(function(){
  const obs=new IntersectionObserver(es=>{es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}
  });},{threshold:.08});
  document.querySelectorAll('.rv').forEach(el=>obs.observe(el));
  const h=document.querySelector('.hbg');
  const nl=document.querySelector('.nl');
  if(h&&nl)h.addEventListener('click',()=>nl.classList.toggle('open'));
})();
