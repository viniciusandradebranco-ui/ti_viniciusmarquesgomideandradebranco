// ex1
let visto = false;

// ex2
//   5 === 5    -> true
//   "5" === 5  -> false
//   "5" == 5   -> true

//   true === false -> false

// ex3
// O problema é usar uma única variável global (apoiado) para controlar o estado de múltiplos botões. Ao clicar em qualquer botão, ele altera o valor dessa mesma variável compartilhada, afetando o comportamento dos demais cartões.
// Correção: usar uma variável individual para cada botão dentro da função do forEach ou guardar o estado diretamente no elemento (ex: via dataset ou classe CSS):

document.querySelectorAll(".apoiar").forEach(function(botao) {
let apoiado = false;
botao.addEventListener("click", function() {
// ...
});
});

// ex4
if (apoiado === false) {
botao.textContent = "Apoiado";
} else {
botao.textContent = "Apoiar";
}

// ex5
Adicionei a estrutura HTML do quarto cartão no Radar com a classe .apoiar no botão, fazendo com que ele seja automaticamente selecionado pelo querySelectorAll.

// ex6
No JavaScript, inicializaria a variável de estado desse cartão específico como true (let apoiado = true;).
Essa solução não serve para os outros cartões porque eles iniciam desapoiados (false), logo definir todos como true faria com que todos começassem no estado inicial invertido.