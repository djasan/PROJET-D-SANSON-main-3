let gridImages = document.querySelectorAll('.grid img');
let sliderOverlay = document.getElementById('slider-overlay');
let sliderImage = document.getElementById('slider-image');
let sliderText = document.getElementById('slider-text');
let closeSliderButton = document.getElementById('close-slider');
let prevArrow = document.getElementById('prev-arrow');
let nextArrow = document.getElementById('next-arrow');
let body = document.body;

let currentImageIndex = 0;
let imagesArray = Array.from(gridImages);

let imageTexts = [
    "Je suis la première image",
    "Je suis la deuxième image",
    "Je suis la troisième image",
    "Je suis la quatrième image",
    "Je suis la cinquième image",
    "Je suis la sixième image",
    "Je suis la septième image",
    "Je suis la huitième image",
];
let allImages = Array.from(gridImages);

allImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        openSlider(img.src, imageTexts[index]);
        body.classList.add('menu-open');
    });
});

let grid2Images = document.querySelectorAll('#grid2 img');
grid2Images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index + imagesArray.length;
        openSlider(img.src, imageTexts[currentImageIndex]);
        body.classList.add('menu-open');
    });
});

closeSliderButton.addEventListener('click', () => {
    closeSlider();
});

prevArrow.addEventListener('click', () => {
    showImage(currentImageIndex - 1);
});

nextArrow.addEventListener('click', () => {
    showImage(currentImageIndex + 1);
});

const openSlider = (imagePath, imageText) => {
    sliderImage.src = imagePath;
    sliderText.textContent = imageText;
    sliderOverlay.style.display = 'flex';
    updateArrowsVisibility();
};

const closeSlider = () => {
    sliderOverlay.style.display = 'none';
    body.classList.remove('menu-open');
};

const showImage = (index) => {
    if (index < 0) {
        index = allImages.length - 1;
    } else if (index >= allImages.length) {
        index = 0;
    }

    currentImageIndex = index;
    sliderImage.src = allImages[index].src;
    sliderText.textContent = imageTexts[index];
    updateArrowsVisibility();
};

const updateArrowsVisibility = () => {
    prevArrow.style.display = currentImageIndex === 0 ? 'none' : 'block';
    nextArrow.style.display = currentImageIndex === allImages.length - 1 ? 'none' : 'block';
};