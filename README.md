# Aplicação utilizando Java e Angular
##### Front-End(Pasta Laboratorio)

##### Back-End(Pasta starter)

## Tecnologias, Linguagens & Frameworks

 ### Front-End:

- Angular
- Bootstrap
- HTML
- CSS
- TypeScript

 ### Back-End:
 
- Java
- Spring
- Maven

## Ferramentas

- Para executar o Front-End utilizei o Visual Studio Code
- Para executar o Back-End utilizei o IntelliJ IDEA Community Edition
- API Rest criei através do Spring initializr com a dependência "Spring Web"

## Proposta

Um laboratório deseja automatizar o controle de coleta de exames de seus pacientes. Faça uma aplicação web utilizando Java e Angular que realize o cadastro de Pacientes, Procedimentos e Exames. Não é necessário persistir em banco de dados ou arquivo.

Paciente 

a.   Nome 

b.   CPF 

c.   E-mail 


Procedimento

a.   Código 

b.   Nome 

c.   Prazo máximo para análise em dias


Exame

b.   Paciente

c.   Procedimentos

d.   Data da coleta

e.   Data da entrega do resultado


 A data de entrega do resultado deve ser o próximo dia da semana (segunda a sexta) do procedimento de maior prazo.
 
 Não há necessidade de criação de filtros ou relatórios, o atendente deverá conseguir visualizar todos os exames cadastrados.

 ## Execução
 
Front-End
 
 Abra a pasta "Laboratorio" através do Visual Studio Code, em seguida abra o terminal do próprio Visual Code e digite "npm run ng serve"(precisa ter o Angular instalado) alguns casos é somente "ng serve", depois disso abra o navegador e coloque  "http://localhost:4200/".
 
Back-End
 
 Abra a pasta "starter" através do IntelliJ IDEA Community Edition depois clique na classe "StarterApplication" clique com o botão direito e seleciona a opção "Run", dessa forma a API já vai estar sendo executada através do Spring, para testar coloque no navegador "http://localhost:8080/lab/paciente".
 
