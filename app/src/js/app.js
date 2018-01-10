function hide_html(){
        var top = document.body;
        top.style.overflowY = "hidden";
        top.scrollLeft = 0;
        top.scrollTop = 0;
    }
    
    var getImageName = function () {
        document.onclick = function (e) {
            if (e.target.tagName == 'IMG') {
                hide_html();
            }
        }
    }

    getImageName();
