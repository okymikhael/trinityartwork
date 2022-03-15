$(document).ready(function() {
    $('.page-detail').css({'display':'none'});

    $(window).on('popstate', function(event) {
        $('.page-detail').fadeOut();
        $('.page-home').delay(400).fadeIn();
    });       
    
    $('#jkt').click(function(){
        $('.page-home').fadeOut('fast');
        $('.page-detail').delay(400).fadeIn();

        $('#link-catalog').attr("href", "/");
        $('#link-instagram').attr("href", "https://www.instagram.com/trinity_artwork");
        $('#link-whatsapp').attr("href", "https://wa.me/+6281564601750");
        $('#link-whatsapp img').attr("src", "/assets/image/button contact Jakarta.png");
    })

    $('#bdg').click(function(){
        $('.page-home').fadeOut('fast');
        $('.page-detail').delay(400).fadeIn();

        $('#link-catalog').attr("href", "/");
        $('#link-instagram').attr("href", "https://www.instagram.com/trinity_artwork");
        $('#link-whatsapp').attr("href", "https://wa.me/+6281564601750");
        $('#link-whatsapp img').attr("src", "/assets/image/button contact Bandung.png");
    })

    $('#dps').click(function(){
        $('.page-home').fadeOut('fast');
        $('.page-detail').delay(400).fadeIn();

        $('#link-catalog').attr("href", "/");
        $('#link-instagram').attr("href", "https://www.instagram.com/trinity_artwork");
        $('#link-whatsapp').attr("href", "https://wa.me/+6281564601750");
        $('#link-whatsapp img').attr("src", "/assets/image/button contact Bali.png");
    })
})