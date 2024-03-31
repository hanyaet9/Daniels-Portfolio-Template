let nav = $('.navbar');
let aboutOffsetTop = $('#about').offset().top;
let navHeight = $('.navbar').innerHeight();
$(window).scroll( function(){
if($(window).scrollTop()>aboutOffsetTop - navHeight){
    $('.navbar').css('backgroundColor' , '#040404ce')}
else{$('.navbar').css('backgroundColor' , 'transparent')}
});
