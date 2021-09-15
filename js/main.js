document.addEventListener('DOMContentLoaded',  () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: 5,
        padding:5,
       numVisible:3,   //  cuantas quiero que se vean
        indicators :true,   // punticos abajo 
        noWrap : false    // me muestra todos los item, no solo desde la 1
 
 
    });
      
 });