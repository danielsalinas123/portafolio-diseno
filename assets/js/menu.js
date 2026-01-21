document.addEventListener("DOMContentLoaded",()=>
{

const button=document.querySelector(".layout__menu-toggle");
const iconBars=document.querySelector(".layout__menu-toggle .fa-bars");
const iconXmark=document.querySelector(".layout__menu-toggle .fa-xmark");
const aside=document.querySelector(".layout__aside");


button.addEventListener("click",()=>
{
    let visible=document.querySelector(".layout__aside--visible");
    if(!visible)
    {
        aside.classList.add("layout__aside--visible");
        iconBars.style.opacity="0";
        iconXmark.style.opacity="1";
    }
    else
    {
        aside.classList.remove("layout__aside--visible");
        iconBars.style.opacity="1";
        iconXmark.style.opacity="0";
    }
});

window.addEventListener("resize",()=>
{
    let size=parseInt(document.body.clientWidth);
    if(size<=1060){
        aside.classList.remove("layout__aside--visible");
        iconBars.style.opacity="1";
        iconXmark.style.opacity="0";
    }
    
});

});