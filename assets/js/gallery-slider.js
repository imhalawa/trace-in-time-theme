"use strict";

(function () {
  "use strict";
  GLightbox();
  var elementIsVisibleInViewport = function elementIsVisibleInViewport(el) {
    var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left,
      bottom = _el$getBoundingClient.bottom,
      right = _el$getBoundingClient.right;
    var _window = window,
      innerHeight = _window.innerHeight,
      innerWidth = _window.innerWidth;
    return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };
  var justify_scale = screen.height * 0.25;
  var allGallery = document.querySelectorAll(".gallery");
  var checkVisibility = function checkVisibility() {
    allGallery.forEach(function (gallery) {
      var items = gallery.querySelectorAll(".gallery-item");
      if (elementIsVisibleInViewport(gallery)) {
        items.forEach(function (item) {
          var image = item.querySelector("img");
          var ratio = image.naturalWidth / image.naturalHeight;
          item.style.width = justify_scale * ratio + "px";
          item.style.flexGrow = ratio;
          image.style.opacity = 1;
        });
      }
    });
  };
  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("load", checkVisibility);
  var isGallerySlider = document.getElementsByClassName("gallery-slider");
  if (isGallerySlider.length > 0) {
    new Swiper(".gallery-slider", {
      slidesPerView: 1,
      loop: true,
      autoHeight: true,
      spaceBetween: 0,
      speed: 1500,
      autoplay: {
        delay: 5000
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
})();