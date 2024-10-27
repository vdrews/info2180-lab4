document.addEventListener("DOMContentLoaded", function()
{
    const button = document.getElementById('btn');


    button.addEventListener('click', loadtext);

    function loadtext(){
        console.log('button clicked');
        //xhr object
        var xhr = new XMLHttpRequest();
        //open - type url async

        console.log(xhr);
        xhr.open('GET', 'superheroes.php', true);
        xhr.onload = function(){
            if(this.status == 200){
               alert(this.responseText);
               console.log(this.responseText);
            }
        }//sends the request 
        xhr.onerror = function(){
            console.log('request error ');
        }
        xhr.send();

    }
})