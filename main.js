$(() => {


// //    $.ajax({
//         type: 'GET',
//         url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
//    }).done((ron) =>{
//        let wisdom = ron;
//        console.log(wisdom);
//    })
// // 
   


localStorage.clear()
let quote = [] 

      $('#toggle').click(() =>{
          $('#here').empty()
        $.ajax({
            type: 'GET',
            url: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
        }).done((ron) => {
            console.log(ron);
                let wisdom = $(`<h2>${ron}</h2>`)
                $('#here').append(wisdom)
          
     
            })

         
    
         

       
            
            })
        });   

/*$( "#target" ).click(function() {
  alert( "Handler for .click() called." );
});
Now if we click on this element, the alert is displayed:
 */   
    
    
        
           
     
    