$(document).ready(function() {
    $('.page-detail').css({'display':'none'});

    $(window).on('popstate', function(event) {
        location.reload();
    });       
    
    $('#jkt').click(function(){
        window.history.pushState({href: '/'}, '', '/')
        $('.page-home').fadeOut('fast');
        $('.page-detail').delay(400).fadeIn();

        $('#link-catalog').attr("href", "https://docs.google.com/gview?embedded=true&url=https://trinityartwork.vercel.app/assets/catalog/jakarta.pdf");
        $('#link-instagram').attr("href", "https://www.instagram.com/trinity_artwork");
        $('#link-instagram img').attr("src", "/assets/image/button IG baru.png");
        $('#link-whatsapp').attr("href", "https://wa.me/+6281318806662");
        $('#link-whatsapp img').attr("src", "/assets/image/button contact Jakarta.png");
    })

    $('#bdg').click(function(){
        window.history.pushState({href: '/'}, '', '/')
        $('.page-home').fadeOut('fast');
        $('.page-detail').delay(400).fadeIn();

        $('#link-catalog').attr("href", "https://docs.google.com/gview?embedded=true&url=https://trinityartwork.vercel.app/assets/catalog/bandung.pdf");
        $('#link-instagram').attr("href", "https://www.instagram.com/trinity_artwork");
        $('#link-instagram img').attr("src", "/assets/image/button IG baru.png");
        $('#link-whatsapp').attr("href", "https://wa.me/+6281564601750");
        $('#link-whatsapp img').attr("src", "/assets/image/button contact Bandung.png");
    })

    $('#dps').click(function(){
        window.history.pushState({href: '/'}, '', '/')
        $('.page-home').fadeOut('fast');
        $('.page-detail').delay(400).fadeIn();

        $('#link-catalog').attr("href", "https://docs.google.com/gview?embedded=true&url=https://trinityartwork.vercel.app/assets/catalog/bali.pdf");
        $('#link-instagram').attr("href", "https://www.instagram.com/trinitybali_artwork");
        $('#link-instagram img').attr("src", "/assets/image/button IG bali baru.png");
        $('#link-whatsapp').attr("href", "https://wa.me/+6281220095589");
        $('#link-whatsapp img').attr("src", "/assets/image/button contact Bali.png");
    })
})