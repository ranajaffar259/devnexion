// Get cursor
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.textAnimate(".banner-content h1", {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});

Shery.makeMagnet("#get-in-touch, .banner-content h1", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet(".banner-content .ctas a, #quick-about-us a", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.imageEffect("#quick-about-us .image-cover img", {
    style: 3, //Select Style
})


// services section
Shery.makeMagnet("#services-listing .services-listing-container h3", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
// work section
Shery.makeMagnet("#work-listing .btn", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});