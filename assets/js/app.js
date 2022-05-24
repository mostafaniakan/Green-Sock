new fullpage('#fullpage', {
    setAutoScrolling: true,
    scrollingSpeed: 800,
    loopBottom: true,
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    parallax: true,
    onLeave: function (origin, destination, direction) {
        console.log("Leaving section" + origin.index);
    const section = destination.item;
const title = section.querySelector("h1,h2");
const t1 =new TimelineMax({delay:0.5});
t1.fromTo(title,0.5,{y:"50",opacity:0,},{y:0,opacity: 1});
/*animatin img */
        const img = section.querySelector(".img-animation");
        const t2 =new TimelineMax({delay:0.5});
        t2.fromTo(img,0.5,{x:"50",opacity:0,},{x:0,opacity: 1});
/*animation car*/

        /*max-width=575*/

                const car = section.querySelector(".img-car");
                const t3 =new TimelineMax({delay:0.8});
                t3.fromTo(car,0.5,{x:"-50",opacity:0,},{x:0,opacity: 1,});

},

});
