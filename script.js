
var cursor=document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur");


document.addEventListener("mousemove",function(dets){
    // dets is a mouseMove object. It contains data such as x, y position of mouse on the screen and many more.

    //For moving the cursor
    cursor.style.left=dets.x + 30+ "px";
    cursor.style.top=dets.y + "px";

    //For moving that blurred circle around the cursor
    blur.style.left=dets.x -200 + "px";
    blur.style.top=dets.y -200 + "px";
})

var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3
        cursor.style.border="1px solid white"
        cursor.style.backgroundColor="transparent"
    })
    
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1
        cursor.style.border="0px solid #95C11E"
        cursor.style.backgroundColor="#95C11E"
    })
})


// scrolling pe nav ko chhota bada karne ke liye
gsap.to("#nav",{
    backgroundColor:"#272525",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:false,
        start:"top -10%",
        end:"top -11%",
        // scrub: true for repetitive work based on scrolling
        scrub:true 
    }
});

//when moving down the page, the screen gets darkend and vice versa
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:false,
        start: "top -20%",
        end:"top -60%",
        scrub: true
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration: 2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        markers:false,
        start:"top 70%",
        end: "top 65%",
        scrub:2
    }

})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        markers:false,
        start:"top 70%",
        end: "top 65%",
        scrub:1
    }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        markers:false,
        start:"top 50%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        markers:false,
        start:"top 50%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        markers:false,
        start:"top 75%",
        end: "top 75%",
        scrub: 2
    }
})