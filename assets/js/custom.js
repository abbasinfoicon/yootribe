(function ($) {
    "use strict";
    $(document).ready(function () {
        "use strict";

        //Scroll back to top

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })

        // Preloader
        var win = $(window);
        win.on('load', function () {
            $('#pre-loader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        })


        $('.community_carousel').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: false,
            nav: true,
            dots: false,
            navText: [
                "<img src='assets/img/left-icon.png' class='left-icon'>",
                "<img src='assets/img/right-icon.png' class='right-icon'>"
            ],
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });


        // popup-video-section statt
        $(function () {
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });
        // popup-video-section end


    });

    // tooltips start
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    // tooltips end

    // tinymce-editor start
    tinymce.init({
        selector: "#editor",
        menubar: false,
        statusbar: false,
        plugins:
            "autoresize anchor autolink charmap code codesample directionality fullpage help hr image imagetools insertdatetime link lists media nonbreaking pagebreak preview print searchreplace table template textpattern toc visualblocks visualchars",
        toolbar:
            "bold italic underline forecolor | blocks | link | alignleft aligncenter alignright | bullist numlist | blockquote| image",
        skin: "bootstrap",
        toolbar_drawer: "floating",
        min_height: 400,
        autoresize_bottom_margin: 16,
        setup: (editor) => {
            editor.on("init", () => {
                editor.getContainer().style.transition =
                    "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out";
            });
            editor.on("focus", () => {
                (editor.getContainer().style.boxShadow =
                    "0 0 0 .2rem rgba(0, 123, 255, .25)"),
                    (editor.getContainer().style.borderColor = "#80bdff");
            });
            editor.on("blur", () => {
                (editor.getContainer().style.boxShadow = ""),
                    (editor.getContainer().style.borderColor = "");
            });
        }
    });
    // tinymce-editor end

})(jQuery);