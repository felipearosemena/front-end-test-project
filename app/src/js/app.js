document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
});

document.addEventListener('click', function(e){
  if(e.target.tagName=="IMG"){
      src = this.getAttribute('src');
      document.getElementById('lightbox-image').setAttribute('src', src);
      document.getElementById('light').style.display='block';
      document.getElementById('fade').style.display='block';
  }
})


document.getElementById('close').addEventListener('click', function(){
      document.getElementById('light').style.display='none';
      document.getElementById('fade').style.display='none';
});
