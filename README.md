# 📘 Documentação: IIFE (Immediately Invoked Function Expression)

## ✅ O que é uma IIFE?

Uma **IIFE** é uma função em **JavaScript** que é **definida e executada imediatamente**, sem a necessidade de ser chamada depois pelo nome.

O nome vem de *Immediately Invoked Function Expression*, que em português significa:
👉 **Expressão de Função Executada Imediatamente**.

---

## 📌 Estrutura básica

```js
(function () {
  console.log("Eu sou uma IIFE!");
})();
```

### 🔎 Explicando:

1. **`(function() { ... })`** → definimos a função dentro de parênteses.
   Isso faz com que o JavaScript entenda que se trata de uma *expressão de função*, não de uma declaração normal.

2. **`() final`** → logo após a função, usamos parênteses extras para **executá-la imediatamente**.

---

## 📍 Exemplo simples

```js
(function () {
  let nome = "Raphael";
  console.log("Olá, " + nome + "!");
})();
```

🔔 Resultado no console:

```
Olá, Raphael!
```

---

## 🎯 Por que usar uma IIFE?

Antes do **ES6 (2015)**, não existia `let` e `const`, apenas `var`.
O `var` **vazava escopo** (ficava acessível fora de blocos), então os desenvolvedores usavam IIFE para criar um **escopo isolado**.

### Exemplo sem IIFE:

```js
var contador = 0;
console.log(contador); // 0
```

➡ A variável `contador` fica disponível no escopo global.

### Exemplo com IIFE:

```js
(function () {
  var contador = 0;
  console.log(contador); // 0
})();
console.log(typeof contador); // undefined
```

➡ A variável `contador` **fica protegida dentro da IIFE**.

---

## 🛠️ Tipos de IIFE

Podemos criar IIFEs de diferentes formas:

### 1. Função Anônima

```js
(function () {
  console.log("IIFE anônima");
})();
```

### 2. Função Nomeada

```js
(function ola() {
  console.log("IIFE nomeada");
})();
```

### 3. Arrow Function

```js
(() => {
  console.log("IIFE com arrow function");
})();
```

---

## 📦 Passando parâmetros

Uma IIFE também pode receber valores:

```js
(function (nome) {
  console.log("Bem-vindo, " + nome + "!");
})("Raphael");
```

➡ Resultado:

```
Bem-vindo, Raphael!
```

---

## 🚀 Casos de uso práticos

1. **Evitar poluir o escopo global** (manter variáveis privadas).
2. **Inicializar código automaticamente** assim que a página carrega.
3. **Criar módulos simples** antes do ES6 Modules.

---

## ⚠️ Observação moderna

Hoje em dia, com `let`, `const` e `modules`, as IIFEs são **menos necessárias**.
Mas ainda são úteis em alguns casos, especialmente quando queremos **executar algo de imediato**.

---

# 📌 Resumo

* **IIFE** = função criada e executada imediatamente.
* Ajuda a **proteger variáveis** e a **evitar conflitos de escopo**.
* Pode ser escrita como **função anônima, nomeada ou arrow function**.
* Hoje em dia é menos usada, mas ainda é útil para **scripts isolados e autoexecutáveis**.
