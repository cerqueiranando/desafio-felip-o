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