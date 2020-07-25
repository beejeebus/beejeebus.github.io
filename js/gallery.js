(function() {
  const images = document.querySelectorAll('.gallery-figure');
  for (let i = 1; i < images.length; i++) {
    images[i].hidden = true;
  }
  const previousButton = document.querySelector('.gallery-button-previous');
  previousButton.disabled = true;
  previousButton.onclick = function(e) {
    let index = displayImageIndex(images);
    images[index].hidden = true;
    images[index-1].hidden = false;
    nextButton.disabled = false;
    if (displayImageIndex(images) == 0) {
      previousButton.disabled = true;
    }
  }
  const nextButton = document.querySelector('.gallery-button-next');
  nextButton.onclick = function(e) {
    let index = displayImageIndex(images);
    images[index].hidden = true;
    images[index+1].hidden = false;
    previousButton.disabled = false;
    if (images.length == displayImageIndex(images)+1) {
      nextButton.disabled = true;
    }
  }

  function displayImageIndex(images) {
    for (let i = 0; i < images.length; i++) {
      if (images[i].hidden == false) {
        return i;
      }
    }
  }
})();
