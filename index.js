const resultado = (function () {
  const meuNome = "Raphael";
  console.log(`Olá ${meuNome}!`);
})();


// Passando parametros
(function (n1, n2) {
  const resultado = n1 + n2;
  console.log(`O resultado é: ${resultado}`);
})(50, 30);
