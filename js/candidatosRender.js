function constroiTabela(array) {
  var section = document.querySelector('#render_html_users');
  var elements = document.querySelectorAll('.candidatos__cartao');

  if(elements.length > 0) {
    elements.forEach(user => user.remove());
  }

  array.forEach(user => {
    var userHtml =  `
      <div class="candidatos__cartao" {
        constructor() {

        }
      } data-animate='up'>
        <div class="candidatos__header">
          <img src="${user.image}" alt="${user.name}"  />
          <h4>${user.name}</h4>
        </div>
        <div class="candidatos__body">
          <div class="candidatos__description">
            ${user.description}
            <a target="_blank" href="${user.curriculo}">Veja meu currículo!</a>
          </div>
          <div class="candidatos__svg">
            <a href="${user.linkedin}" target="_blank" class="candidatos__box__icons">
              <i class='bx bxl-linkedin-square'></i>
            </a>

            <a href="${user.github}" target="_blank" class="candidatos__box__icons">
              <i class='bx bxl-github'></i>
            </a>
          </div>
        </div>
      </div>
    `;
    section.innerHTML += userHtml;
  })
}

var filterDesign = ArrayUsers.filter(user => user.area === "uxDesign");
var filterDesenvolvedor = ArrayUsers.filter(user => user.area === "Desenvolvedor Web");
var filterPreguisoso = ArrayUsers.filter(user => user.area === "Preguiçoso");

document.querySelector("#filterDesign").addEventListener("click", () => constroiTabela(filterDesign));
document.querySelector("#filterDesenvolvedor").addEventListener("click", () => constroiTabela(filterDesenvolvedor));
document.querySelector("#filterPreguisoso").addEventListener("click", () => constroiTabela(filterPreguisoso));
document.querySelector("#notfilter").addEventListener("click", () => constroiTabela(ArrayUsers));

constroiTabela(ArrayUsers);