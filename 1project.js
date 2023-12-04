const btn = document.querySelector(".btn");
const photo = document.querySelector(".mainimg");
const love = document.querySelector("i");
const like = document.querySelector(".like");
let totlike = document.querySelector(".totlike span");
let flag = 0
let ansh = 0
let pluse =0
let lik = 500
function recall(){
    totlike.textContent = lik;
 }
function incr(){
    lik++
    recall()
}
function decr(){
    lik--
    recall()
}

btn.addEventListener("click",function(){
    if (flag == 0){
        btn.innerHTML = "Followed"
        btn.style.fontsize = "15px"
        flag = 1
        photo.addEventListener("dblclick",function(){
            love.style.transform = 'translate(70%,-50%) scale(1)'
            like.style.color = 'red' 
            if(pluse == 0){
                incr();
                pluse = 1
            }
            
            setTimeout(function(){
                love.style.transform = 'translate(70%,-50%) scale(0)'
                love.style.transition = '0.1s'
                
            },800) 
           
        })
        like.addEventListener("click",function(){
            if(like.style.color == 'red' || ansh == 0){
                like.style.color = 'white'
                ansh = 1
                if(pluse == 1){
                    decr()
                    pluse = 0
                }
                
                
            }
            else{
            like.style.color = 'red'
            love.style.transform = 'translate(70%,-50%) scale(1)'
            ansh = 0
            if(pluse == 0){
                incr();
                pluse = 1
            }  
            setTimeout(function(){
                love.style.transform = 'translate(70%,-50%) scale(0)'
                love.style.transition = '0.1s'
                
            },800)   
            }
        })
    }
    else
    {
        btn.innerHTML = "Follow"
        like.style.color = 'white'
        photo.addEventListener("dblclick",function(){
            love.style.transform = 'translate(70%,-50%) scale(0)'
            like.style.color = 'white'
        })
        like.addEventListener("click",function(){
            love.style.transform = 'translate(70%,-50%) scale(0)'
            like.style.color = 'white'
        })
        flag = 0
    }    
})
var arr = [
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
     stori:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
     stori:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
     stori:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
     stori:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
     stori:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
     stori:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
]
var storis = document.querySelector(".status")
var clutter = ""
arr.forEach(function(elem,index){
    clutter += `<div class="stori">
    <img id="${index}" src="${elem.dp}" alt="">
   </div>`
})
console.log(clutter)
storis.innerHTML = clutter
storis.addEventListener("click",function(dets){ 
    document.querySelector(".full").style.display = "block"
    document.querySelector(".full").style.backgroundImage = `url(${(arr[dets.target.id].stori)})`
})