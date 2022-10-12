// Chọn ra tất cả các ảnh
const slides = document.querySelectorAll('.slide');
// Chọn ra cả khung chứa ảnh
const carousel = document.getElementById('carousel');
// Đếm số ảnh để xử lý
const slide_count = slides.length;
// Chọn 2 nút trái phải
const left = document.getElementById('left');
const right = document.getElementById('right');
// Biến chỉ đến ảnh hiện tại
let current_slide = 0;

const slogan = document.getElementById('slogan');
const designs = document.querySelectorAll('.design');

right.addEventListener('click', () => {
    current_slide++;
    if (current_slide > slide_count - 1) {
        current_slide = 0;
    }

    updateCarousel();
});

left.addEventListener('click', () => {
    current_slide--;
    if (current_slide < 0) {
        current_slide = slide_count - 1;
    }
    updateCarousel();

});


// update ảnh
function updateCarousel() {
    carousel.style.transform = `translateX(${
        -current_slide * slides[0].offsetWidth
    }px)`;
    let newColor = slides[current_slide].getAttribute("data-bg");
    document.body.style.background = `#${newColor}`
    if (current_slide != 0) {
        slogan.style.color = `#${newColor}`;
        slogan.style.filter = `invert(100%)`;
        designs[current_slide].style.color = `#${newColor}`;
        designs[current_slide].style.filter = `invert(100%)`;
    }
}