$(document).ready(function(){
    'use strict'
/*navbar*/
    $('.navbar .menu div').click(function(){
        $('.body-overlay').show();
		$('.mobile').animate({
            right : '0'   
        }, 800)
        $('.body-overlay').animate({
            opacity: '1'
        },800)
    })
    $('.mobile-off > div').click(function(){
		$('.mobile').animate({
            right : '-100%'    
        }, 800)
        
        $('.body-overlay').animate({
            opacity: 0
        })
        $('.body-overlay').hide(800);
    })  
    $('.mobile-menu .shop-plus .btn-link').on('click',function(){
        $('.mobile-menu .btn-link i').not('.shop-plus .btn-link i').removeClass('fas fa-minus').addClass('fas fa-plus',1000);
        $('.shop-plus .btn-link i').toggleClass('fas fa-minus').toggleClass('fas fa-plus',1000);
    })
    $('.mobile-menu .pages-plus .btn-link').on('click',function(){
        $('.mobile-menu .btn-link i').not('.pages-plus .btn-link i').removeClass('fas fa-minus').addClass('fas fa-plus',1000);
        $('.pages-plus .btn-link i').toggleClass('fas fa-plus',1000).toggleClass('fas fa-minus');
    })
    $('.mobile-menu .plog-plus .btn-link').on('click',function(){
        $('.mobile-menu .btn-link i').not('.plog-plus .btn-link i').removeClass('fas fa-minus').addClass('fas fa-plus',1000);
        $('.plog-plus .btn-link i').toggleClass('fas fa-plus',1000).toggleClass('fas fa-minus');
    })
    $('.mobile-curr .language .btn-link').on('click',function(){
        $('.mobile-curr .btn-link i').not('.mobile-curr .language .btn-link').removeClass('fa-angle-down').addClass('fa-angle-up');
        $('.language .btn-link i').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
    })
    $('.mobile-curr .currency .btn-link').on('click',function(){
        $('.mobile-curr .btn-link i').not('.mobile-curr .currency .btn-link').removeClass('fa-angle-down').addClass('fa-angle-up');
        $('.currency .btn-link i').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
    })
    $('.mobile-curr .my-account .btn-link').on('click',function(){
        $('.mobile-curr .btn-link i').not('.mobile-curr .my-account .btn-link').removeClass('fa-angle-down').addClass('fa-angle-up');
        $('.my-account .btn-link i').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
    })

    $(window).scroll(function(){
		if($(window).scrollTop()>300){
            $('.swip-up').css('display', 'inline');
            $('.navbar').css({
                'position' :'fixed',
                'width' : '100%'
            })  
		}
		else{
            $('.swip-up').css('display', 'none');
            $('.navbar').css('position','relative')
		}
    })
    $('.swip-up').click(function(){
		$('html, body').animate({
			scrollTop: 0
		  }, 800)
	})
/*end navbar*/  
    $('.all-product .owl-carousel, .arrivals .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        autoplay : true,
        slideTransition: 'linear',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                itmes: 3
            },
            1000:{
                items:4
            }
        }
    })
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        autoplay : true,
        slideTransition: 'linear',
        duration: 1500,
        responsive:{
            0:{
                items:1
            }
        }
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
		margin:30,
		nav:true,
		autoplay:true,
        duration: 500,
        responsive:{
            0:{
                items:4
            }
        }
    })
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseInt(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseInt(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    AOS.init({
        duration: 1500,
        once: true,
    });
   
})