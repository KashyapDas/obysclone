function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from("#loader-animation h1",{
        y:200,
        duration:0.8,
        delay:0.2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        opacity:0,
        stagger:0.2,
        onStart:function()
        {
            let elem = document.querySelector("#growNo");
            let grow = 0;
            setInterval(function(){
                if(grow<100)
                {
                    grow++;
                }
                elem.textContent=grow;
            },40)
        }
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.4,
        delay:3.7
    })
    tl.from("#page1",{
        y:1200,
        opacity:0
    })
    tl.to("#loader",{
        display:"none"
    })
    tl.from("#navbar",{
        opacity:0,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)"
    })
    tl.from(".landing-text h1",{
        y:300,
        stagger:0.2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        opacity:0
    })
    tl.from("#picture-video-div",{
        opacity:0
    })
    tl.from("#page2-heading-div",{
        opacity:0
    })
    tl.from("#horizontal-1",{
        opacity:0,
        width:"0%"
    })
    tl.from("#page2-info-div",{
        opacity:0
    })
}
function mouseFollower()
{
    Shery.mouseFollower({
        scale:"2",
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5
    });
}
function magnetEffect()
{
    Shery.makeMagnet("#nav-part1 h2", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
      Shery.makeMagnet("#nav-part2 h2", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
      });
      Shery.makeMagnet(".text-div", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
      });
}
function flagFollow()
{
    let webText = document.querySelector("#web");
    let graphicText = document.querySelector("#graphic");

    webText.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            left:dets.x,
            top:dets.y,
        })
    })

    graphicText.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            left:dets.x,
            top:dets.y
        })
    })
    
    webText.addEventListener("mouseenter",()=>{
        document.querySelector(".mousefollower").style.opacity = 0
        gsap.to("#flag",{
            opacity:1
        })
    })
    webText.addEventListener("mouseleave",()=>{
        document.querySelector(".mousefollower").style.opacity = 1
        gsap.to("#flag",{
            opacity:0
        })
    })
    graphicText.addEventListener("mouseenter",()=>{
        document.querySelector(".mousefollower").style.opacity = 0
        gsap.to("#flag",{
            opacity:1
        })
    })
    graphicText.addEventListener("mouseleave",()=>{
        document.querySelector(".mousefollower").style.opacity = 1
        gsap.to("#flag",{
            opacity:0
        })
    })
}

function circleHover(){
    // Circle 1
    document.querySelector("#w-circle1").addEventListener("mouseenter",function(){
        document.querySelector(".mousefollower").style.opacity = 0
        gsap.to("#white-circle1",{
            height:"100%",
            width:"100%",
            duration:0.2,
            ease:"power2.out"
        })
        gsap.to("#white-circle1 h2",{
            opacity:1,
            duration:0.2,
            delay:0.4,
            ease:"power2.out",
            color:"black"
        })
    })
    document.querySelector("#w-circle1").addEventListener("mouseleave",function(){
        document.querySelector(".mousefollower").style.opacity = 1
        gsap.to("#white-circle1 h2",{
            opacity:0,
            duration:0.2,
            ease:"power2.out",
            color:"transparent"
        })
        gsap.to("#white-circle1",{
            height:"0%",
            width:"0%",
            duration:0.2,
            delay:0.2,
            ease:"power2.out"
        })
    })
    // Circle 2
    document.querySelector("#w-circle2").addEventListener("mouseenter",function(){
        document.querySelector(".mousefollower").style.opacity = 0
        gsap.to("#white-circle2",{
            height:"100%",
            width:"100%",
            duration:0.2,
            ease:"power2.out"
        })
        gsap.to("#white-circle2 h2",{
            opacity:1,
            duration:0.2,
            delay:0.4,
            ease:"power2.out",
            color:"black"
        })
    })
    document.querySelector("#w-circle2").addEventListener("mouseleave",function(){
        document.querySelector(".mousefollower").style.opacity = 1
        gsap.to("#white-circle2 h2",{
            opacity:0,
            duration:0.2,
            ease:"power2.out",
            color:"transparent"
        })
        gsap.to("#white-circle2",{
            height:"0%",
            width:"0%",
            duration:0.2,
            delay:0.2,
            ease:"power2.out"
        })
    })
    // Circle 3
    document.querySelector("#w-circle3").addEventListener("mouseenter",function(){
        document.querySelector(".mousefollower").style.opacity = 0
        gsap.to("#white-circle3",{
            height:"100%",
            width:"100%",
            duration:0.2,
            ease:"power2.out"
        })
        gsap.to("#white-circle3 h2",{
            opacity:1,
            duration:0.2,
            delay:0.4,
            ease:"power2.out",
            color:"black"
        })
    })
    document.querySelector("#w-circle3").addEventListener("mouseleave",function(){
        document.querySelector(".mousefollower").style.opacity = 1
        gsap.to("#white-circle3 h2",{
            opacity:0,
            duration:0.2,
            ease:"power2.out",
            color:"transparent"
        })
        gsap.to("#white-circle3",{
            height:"0%",
            width:"0%",
            duration:0.2,
            delay:0.2,
            ease:"power2.out"
        })
    })
}


// gooye();
locomotiveScroll();
loadingAnimation();
mouseFollower();
magnetEffect();
flagFollow();
circleHover();



function gooye(){
    Shery.imageEffect(".img-div", {
        style: 1,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.7,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7790626915687708},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        // debug:true,
        gooey:true
      });
}
function checkMedia(m){
    if(m.matches)
    {
        gooye();
    }
}


var m = window.matchMedia("(min-width: 601px)");
checkMedia(m);
m.addEventListener("change",function(){
    checkMedia(m);
});