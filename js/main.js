
  


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        600:{
            items:2
        },
        
    }
})



//When the user scrolls down 50px from the top of the document, resize the header's font size

document.addEventListener("scroll", () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.querySelector(".nav-bar").style.fontSize = "12px";
    } else {
      document.querySelector(".nav-bar").style.fontSize = "14px";
    }
  })
  
  const burgerIcon = document.querySelector("[data-burger]");
  const mobileNavbar = document.querySelector("[data-mobile-navbar]");
  
  burgerIcon.addEventListener("click", () => {
    mobileNavbar.classList.toggle("open")
  })
  