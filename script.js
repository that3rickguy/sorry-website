const noBtn=document.getElementById("noBtn"),yesBtn=document.getElementById("yesBtn"),music=document.getElementById("bgMusic");
document.body.addEventListener("click",()=>{music&&music.play()},{once:true});
if(noBtn){noBtn.addEventListener("mouseover",run);noBtn.addEventListener("touchstart",run);function run(){noBtn.style.transform=`translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`}}
function heart(){const h=document.createElement("div");h.className="heart";h.innerHTML="🍒💖";h.style.left=Math.random()*100+"vw";h.style.animationDuration=Math.random()*3+4+"s";document.body.appendChild(h);setTimeout(()=>h.remove(),7000)}
setInterval(heart,350);
if(yesBtn){yesBtn.addEventListener("click",()=>{for(let i=0;i<25;i++)heart()})}