const xhr = new XMLHttpRequest;
const button = document.getElementById('button');

button.addEventListener('click',function loadData (){
    xhr.onload = function (){
        if (xhr.readyState == 4){
            if (xhr.status == 200) {
                document.getElementById('output').innerHTML = xhr.responseText;
            }
            if (xhr.status == 404) {
                console.log("ERROR 404")
            }
        }
    }
    xhr.open('get', 'data.txt', true);
    xhr.send();
})