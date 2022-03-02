(function($) { 
    /*
     * НАСТРОЙКИ СКРИПТА
     */
    var defaults = {
            total : 25,
            ofTop: 0,
            ofLeft: 0,
            on:'document.body',
            twinkle: 0.9,
            minPixel: 2,
            maxPixel: 5,
            color: 'yellow'
    };
    $.firefly = function(settings) {
 
            $.firefly.settings = $.extend({}, defaults, settings);
            $.firefly.eleHeight = $($.firefly.settings.on).height();
            $.firefly.eleWidth = $($.firefly.settings.on).width();
            if($.firefly.settings.on!=='document.body'){
                var off = $($.firefly.settings.on).offset();
                $.firefly.offsetTop = off.top;
                $.firefly.offsetLeft = off.left;
                $.firefly.eleHeight = $($.firefly.settings.on).height();
                $.firefly.eleWidth = $($.firefly.settings.on).width();
            }
            else{
                $.firefly.offsetTop = 0;
                $.firefly.offsetLeft = 0;
                $.firefly.eleHeight = window.innerHeight;
                $.firefly.eleWidth = window.innerWidth;
 
            }
 
             
         
 
            for (i = 0; i < $.firefly.settings.total; i++){
 
                $.firefly.fly($.firefly.create($.firefly.randomPixel($.firefly.settings.minPixel, $.firefly.settings.maxPixel)));
            }
 
            return;
    };
     
    /*
     * PUBLIC FUNCTIONS
     */
 
     $.firefly.create = function(pixelSize){
        spark = $('<div>').hide();
 
        if($.firefly.settings.on === 'document.body')
            $(document.body).append(spark);
        else
            $($.firefly.settings.on).append(spark);
         
 
 
 
        return spark.css({'position':'absolute',    
                        'width' : pixelSize, 
                        'height': pixelSize,
                        'background-color': $.firefly.settings.color,
                        'opacity' : 0.8,
                        'border-radius' : 4,
                        'boxShadow': "0px 0px 5px 3px hsla(100, 70%, 60%, 0.8)",
                        'z-index': $.firefly.random(20), //UNDER ALL THE STUFF
                        top: $.firefly.offsetTop + $.firefly.random(($.firefly.eleHeight-50)),  //OFFSETS
                        left:  $.firefly.offsetLeft + $.firefly.random(($.firefly.eleWidth-50)) //OFFSETS
                        }).show();
 
     }
     
 
 
$.firefly.fly = function(sp) {
   
  $(sp).animate({
      top: $.firefly.offsetTop + $.firefly.random(($.firefly.eleHeight)),    //OFFSETS
      left: $.firefly.offsetLeft + $.firefly.random(($.firefly.eleWidth)),
      opacity: $.firefly.opacity($.firefly.settings.twinkle)
  }, (($.firefly.random(100) + 5) * 100),function(){  $.firefly.fly(sp) } );
};
 
$.firefly.stop = function(sp) {
  $(sp).stop();
};
 
 
 
$.firefly.randomPixel = function(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
$.firefly.random = function(max) {
    return Math.ceil(Math.random() * max) - 1;
}
// SET TWINKLE.
$.firefly.opacity = function(min)
{
        op= Math.random();
        if(op < min)
                return 0;
        else
                return 1;
}       
})(jQuery);
        $(document).ready(function() {
    $.firefly();    
});


// total : 25 - это количество движущихся точек. Если надо больше или меньше, просто напишите свое значение.
// on:'document.body' - это блок внутри которого будут двигаться точки. В примере это весь body сайта. Если надо только в пределах какого-то div, то просто вставьте его класс или ID. Например:
// on:'.block' или on:'#block'.
// minPixel: 1 - минимальный размер точки в пикселях, в примере 1 пиксель.
// maxPixel: 2 - максимальный размер точек.
// color: '#f30' - цвет точек.