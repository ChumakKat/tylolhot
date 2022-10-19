$(function() {

    /* FIXED HEAD */
    let head = $("#head");
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();
            
        if(scrollPos > 20 ) {
            head.addClass("fixed");
        } else {
            head.removeClass("fixed");
        }
    });

    /* SMOOTH SCROLL TO INSTRUCTION */
    let headH = head.innerHeight();
    let headP = parseInt(head.css("padding"));
    let headV = headH - headP*2; 

    $("[data-scroll]").on("click", function() {

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top - headV;
        
        $("html, body").animate({
            scrollTop: elementOffset 
        }, 700);
    });

    /* BURGER */
    let bntBurger = $("#btn__burger");
    let nav = $("#nav");
    let body = $("body");
    let btn1 = $("#btn__line1");
    let btn2 = $("#btn__line2");
    let btn3 = $("#btn__line3");

    $(bntBurger).on("click", function(event) {
        event.preventDefault();

        head.toggleClass("head-burger");
        nav.toggleClass("nav-burger");     
        body.toggleClass("body-fix");     
        btn1.toggleClass("btn__close1");     
        btn2.toggleClass("btn__close2");     
        btn3.toggleClass("btn__close3");    
    });

    //VIDEO

    let videoYT = $("#video");
    let btnVideo = $("#btn__video");
    let main = $("#main"); 
    let btnInst = $("#btn__inst"); 

    $(btnVideo).on("click", function(event) {
        event.preventDefault();

        videoYT.addClass("video__active");
        main.addClass("main__noactive");
        btnInst.addClass("btn__noactive");
    });


    //PARALLAX
    $('.main').on('mousemove', (e) => {
        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();

       $('.main-img__elips-left, .main-img__elips-right, .main-img__sheet-one, .main-img__sheet-two' ).css(
        'transform',
        'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
       ); 
    });

    // PARALLAX SCROLL
    $(function() {
        $(window).on('scroll', function () {
            let top = $(this).scrollTop();
            parallax(top);
        })
    });

    function parallax(top) {
        $('.inst-img__sheet-left, .inst-img__circle-left,  .inst-img__sheet-right').css(
            'transform',
            'translateY(' + (top / 5) + 'px)'
           ); 

        $('.inst-img__lemon').css(
            'transform',
            'rotateZ(' + (top / 10) + 'deg)'
        );   

        $('.about-img__sheet-left, .about-img__sheet-right').css(
            'transform',
            'translateY(' + (top / 5) + 'px)'
           ); 
    };

});