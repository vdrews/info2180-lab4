document.addEventListener("DOMContentLoaded", function()
{
   const form = document.getElementById('getform');

   form.addEventListener('submit', gethero);


    function gethero(e){
        e.preventDefault();
 
        console.log('submitted');
        
        const input = document.getElementById('hero').value;
       
        var xhr = new XMLHttpRequest();



        
        
        var url = "superheroes.php?query="+ encodeURIComponent(input);
        

        console.log(xhr);
        
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded' );


        xhr.onload = function(){
            if(this.status == 200){
               result.innerHTML = this.responseText;
             console.log(result.innerHTML);
            }
        }
        xhr.onerror = function(){
            console.log('request error ');
        }
       
        xhr.send();

    }
})
