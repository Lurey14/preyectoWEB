// header
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');

    // cambiar color del header al desplazarse
    document.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // mostrar-ocultar menú
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    // resaltar opción seleccionada
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

//carrusel
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

//carrusel 1
document.addEventListener('DOMContentLoaded', () => {
    const slides1 = document.querySelectorAll('.card1');
    const indicators1 = document.querySelectorAll('.indicator1');
    let currentIndex1 = 0;

    function showSlide1(index) {
        const carouselContainer1 = document.querySelector('.carousel-container1');
        carouselContainer1.style.transform = `translateX(-${index * 100}%)`;
        indicators1.forEach((indicator, i) => {
            indicator.classList.toggle('active1', i === index);
        });
    }

    indicators1.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex1 = index;
            showSlide1(currentIndex1);
        });
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex1 = (currentIndex1 + 1) % slides1.length;
        showSlide1(currentIndex1);
    }, 5000);
});

// facts
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target") || +counter.innerText;
            const count = +counter.innerText;

            const increment = target / 200; // Adjust speed by modifying the divisor

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 15); // Adjust speed by modifying the timeout
            } else {
                counter.innerText = target; // Ensure the exact final value
            }
        };

        updateCount();
    });
});