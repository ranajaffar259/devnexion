document.addEventListener('DOMContentLoaded', () => {

    // animate balls on banner 
    const balls = document.querySelectorAll('.ball');
    const animations = ['bounce1', 'bounce2', 'bounce3', 'bounce4', 'bounce5'];

    balls.forEach((ball, index) => {
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        ball.style.animation = `${animations[index]} ${duration}s ${delay}s infinite alternate`;
        ball.style.left = `${Math.random() * (window.innerWidth - 80)}px`;
        ball.style.top = `${Math.random() * (window.innerHeight - 80)}px`;
    });


    // navbar dropdown toggle
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            const dropdown = item.querySelector('.main-dropdown');
            if (dropdown) {
                dropdown.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', () => {
            const dropdown = item.querySelector('.main-dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });
    });


    // get cursor
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

    Shery.makeMagnet(".banner-content .ctas a", {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    Shery.imageEffect("#quick-about-us .image-cover img", {
        style: 3, //Select Style
    })

});
