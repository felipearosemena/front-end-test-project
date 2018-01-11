function openLightBox(sourceFile, caption) {

    this.sourceFile = sourceFile;
    this.caption = caption;

}

openLightBox.prototype.open = function() {

    this.lightboxWrapper = document.createElement('div');
    this.lightboxWrapper.className = 'lightbox-wrapper';

    this.lightbox = document.createElement('div');

    var overlayDiv = document.createElement('div');
    overlayDiv.className = 'overlay';

    var image = document.createElement('img');
    image.className = 'fullsize';
    image.src = this.sourceFile;

    var captionDiv = document.createElement('div');
    captionDiv.className = 'caption title';
    var captionText = document.createTextNode(this.caption);
    captionDiv.appendChild(captionText);

    var closeButton = document.createElement('img');
    closeButton.className = 'close-button';
    closeButton.src = 'img/cancel.png';

    var rootDiv = document.querySelector('#root');

    this.lightbox.appendChild(overlayDiv);
    this.lightbox.appendChild(image);
    this.lightbox.appendChild(captionDiv);
    this.lightbox.appendChild(closeButton);

    document.body.insertBefore(this.lightboxWrapper, rootDiv);
    this.lightbox.style.opacity = 0;
    this.lightboxWrapper.appendChild(this.lightbox);
    var counter = 0;
    var lightBox = this.lightbox;
    var fadeInt = setInterval(function() {
        if (counter < 1.05) {
            lightBox.style.opacity = counter;
            counter += 0.05;
        } else {
            clearInterval(fadeInt);
        }
    }, 15);

    var self = this;
    overlayDiv.addEventListener('click', function() {
        self.close();
    });
    closeButton.addEventListener('click', function() {
        self.close();
    });

};

openLightBox.prototype.close = function() {

    var counter = 1;
    var lightBox = this.lightbox;
    var lightWrap = this.lightboxWrapper;
    var fadeInt = setInterval(function() {
        if (counter > 0) {
            lightBox.style.opacity = counter;
            counter -= 0.05;
        } else {
            clearInterval(fadeInt);
            document.body.removeChild(lightWrap);
        }
    }, 15);

    main.style.display = 'block';

};

function initLightbox() {
    var main = document.getElementById('main');
    var photos = Array.prototype.slice.call(document.querySelectorAll('.lightbox-image'));

    photos.forEach(function(photo) {

        photo.addEventListener('click', function() {
            main.style.display = 'none';
            var currentImage = new openLightBox(photo.src, photo.dataset.caption);
            currentImage.open();

        });

    });

}

window.onload = initLightbox;
