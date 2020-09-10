$('#thanos-p').css('text-align',"center");
$('#thanos-p').css('color',"#ae0707");

// $('.thanos-snap').css('background','yellow');



$('.thanos-snap').hover(function(){
    
    $(this).toggleClass('hoverprop');
    
});

// $('.thanos-snap').mouseout(function(){
    
//     $(this).removeClass('cssNew');
    
// });


$(".snap-t").on('click', function(){
    $('.a').fadeOut(3000);
    $('.abc').fadeIn();
    $('.ab').fadeIn();
    // alert('Thanos think he won !');

});
$(".hulk-snap").on('click', function(){
    $('.a').fadeIn(3000);
    $('.abc').fadeIn();
    $('.ab').fadeIn();
    // alert('Hulk brings back all the Avengers');

});
$(".iron-snap").on('click', function(){
    $('.ab').fadeOut(3000);
    $('.a').fadeIn();
    
    
    

    $(document).ready(function () {
			
        $('.abc').hide(4000, function () {
            // $('.abc').append('fadeOut completed.')
        });
        // $('.abc').show(function(){
        //     $(this).append().attr('src','/images/iron-dead.png');
        // });
    
    });
    // $(document).ready(function () {
		
    //     $('.abc').show(function(){
    //         $(this).attr('src','/images/iron-dead.png');
    //     });
    
    // });


    // alert('Iron man - We love You 3000');
    
    setTimeout(() => {
        $('.all').empty();

        
    }, 5000);


    setTimeout(() => {
        $('#lastimg').css('display','block')
        $('#lastimg').addClass('lastimg1')
    }, 6000);
    function blink_text() {
        $('.quote').fadeOut(500);
        $('.quote').fadeIn(500);
    }
    setInterval(blink_text, 2000);
     

 
        
    // $('body').addClass('last-img'); 
    // $("body").attr('src',"/images/iron-dead.png");
});

