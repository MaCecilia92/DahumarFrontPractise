$(document).ready(function(){


    function responsiveMenu() {
        var menuVisible = false;
        $('#responsive').click(function() {
            if (menuVisible) {
                $('#botonera').css({'display':'flex'});
                menuVisible = false;
                return;
            }
            $('#botonera').css({'display':'none'});
            menuVisible = true;
        });
    }


});
