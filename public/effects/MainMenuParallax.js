  let container = document.querySelector('#container'),
      container2 = document.querySelector('#container2'),
        shelve1 = document.querySelector('#shelve1'),
        width = container2.scrollWidth,
        height = container.offsetHeight,
        timeout = null,
        x, y, m;
    
    container.addEventListener('mousemove', function(e) {
    
        if (timeout) return;
        timeout = setTimeout(function() {
          container.style.width = container2.offsetWidth
            container.style.backgroundPosition = (e.clientX/window.innerWidth)*100 + '%' + -e.clientY*0.08 + 'px';
            timeout = null;
        }, 100);
    }, false);