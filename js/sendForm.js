var buttonAdd = document.querySelector('#buttonSendForm');

buttonAdd.addEventListener("click", (event) => {
  event.preventDefault();

  var form = document.querySelector('#sendForm');

  let valid = true;

  var templateParams = {
    email: form.email.value,
    areaatuacao: form.areaatuacao.value
  };

  if(form.email.value === '') {
    valid = false;
  }

  if(form.areaatuacao.value === '') {
    valid = false;
  }

  if(valid) {
    emailjs.send('service_2dxbwdu', "template_thad4fj", templateParams, "user_Si1WVNZ4bPu1upJHysDar")
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });

    form.reset();
  } else {
    alert("Erro! Confira os campos novamente.")
  }
});