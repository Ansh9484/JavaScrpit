const bar = document.querySelector("i");
const navbar = document.querySelector(".nav");
const side = document.querySelector(".side");
const content = document.querySelector(".content");
var flag = 0;
bar.addEventListener('click', function(){
    if(flag == 0){
    side.style.width = '25%';
    side.style.height = '90vh';
    content.style.display = 'block';
    content.style.opacity = '1';
    console.log("hello");
    flag = 1
    }
    else{
        if(flag == 1){
            side.style.width = '0%';
            side.style.height = '0vh';
            content.style.opacity = '0';
            console.log("hello");
            flag = 0
            }
    }
})
