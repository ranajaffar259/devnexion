var banner = gsap.timeline()

banner.from(".banner-content p", {
    opacity: 0,
    delay: 1,
    y: -10
})
banner.from(".banner-content .ctas", {
    opacity: 0,
    y: 100
})


// about

var about = gsap.timeline({
    scrollTrigger: {
        trigger: "#quick-about-us",
        scroller: "#main",
        // markers: true,
        start: "top 40%",
        end: "top 0%",
    }
})

about.from("#quick-about-us h2,#quick-about-us p,#quick-about-us .right", {
    opacity: 0,
    y: 100
})



// servicesList

var servicesList = gsap.timeline({
    scrollTrigger: {
        trigger: "#services-listing",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 0%",
    }
})

servicesList.from("#services-listing .top-heading h2, #services-listing .top-heading h3", {
    opacity: 0,
    x: 900,
    scale: 2,
    stagger: .1,
})

servicesList.from("#services-listing .services-listing-container h3", {
    y: 50,
    duration: .1,
})
servicesList.from("#services-listing .services-listing-container .title-box img", {
    y: 50,
    opacity: 0,
    scale: .3,
    duration: .1,
})
servicesList.from("#services-listing .services-listing-container .info-box p", {
    y: 50,
    opacity: 0,
    duration: .2,
})