$(function(){
        //Slider
        if(window.location.href.indexOf('index') > -1){
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200
              });
                }
              //Posts
              if(window.location.href.indexOf('index') > -1){
              var posts = [
                {
                    title: 'Prueba de titulo 1',
                    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum modi facilis illo accusamus unde dicta expedita facere accusantium commodi cupiditate consectetur ipsum aperiam eaque libero maxime placeat ullam, nemo alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, duci'
                },
                {
                    title: 'Prueba de titulo 2',
                    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum modi facilis illo accusamus unde dicta expedita facere accusantium commodi cupiditate consectetur ipsum aperiam eaque libero maxime placeat ullam, nemo alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, duci'
                },
                {
                    title: 'Prueba de titulo 3',
                    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum modi facilis illo accusamus unde dicta expedita facere accusantium commodi cupiditate consectetur ipsum aperiam eaque libero maxime placeat ullam, nemo alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, duci'
                },
                {
                    title: 'Prueba de titulo 4',
                    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum modi facilis illo accusamus unde dicta expedita facere accusantium commodi cupiditate consectetur ipsum aperiam eaque libero maxime placeat ullam, nemo alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, duci'
                },
                {
                    title: 'Prueba de titulo 5',
                    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum modi facilis illo accusamus unde dicta expedita facere accusantium commodi cupiditate consectetur ipsum aperiam eaque libero maxime placeat ullam, nemo alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, duci'
                }
            ]
        
          posts.forEach((item,) => {
            var post = `
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content} 
            </p>
            <a href="#" class="button-more" >Leer mas</a>
            </article>
            `;
        
            $('#posts').append(post)
            })
            }
        

        

})