let slider = document.getElementsByClassName("slider__item");
let bg_images = document.getElementsByClassName("slider__image");
let slider_texts = document.getElementsByClassName("slider__text");
// console.log(slider);

function toggle_class(items, k, className) {
    for (let i = 0; i < items.length; ++i) {
        if ( i === k ) {
            items[i].classList.add(className);
        } else {
            items[i].classList.remove(className);
        } 
    }
}

for (let i = 0; i < slider.length; ++i) {
    console.log(slider[i]);

    slider[i].addEventListener('click', (e) => {
        console.log(`${i} circle was clicked`);
        // bg_images[i].classList.toggle("slider__image_active");
        toggle_class(bg_images, i, "slider__image_active");
        toggle_class(slider, i, "slider__item_active");
        toggle_class(slider_texts, i, "slider__text_active");
    });
}
