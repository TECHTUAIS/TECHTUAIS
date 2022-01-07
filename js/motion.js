const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;

  item.forEach((element)=> {
    if (windowTop>element.offsetTop){
      element.classList.add("animate");
    }else{
      element.classList.remove("animate");
    }
  })
}

window.addEventListener("scroll", ()=>{
  animeScroll();
})

maintext=document.querySelector(".main__header--title");
maintext.classList.add("animate");

var idButton;
var botoes = document.querySelector(".filterOptions");
botoes.addEventListener('click', function(idBut) {
var clearClass = document.querySelectorAll(".botao");
clearClass.forEach(clearClass=>clearClass.classList.remove("selectedButton"));
  idBut.target.classList.add("selectedButton");
});
