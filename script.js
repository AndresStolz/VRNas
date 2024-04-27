const dropDownText = document.querySelectorAll(".choose-item-text");
const dropDownTextHeader = document.querySelectorAll(".choose-item");
const send = document.querySelector(".send");

function makeVisible(number) {
    dropDownText[number].classList.toggle('active');
}

for (let index = 0; index < dropDownTextHeader.length; index++) {
    const element = dropDownTextHeader[index];
    element.addEventListener('click', e=> {
       element.children[1].classList.toggle('trans-arrow')
        makeVisible(index)
    })
}

send.addEventListener("click", e=> {
    e.preventDefault();
})

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        draggable: false,
        swipe: false,
        touchMove: false,
    });
});