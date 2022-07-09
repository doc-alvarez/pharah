const vw = document.documentElement.clientWidth || window.innerWidth;
let el = document.querySelector(".stickyCTA");
let el2 = document.querySelector(".product-form__item.product-form__item--submit");
if ( vw < 767) {
    window.onscroll = function() {
    if (el != undefined) {
        if(document.querySelector('html').scrollTop > 1100){
          el.style.opacity = 1;
          el2.style.margin = "0";
        
        } else {
          el.style.opacity = 0;
        }
    } else {
        let el = document.querySelector(".stickyCTA");
        let el2 = document.querySelector(".product-form__item.product-form__item--submit");
    }
    };
};