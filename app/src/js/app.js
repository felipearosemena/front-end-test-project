(function(){

  var items = document.querySelectorAll("#content .figure");
  var closeButtons = document.querySelectorAll(".close");

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", handleShow);
  }

  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", handleClose);
  }


  function handleShow(event) {
    var targetElement = event.target || event.srcElement;
    var elementID = targetElement.closest(".item");

    _(elementID.querySelector(".close")).fade("in", 100);
    _(document.querySelector("#content")).addClass("is-a-modal");
    _(elementID).removeClass("item").addClass("expand").addClass("show-element");

    scroll(0,0);
    return false;
  }

  function handleClose(event) {
    var targetElement = event.target || event.srcElement;
    var elementID = targetElement.parentElement;

    _(elementID.querySelector(".close")).fade("out", 100);
    _(document.querySelector("#content")).removeClass("is-a-modal");
    _(elementID).removeClass("expand").removeClass('show-element').addClass("item");


    return false;
  }

  function _(el) {
    if (!(this instanceof _)) {
      return new _(el);
    }
    this.el = el;
  }

  _.prototype.removeClass = function (className) {
    var self = this;

    if (self.el.classList && self.el.classList.contains(className)) {
      self.el.classList.remove(className);
    } else {
      self.el.className = self.el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    return self;
  }

  _.prototype.addClass = function (className) {
    var self = this;

    if (self.el.classList && !self.el.classList.contains(className)) {
      self.el.classList.add(className);
    } else {
      self.el.className += ' ' + className;
    }

    return self;
  }

  _.prototype.fade = function fade(type, ms) {
    var isIn = type === 'in',
      opacity = isIn ? 0 : 1,
      interval = 50,
      duration = ms,
      gap = interval / duration,
      self = this;

    if(isIn) {
      self.el.style.display = 'inline';
      self.el.style.opacity = opacity;
    }

    function func() {
      opacity = isIn ? opacity + gap : opacity - gap;
      self.el.style.opacity = opacity;

      if(opacity <= 0) self.el.style.display = 'none'
      if(opacity <= 0 || opacity >= 1) window.clearInterval(fading);
    }

    var fading = window.setInterval(func, interval);
  }

})();
