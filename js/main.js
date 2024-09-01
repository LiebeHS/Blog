$(function(){

                     //Scroll arriba de la web
                     $('.go-up').on('click', function(e){
                        e.preventDefault()
                        $('html, body').animate({
                            scrollTop: 0
                        }, 500)
                
                        return false;
                    })

            //Selector de tema
            var theme = $("#theme")
            $("#to-green").on('click', function(){
                theme.attr("href", "css/green.css");
            })
        
            $("#to-red").on('click', function(){
                theme.attr("href", "css/red.css");
            })
        
            $("#to-blue").on('click', function(){
                theme.attr("href", "css/blue.css");
            })
    //Login falso

    $('#login').on('click' ,function(){
       var form_name =  $('#form_name').val();
       localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name")

    $(".logout").hide()
    
    if(form_name != null || form_name != undefined){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido, "+form_name);
        $(".logout").show()
        $('#login').hide();

    $(".logout").on('click' ,function(){
        localStorage.clear()
        location.reload()
     });

    }
    })