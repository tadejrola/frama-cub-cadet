defer(function () {
    $(document).ready(function () {
        var opts = {

            autoScaleSlider: true,
            autoScaleSliderWidth: 1920,
            autoScaleSliderHeight: 610,

            controlNavigation: 'bullets',
            imageScaleMode: 'fill',
            transitionType: 'move',
            slidesSpacing: 0,
            randomizeSlides: false,
            imageScalePadding: 0,
            minSlideOffset: 0,
            easeInOut: 'easeInOutSine',
            arrowsNav: 1,
            arrowsNavAutoHide: 0,
            arrowsNavHideOnTouch: 0,
            fullscreen: false,
            loop: 1,
            autoPlay: {
                enabled: true,
                pauseOnHover: false,
                delay: 4000
            },
            numImagesToPreload: 3,
            thumbsFirstMargin: false,
            keyboardNavEnabled: true,
            navigateByClick: true,
            fadeinLoadedSlide: true
        };
        var sliderJQ = $('#rs').royalSlider(opts);


    });
});

function defer(method) { if (window.jQuery) { method(); } else { setTimeout(function () { defer(method) }, 50); } };


(function ($) {
    $('.csc-textpic-imagewrap,.image-wrap').each(function () {
        $(this).magnificPopup({
            delegate: 'a:isImageFile',
            tClose: 'Close (Esc)',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: 1,
                preload: [1, 2],
                navigateByImgClick: 1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: 'Previous (Left arrow key)',
                tNext: 'Next (Right arrow key)',
                tCounter: '%curr% of %total%'
            },
            image: {
                cursor: 'mfp-zoom-out-cur',
                titleSrc: 'title',
                verticalGap: 88,
                verticalFit: 1,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            removalDelay: 0
        });
    });
})(window.jQuery || window.Zepto);
; (function ($) {
    $('.mfp-ajax-link').magnificPopup({
        type: 'ajax',
        tClose: 'Close (Esc)',
        tLoading: 'Loading...',
        ajax: {
            cursor: '0',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        disableOn: 0,
        mainClass: '',
        preloader: 1,
        focus: '',
        closeOnContentClick: 0,
        closeOnBgClick: 1,
        closeBtnInside: 0,
        showCloseBtn: 1,
        enableEscapeKey: 1,
        modal: 0,
        alignTop: 0,
        fixedContentPos: 'auto',
        fixedBgPos: 'auto',
        overflowY: 'auto',
        removalDelay: 0,
        closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',
        callbacks: {
            ajaxContentAdded: function () {
                try {
                    $("img.lazyload").responsiveimages({}, function () {
                        $(this).load(function () {
                            this.style.opacity = 1;
                        });
                    });
                } catch (e) { }
            }
        }
    });
})(window.jQuery || window.Zepto);
; (function ($) {
    $('.mfp-content-element').magnificPopup({


        type: 'ajax',
        tClose: 'Close (Esc)',
        tLoading: 'Loading...',
        ajax: {
            cursor: '0',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        disableOn: 0,
        mainClass: '',
        preloader: 1,
        focus: '',
        closeOnContentClick: 0,
        closeOnBgClick: 1,
        closeBtnInside: 0,
        showCloseBtn: 1,
        enableEscapeKey: 1,
        modal: 0,
        alignTop: 0,
        fixedContentPos: 'auto',
        fixedBgPos: 'auto',
        overflowY: 'auto',
        removalDelay: 0,
        closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',
        callbacks: {
            beforeOpen: function () {
                console.log($.magnificPopup.instance.st.el);
                var href = $.magnificPopup.instance.st.el.attr('href');
                if (href.indexOf('eID=jh_magnificpopup_ajax') == -1) {
                    var fragment = href.substr(href.indexOf('#'));
                    href = href.replace(fragment, '');
                    var uid = fragment.replace('#c', '');
                    console.log('uid: ' + uid);
                    var delimiter = '&';
                    if (href.indexOf('?') == -1) delimiter = '?';
                    var newHref = href + delimiter + 'eID=jh_magnificpopup_ajax&jh_magnificpopup[type]=reference&jh_magnificpopup[uid]=' + uid;
                    console.log(newHref);
                    $.magnificPopup.instance.st.el.attr('href', newHref);
                    console.log($.magnificPopup.instance.st.el);
                }
            }
        }
    });
})(window.jQuery || window.Zepto);

