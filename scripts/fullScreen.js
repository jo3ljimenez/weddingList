function showFullScreen(imageSrc) {
    let fullscreenImageContainer = document.getElementById('fullscreenImage');
    let fullscreenImageContent = document.getElementById('fullscreenImageContent');

    fullscreenImageContent.src = imageSrc;
    fullscreenImageContainer.style.display = 'flex'; 

    setTimeout(function() {
      fullscreenImageContainer.classList.add('show'); 
    }, 50);

    fullscreenImageContainer.addEventListener('click', function() {
      fullscreenImageContainer.classList.remove('show'); 

      setTimeout(function() {
        fullscreenImageContainer.style.display = 'none';
      }, 300);
    });
}