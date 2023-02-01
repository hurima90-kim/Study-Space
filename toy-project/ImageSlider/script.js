const counter = 1
setInterval(function(){
    document.getElementById('radio' + counter).checked == ture
    counter++
    if(counter > 4){
        counter = 1
    }
}, 2000)