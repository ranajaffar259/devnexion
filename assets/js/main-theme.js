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

    // counter animation
    const counters = document.querySelectorAll('.counter-value');

    function animateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // Duration of the animation in ms
        const start = 0;
        const range = target - start;
        const increment = target > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;
        const timer = setInterval(() => {
            current += increment;
            counter.textContent = current;
            if (current === target) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    const counterSection = document.querySelector('#counter');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    animateCounter(counter);
                });
                observer.unobserve(counterSection); // Stop observing after animation
            }
        });
    }, {
        threshold: .7 // Trigger when at least 10% of the element is visible
    });

    observer.observe(counterSection);

    // end counter animation


    // client slide
    const clientRow = document.querySelector('.client-row');
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    let scrollAmount = 0;

    nextButton.addEventListener('click', () => {
        clientRow.scrollBy({ left: clientRow.clientWidth, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        clientRow.scrollBy({ left: -clientRow.clientWidth, behavior: 'smooth' });
    });


    // faqs
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const toggleAnswer = item.querySelector('.toggle-answer');
        const answer = item.querySelector('.answer');

        const toggle = () => {
            answer.classList.toggle('expanded');
            toggleAnswer.classList.toggle('expanded'); // Toggle expanded class for rotation

            if (answer.classList.contains('expanded')) {
                answer.style.height = answer.scrollHeight + 'px';
                setTimeout(() => {
                    answer.style.opacity = '1'
                }, 400);
            } else {
                answer.style.height = '0';
                setTimeout(() => {
                    answer.style.opacity = '0'
                }, 400);
            }
        };

        question.addEventListener('click', toggle);
        toggleAnswer.addEventListener('click', toggle);
    });
});

