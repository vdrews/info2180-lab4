document.addEventListener("DOMContentLoaded", function()
{
   const form = document.getElementById('getform');

   form.addEventListener('submit', gethero);


    function gethero(e){
        e.preventDefault();
 
        console.log('submitted');
        
        const input = document.getElementById('hero').value;
        //var param = "superheroe="+ heroo;
        var xhr = new XMLHttpRequest();



        ///new code
        
        var url = "superheroes.php?query="+ encodeURIComponent(input);
        ///

        console.log(xhr);
        //changed this line -below
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded' );


        xhr.onload = function(){
            if(this.status == 200){
               result.innerHTML = this.responseText;
             console.log(result.innerHTML);
            }
        }//sends the request 
        xhr.onerror = function(){
            console.log('request error ');
        }
       //changed this as welll 'superhero=' + encodeURIComponent(input)
        xhr.send();

    }
})
