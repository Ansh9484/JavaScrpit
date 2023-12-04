let input
const search = document.querySelector('i')
const city = document.querySelector('.cit')
const temp = document.querySelector('.cel')

search.addEventListener("click",function(){
    input = document.getElementById("input").value;
     if(input != ''){
        city.innerHTML = input
        temp.innerHTML = "42"
     }
})
