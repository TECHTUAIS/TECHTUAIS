var section = document.querySelector('#filter_html_users');
var users = ArrayUsers;

function refreshUser(){
var responseArrayMap = users.forEach(user => {

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

});
}
