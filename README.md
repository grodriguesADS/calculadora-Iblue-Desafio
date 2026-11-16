#  Calculadora Basica para Web

Este projeto consiste em uma calculadora básica com as quatro operações básicas, como também as operações de porcertagem e raiz quadrada, que tem o objetivo ensinar os alunos do ensino fundamental I e II, como manusear a mesma.

Projeto proposto pela iBlue Consulting como meio de avaliação para o programa de estágio.

## 🚀 Começando

As instruções a seguir permitirão a implementação de uma cópia do projeto em sua máquina local para fins de desenvolvimento e teste da aplicação.

Consulte em **Instalação** para saber como implantar o projeto em sua máquina.

## 📋 Pré-requisitos

Para o funcionamento da aplicação é necessário que em sua máquina tenha as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/download/)
* Uma IDE compativel ( Recomendado o [Visual Studio Code](https://code.visualstudio.com))

## 🔧 Instalação

Em seu terminal, localize a pasta que queria clonar o projeto e digite o comando:

```
git clone https://github.com/grodriguesADS/calculadora-Iblue-Desafio.git
```
Após clonar o projeto em sua pasta, acesse a mesma com o comando: 

```
cd .\calculadora-Iblue-Desafio\
```
Dentro da pasta, será feita a instalação das dependêcias, atráves do comando: 

```
npm install
```



Para iniciar a aplicação, basta digitar o comando: 

```
npm start
```

Ao final o console estará com a seguinte mensagem: 

```bash
> calculadora-iblue-desafio@1.0.0 start
> node index.js

Servidor está funcionando na porta 3000
```

Em seu navegador, abra uma aba, e coloce o seguinte link para acessa a calculadora: 
```
http://localhost:3000
```

## ⚙️ Executando os testes

Caso queira observar a documentação dos testes unitários pelo console, basta digitar o comando: 

```
npm test
```

Segue a documentação dos testes: 

```bash
> calculadora-iblue-desafio@1.0.0 test
> mocha



  Teste da função subtração:
    1° teste: Somente um parametro
      ✔ Recebendo somente um parametro
    2° teste: Dois parametros
      ✔ Recebendo dois parametros
    3° teste: Tres parametro
      ✔ Recebendo tres parametros
    4° teste: Numero negativo parametro
      ✔ Recebendo numero negativo
    5° teste: Dois numeros negativo parametro
      ✔ Recebendo dois numero negativo
    6° teste: Dois parametros (um negativo e um positivo)
      ✔ Recebendo dois parametro com sinais opostos      
    7° teste: Dois parametros com valores flutuantes     
      ✔ Recebendo dois parametros flutuantes

  Teste da função divisão:
    1° teste: Somente um parametro
      ✔ Recebendo somente um parametro
    2° teste: Dois parametros
      ✔ Recebendo dois parametros
    3° teste: Tres parametro
      ✔ Recebendo tres parametros
    4° teste: Numero negativo parametro
      ✔ Recebendo numero negativo
    5° teste: Dois numeros negativo parametro
      ✔ Recebendo dois numero negativo
    6° teste: Dois parametros (um negativo e um positivo)
      ✔ Recebendo dois parametro com sinais opostos
    7° teste: Dois parametros com valores flutuantes
      ✔ Recebendo dois parametros flutuantes
    8° teste: Dois parametros retornando uma dizima periodica
      ✔ Recebendo dois parametros que retornam dizima

  Teste da função multiplicação:
    1° teste: Somente um parametro
      ✔ Recebendo somente um parametro
    2° teste: Dois parametros
      ✔ Recebendo dois parametros
    3° teste: Tres parametro
      ✔ Recebendo tres parametros
    4° teste: Numero negativo parametro
      ✔ Recebendo numero negativo
    5° teste: Dois numeros negativo parametro
      ✔ Recebendo dois numero negativo
    6° teste: Dois parametros (um negativo e um positivo)
      ✔ Recebendo dois parametro com sinais opostos
    7° teste: Dois parametros com valores flutuantes
      ✔ Recebendo dois parametros flutuantes

  Teste da função porcentagem:
    1° teste: Somente um parametro
      ✔ Recebendo somente um parametro
    2° teste: Somente um parametro negativo
      ✔ Recebendo somente um parametro negativo
    3° teste: Somente String como parametro
      ✔ Recebendo String como parametro
    4° teste: Dois parametros
      ✔ Recebendo dois parametro

  Teste da função raiz quadrada:
    1° teste: Somente um parametro
      ✔ Recebendo somente um parametro
    2° teste: Somente um parametro que retorna um numero decimal
      ✔ Recebendo somente um parametro que retorna decimal

  Teste da função soma:
    1° teste: Somente um parametro
      ✔ Recebendo somente um parametro
    2° teste: Dois parametros
      ✔ Recebendo dois parametros
    3° teste: Três parametros
      ✔ Recebendo Três parametro
    4° teste: Dois parametros com String
      ✔ Recebendo dois parametro com string
    5° teste: Dois parametros negativos
      ✔ Recebendo dois parametro negativos
    6° teste: Dois parametros (um negativo e um positivo)
      ✔ Recebendo dois parametro com sinais opostos
    7° teste: Dois parametros com valores flutuantes
      ✔ Recebendo dois parametro flutuantes


  35 passing (31ms)
```

## 🛠️ Construído com

**Front-end**
* [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) - Para criação do conteúdo da página
* [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) - Para a aplicação do Design da página
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Para implementar o comportamento da página web com o back-end

**Back-end**
* [NodeJS](https://nodejs.org/pt-br/docs/) - Para o desenvolvimento do back-end
* [Express](https://expressjs.com/pt-br/) - Para criação de Rotas (GET e POST)
* [Mocha+Chai](https://www.chaijs.com/api/bdd/) - Para implementação dos testes unitários
* [BodyParser](https://www.npmjs.com/package/body-parser) - Para a conversão de dados das requisições

**Utilitários**
* [Visual Studio Code](https://code.visualstudio.com) - IDE para criação da aplicação
* [Insomnia](https://insomnia.rest)- Ferramenta para testes de API

## 🖥️ Regras de negócio

* A calculadora só aceitar números (0 a 9) e os sinais das operações matemáticas (+, -, * , / , % , √).
* A calculadora retorna uma mensagem de nula ou "Erro" no console caso a operação esteja nula ou imcompleta.
* A calculadora só resolve uma operação por vez, caso seja colocado uma operação a mais, ela irá retornar uma mensagem de "Erro".
* A calculadora retorna o valor nulo caso seja feito uma divisão por zero.

## 🤵 Autor
---

<a href="https://github.com/grodriguesADS">
 <img style="height:auto;" alt="" width="100px" src="https://avatars.githubusercontent.com/u/87981116?v=4">
 <br />
 <sub><b>Guilherme Rodrigues</b></sub></a> <a href="https://github.com/grodriguesADS" >🚀</a>


Feito por Guilherme Rodrigues 👋🏽 Entre em contato!

 <a href="https://www.linkedin.com/in/g-rodrigue-s/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 



