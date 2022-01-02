var ArrayUsers = [
  {
    name: "Lucas Gonçalves",
    description: "<p>Olá, meu nome é Lucas Gonçalves. Sou um desenvolvedor web autodidata que vive no estado de Minas Gerais, Brasil.</p> <p>Tenho lutado na frente no último ano, e eventualmente comecei a desfrutar da ideia por trás de cada linha de código. Agora, como profissionalmente conectado com a indústria de software, estou interessado no escopo front-end e livre de novas oportunidades.</p>",
    image: "https://lh4.googleusercontent.com/4cM2wJLEb5nfnwtyUFWyDS-TnW8E-Q1gSBzLQOIC7-AHge5V7gpxe-KxpC0hQy58XKa2cIDLBuKK2r0ByFw7=w1366-h617",
    github: "https://github.com/Lucas-Eduardo-Goncalves",
    linkedin: "https://www.linkedin.com/in/lucas-gon%C3%A7alves-62a16b209",
    curriculo: "https://drive.google.com/file/d/1Uv5_l6RuUHypMVCpRvJi9lK825xyTYHS/view?usp=sharing"
  }
]

var section = document.querySelector('#render_html_users');

var responseArrayMap = ArrayUsers.forEach(user => {
  var userHtml =  `
    <div class="candidatos__cartao">
      <div class="candidatos__header">
        <img src="${user.image}" alt="${user.name}"/>
        <h4>${user.name}</h4>
      </div>
      <div class="candidatos__body">
        <div class="candidatos__description">
          ${user.description}
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