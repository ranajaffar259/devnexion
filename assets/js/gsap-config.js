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
