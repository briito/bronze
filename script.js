// Ao clicar em "Baixar", inicia o download do PDF e leva a pessoa para a página de obrigado.
// Sem JavaScript, o link continua baixando o PDF normalmente.
document.querySelectorAll('[data-download]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var temp = document.createElement('a');
    temp.href = link.getAttribute('href');
    temp.download = '';
    document.body.appendChild(temp);
    temp.click();
    temp.remove();
    setTimeout(function () { window.location.href = 'obrigado.html'; }, 1500);
  });
});
