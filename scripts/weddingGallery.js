// cloudinary crendentials
cloudinary.config({
    cloud_name: 'ds42u7pvp',
    api_key: '773253696172314',
    api_secret: 'V4EXCj5orrY-VjV0xYGLoS9Flok'
});

// images folder
const folderName = 'wedding';

// get all images from cloudinary
cloudinary.api.resources(
    { type: 'upload', prefix: folderName, max_results: 30},
    function(error, result){
        if(error) {
            console.log(error);
        }
        else {
            const imagesUrls = result.resources.map((image) => image.url);

            buildCarousel(imagesUrls);
            
            $('#toggleButton').on('click', function(){
               $('carousel').toggleClass('hidden') 
            });
        }
    }
);

// Función para construir el carousel
function buildCarousel(imageUrls) {
    const container = $('#carousel');
  
    // Crea el elemento del carousel
    const carousel = $('<div class="carousel"></div>');
  
    // Agrega cada imagen al carousel
    imageUrls.forEach(url => {
      const img = $('<img>').attr('src', url);
      carousel.append(img);
    });
  
    // Agrega el carousel al contenedor
    container.append(carousel);
  
    // Inicializa el carousel con la biblioteca Slick
    carousel.slick({
      // Configuración de Slick, puedes personalizar según tus necesidades
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });
  }