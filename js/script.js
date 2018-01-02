$(document).ready(function () {

    $('.header-top-admin-mode__switcher').on('click', function () {
        $(this).toggleClass('header-top-admin-mode__switcher_on');
        return false;
    })

    $('.content-block-menu__li a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show');
        check_footer();
        //$(this).parent().toggleClass('active');
    }).on('shown.bs.tab', function () {
        check_footer();
    })
	
	$('.content-block__more-panel-toogle').on('click', function () {
        $(this).parents('.content-block-content').toggleClass('collapsed').toggleClass('deployed');
        check_footer();
	    return false;
    })

    $('.form-group__input-text').on('blur', function () {
        if( $(this).val()!='' ){
            $(this).parent().addClass('form-group__input-text_on')
        }else{
            $(this).parent().removeClass('form-group__input-text_on')
        }
    })

    $('.form-group__switcher').on('click', function () {
        $(this).toggleClass('form-group__switcher_on');
        if( $(this).hasClass('group__switcher_on') ) {
            $(this).parents('.form-group').find('input[type="checkbox"]').attr('checked', '');
        }else{
            $(this).parents('.form-group').find('input[type="checkbox"]').attr('checked', 'checked');
        }
        return false;
    })

    if( $('.block-item__tokens').length>0 ) {
        //$('.block-item__tokens').mCustomScrollbar({ mouseWheel:{ preventDefault: true } });
        $('.block-item__copy-string').mCustomScrollbar({ axis:"x"  });
        //$('.block-item__tokens').perfectScrollbar();
        //$('.block-item__copy-string .copy-string').perfectScrollbar({ suppressScrollY:true });
    }

    $('.account-menu .nav-link').on('click', function(e){
        e.preventDefault();

        //$(document).stop('scroll');
        $('.account-menu .nav-link.active').removeClass('active');
        $(this).addClass('active');
        var hash = $(this).attr('href');
        var target = $(hash);

        $(window).scrollTo(target,'300');

        return false;
    });

    if( $('.feedback-form .input-group.select select').length>0 ) {
        /*$('.feedback-form .input-group.select select').select2({
            minimumResultsForSearch: Infinity
        });

        $('.feedback-form .input-group.select label').on('click', function () {
            $(this).parents('.input-group').find('select').select2('open');
        })*/
    }


    $('.volume-form-input').keyup(function() {
        if ($('.volume-form-input').val() === 'NameSpaceNameMANe') {
            $('.modal-footer-volume-delete').addClass('modal-volume-delete-active');
        } else {
            $('.modal-footer-volume-delete').removeClass('modal-volume-delete-active');
        }
    });

    $('.namespace-plan-block-container').on('click', function () {
        if ($(this).hasClass('disabled')) {
            return;
        }

        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    })


    _check_scroll();

})

$(window).on('scroll', function () {
    _check_scroll()
})

$(window).on('load', function(){
	
	 check_footer();
		
})

$(window).on('resize', function(){
	
	 check_footer();
		
})

function _check_scroll() {
    /*if( $('.account-menu').length>0 ) {
        if (_getPageScroll() >= $('.header').height() + 30) {
            var offset = $('.header').height() + 60;
            var margin = _getPageScroll() - offset;
            $('.account-menu').css({marginTop: margin})
        } else {
            $('.account-menu').css({marginTop: -25})
        }
    }*/
}

function check_footer(){
	/*if( $('body').height()<=$(window).height() ){
		$('body').addClass('footer-absolute');
	}else{
		$('body').removeClass('footer-absolute');
	}
	
	$('.footer').show();*/

	/*if( $('.support-feedback').length>0 ){
        if( $(window).height()<= 770 ){
            $('body').addClass('support-feedback-static');
        }else{
            $('body').removeClass('support-feedback-static');
        }
    }*/
}

// получить позицию скрола
function _getPageScroll() {	var xScroll, yScroll; if (self.pageYOffset) { yScroll = self.pageYOffset; xScroll = self.pageXOffset; } else if (document.documentElement && document.documentElement.scrollTop) { yScroll = document.documentElement.scrollTop; xScroll = document.documentElement.scrollLeft; } else if (document.body) { yScroll = document.body.scrollTop; xScroll = document.body.scrollLeft; } arrayPageScroll = new Array(xScroll, yScroll);	return yScroll; }
