let index = 0;
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.products')
console.log(rightbtn)
console.log(leftbtn)
console.log(imgNumber)
rightbtn.addEventListener("click", function () {
    index = index + 1
    if(index>imgNumber.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-container").style.right = index *100+"%"
})

leftbtn.addEventListener("click", function () {
    index = index - 1
    if(index<=0){
        index = imgNumber.length-1
    }
    document.querySelector(".slider-product-one-content-items-container").style.right = index *100+"%"
})

