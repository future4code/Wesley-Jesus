//Resolução dos exercícios de sexta 07 de fevereiro

/*Exercício 1:
O código deste exercício converte um determinado valor em Dólar para Reais. Há uma função chamada conversorDeMoeda 
com parâmetro valorEmDolar que faz o seguinte: abre um prompt para o usuário colocar o valor da cotação do dia,
retornando o valor do produto da cotação pelo valor em dólar. Logo após, há uma constante declarada em que chama a
função conversorDeMoeda e consta o valor de U$ 100. Será impresso no console o produto de 100 * a cotação digitada
pelo usuário. 

Por exemplo, a cotação do Dólar no momento está a R$ 4,31. A constante meuDinheiro tem como valor a função
conversaoDeMoeda e o valor a ser convertido de US$ 100. A função pedirá ao usuário para que ele coloque o 
valor da cotação, no caso, R$ 4,31. A função realizará o produto dos valores e retornará o resultado. Após
isso, o console exibirá o valor convertido, que é de R$ 431,00.

Exercício 2:
O código deste exercício mostra o montante arrecadado com investimentos, conforme a carteira (tipo de investimento
rezliado). Temos uma função, a investeDinheiro, que realizará todos os cálculos, conforme os parâmetros de cada situação. 
Declarada a função investeDinheiro, ela terá como parâmetros as variáveis tipoDeInvestimento e o valor a ser contabilizado
para saber o montante. Declarada o variável valorAposInvestimento, que é a variável que receberá o produto do valor
investido pela porcentagem de rendimento de determinado tipo de investimento.
A função testará condicionais envolvidos em uma swtich case com vários tiposDeInvestimento, as quais:
- para o caso tiposDeInvestimento "Poupança", o valorAposInvestimento será o produto do valor por 1.03. Sendo essa situação
a do usuário, a função não verificará os outros casos (ação BREAK).
- para o caso tiposDeInvestimento "Renda Fixa", o valorAposInvestimento será o produto do valor por 1.05. Sendo essa situação
a do usuário, a função não verificará os outros casos (ação BREAK).
- para o caso tiposDeInvestimento "CDB", o valorAposInvestimento será o produto do valor por 1.06. Sendo essa situação
a do usuário, a função não verificará os outros casos (ação BREAK).
- para o caso tiposDeInvestimento "AÇÕES", o valorAposInvestimento será o produto do valor por 1.1. Sendo essa situação
a do usuário, a função não verificará os outros casos (ação BREAK).
- Se o tiposDeInvestimento informado não for nenhum dos mencionados, o código exibirá um alerta dizendo para o usuário que o
tipo de investimento informado está incorreto.
Finalizados os testes em switch, a função retornará o resultado do produto em valorAposInvestimento, mas não o exibirá, encerrando
a função aqui.

Logo após, são declaradas duas constantes que receberão a função acima com os parâmetros tipo de investimento e o valor que foi
investido. No caso:
- constante novoMontante: será chamada a função investeDinheiro já com os parâmetros definidos: tipoDeInvestimento = AÇÕES, valor
em 150.
- constante segundoMontante: será chamada a mesma função com os parâmetros respectivos: Tesouro Direto, valor em 200.

O console exibirá como resultado da primeira constante o produto de 150 por 1.1, que é 165, pois:
150 x 1.1 = 150 x 1 = 150. 150 x 0.1 = 15, logo 165. 
Como resultado da segunda constante, será exibido um alerta, dizendo ao usuário que o tipo de investimento informado está incorreto.

Exercício 3:

