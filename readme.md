# Para o(a) desenvolvedor(a)

## Introdução

O presente projeto tem o objetivo de realizar o cálculo de aplicações financeiras (investimentos). Em um primeiro momento, são considerados rendimentos utilizando a fórmula dos juros compostos, a saber:

M = C * (1 + i)^t

Onde:
- M é o montante (valor final)
- C é o capital investido
- i é a taxa considerada (diária, mensal ou anual)
- t o intervalo de tempo em que se deseja conhecer o rendimento

## Arquivos
O projeto é composto pelos seguintes arquivos:
1. interface.html, que contém a estrutura (página html) de interface com o usuário;
2. style.css, que compreende a estilização (css) da interface;
3. calc.js, o arquivo escrito em linguagem de programação JavaScript que contém o código para realizar os cálculos desejados;
4. tests.js, que contém os códigos de teste a serem realizados sobre as funções do arquivo calc.js pelo interpretador/ambiente bun.

### interface.html
É o arquivo base do projeto. Por meio dele, é estruturada a página web que realizará os cálculos.

### style.css
É a estilização da página. Este é o arquivo que possui a tarefa de tornar a aplicação atraente e agradável ao usuário.

### calc.js
Este é o arquivo central no quesito propósito do sistema. É o responsável por receber os dados passados pelo usuário na interface (html), realizar os cálculos e devolver a resposta à página. 

Note que sua última linha está sendo ignorada por comentário, pois a versão suportada pelo navegador não "compreende" o comando "export", gerando erro na aplicação e impedindo o correto funcionamento do sistema. Porém, a linha é necessária para a execução dos testes automatizados, razão pela qual não foi apagada no código. 

Deste modo, na realização dos testes automatizados, basta descomentá-la e usar o interpretador bun para testar as funções do código, lembrando que a aplicação como um todo, isto é, do ponto de vista do usuário, pode não funcionar corretamente enquanto a linha estiver sendo executada. Por outro lado, caso se queira testar a interface, ou seja, do ponto de vista do usuário, comente a linha e execute a aplicação.

Em suma, caso sejam desejados testes:
- Automatizados, descomente a última linha e execute os testes do arquivo tests.js por meio do interpretador bun.
- De interface, comente a última linha e execute a aplicação.

### tests.js
Este arquivo contém os testes automatizados que são executados pelo interpretador _bun_. Para executá-los, descomente a última linha do arquivo _calc.js_ e aplique o seguinte comando no terminal aberto na pasta do projeto:

bun test ./tests.js

Então, o interpretador testará as funções do sistema no terminal.

# Para o(a) usuário(a)

# Para ambos

## Compreendendo o cálculo
