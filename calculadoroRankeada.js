winner (175, 70);

function winner(win, lose){

    const getValue = win - lose;
    let rank = getValue;
    let level;
    
    if( rank < 10){
        level = "FERRO";
    }else if (rank >= 11 && rank <= 20){
        level = "BROZE";
    }else if (rank >= 21 && rank <= 50){
        level = "PRATA";
    }else if (rank >= 51 && rank<= 80){
        level = "OURO";
    }else if (rank >= 81 && rank <= 90){
        level = "DIAMANTE";
    }else if (rank >= 91 && rank <= 100){
        level = "LENDÁRIO";
    }else {
        level= "IMORTAL";
    }

    console.log("O herói tem saldo de " + getValue +" e está no nivel de " + level);
}