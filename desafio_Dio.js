/*Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

let nomeHero = "BABA YAGA";
let nivelXp = 10001;

if(nivelXp <= 1000){
  console.log("O Herói de nome " + nomeHero + " está no nível de FERRO!");

}else if(nivelXp > 1001 && nivelXp <=2000){
  console.log("O Herói de nome " + nomeHero + " está no nível de BRONZE!");

}else if(nivelXp >= 2001 && nivelXp <=5000){
  console.log("O Herói de nome " + nomeHero + " está no nível de PRATA!");
  
}else if(nivelXp >= 5001 && nivelXp <=7000){
  console.log("O Herói de nome " + nomeHero + " está no nível de OURO!");

}else if(nivelXp >= 7001 && nivelXp <=8000){
  console.log("O Herói de nome " + nomeHero + " está no nível de PLATINA!");

}else if(nivelXp >= 8001 && nivelXp <=9000){
  console.log("O Herói de nome " + nomeHero + " está no nível de ASCENDENTE!");

}else if(nivelXp >= 9001 && nivelXp <=10000){
  console.log("O Herói de nome " + nomeHero + " está no nível de IMORTAL!");

}else{
console.log("O Herói de nome " + nomeHero + " está no nível de IMORTAL!")

}