function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () { stickyMenu() };

var menuBar = document.getElementById("menu");
var sticky = menuBar.offsetTop;

function stickyMenu() {
    if (window.pageYOffset >= sticky) {
        menuBar.classList.add("sticky")
    } else {
        menuBar.classList.remove("sticky");
    }
}

const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('img');
let currentIndex = 0;
let startX = 0;
let isDragging = false;

function showSlide(index) {
    const translateX = -index * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
    currentIndex = index;
}

function touchStart(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
    carousel.style.transition = 'none';
}

function touchMove(e) {
    if (!isDragging) return;
    const xDiff = e.touches[0].clientX - startX;
    const translateX = -currentIndex * 100 + (xDiff / carousel.clientWidth) * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

function touchEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    const xDiff = e.changedTouches[0].clientX - startX;
    const threshold = carousel.clientWidth / 4;
    if (xDiff > threshold && currentIndex > 0) {
        currentIndex--;
    } else if (xDiff < -threshold && currentIndex < slides.length - 1) {
        currentIndex++;
    }
    showSlide(currentIndex);
    carousel.style.transition = 'transform 0.3s ease';
}

function startDrag(e) {
    startX = e.clientX;
    isDragging = true;
    carousel.style.transition = 'none';
}

function duringDrag(e) {
    if (!isDragging) return;
    const xDiff = e.clientX - startX;
    const translateX = -currentIndex * 100 + (xDiff / carousel.clientWidth) * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;
    const xDiff = e.clientX - startX;
    const threshold = carousel.clientWidth / 4;
    if (xDiff > threshold && currentIndex > 0) {
        currentIndex--;
    } else if (xDiff < -threshold && currentIndex < slides.length - 1) {
        currentIndex++;
    }
    showSlide(currentIndex);
    carousel.style.transition = 'transform 0.3s ease';
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    }
}

carousel.addEventListener('mousedown', startDrag);
carousel.addEventListener('mousemove', duringDrag);
carousel.addEventListener('mouseup', endDrag);
carousel.addEventListener('mouseleave', endDrag);

carousel.addEventListener('touchstart', touchStart);
carousel.addEventListener('touchmove', touchMove);
carousel.addEventListener('touchend', touchEnd);
    // Function to offset scroll position for anchor links
    function offsetScroll() {
        // Get the hash value from the URL
        let hash = window.location.hash;
        
        // If there is a hash (anchor link), scroll to it with offset
        if (hash) {
            let element = document.querySelector(hash);
            if (element) {
                // Calculate offset based on your fixed navbar height
                let offset = 200; // Adjust this value according to your navbar height
                
                // Scroll to the element with offset only if it's not at the top of the viewport
                if (element.getBoundingClientRect().top > offset) {
                    window.scrollTo({
                        top: element.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }
    
    // Call the offsetScroll function when the page loads and also after window resize (optional)
    window.onload = offsetScroll;
    window.onresize = offsetScroll; // Optional: Adjust scroll on window resize