let buton = document.querySelector(".fa-solid")
let close = document.querySelector(".close")
let aside = document.querySelector(".aside")

buton.addEventListener("click",function () {
    aside.classList.remove("none")
})
close.addEventListener("click",function () {
    aside.classList.add("none")
})