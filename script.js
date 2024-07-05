function calcular() {
    const peso = parseFloat(document.getElementById("peso").value);
    const local = document.getElementById("local").value;

    let dose;
    let tubetes;

    if (local === "Lidocaína 2%") {
        dose = (4.4 * peso);
        tubetes =  Math.round((dose)/((2 * 1.8)/100)/1000);
        if (dose > 301) {
            dose = 300;
        } else {
            dose = dose;
        }

    } else if (local === "Lidocaína 3%") {
        dose = (4.4 * peso);
        tubetes = Math.round((dose)/((3 * 1.8)/100)/1000);
          if (dose > 301) {
            dose = 300;
        } else {
            dose = dose;
        }

    } else if (local === "Mepevacaína 2%") {
        dose = (4.4 * peso);
        tubetes = Math.round((dose)/((2 * 1.8)/100)/1000);
          if (dose > 301) {
            dose = 300;
        } else {
            dose = dose;
        }

    } else if (local === "Mepevacaína 3%") {
        dose = (4.4 * peso);
        tubetes = Math.round((dose)/((3 * 1.8)/100)/1000);
          if (dose > 301) {
            dose = 300;
        } else {
            dose = dose;
        }

    } else if (local === "Articaína") {
        dose = (7 * peso);
        tubetes = Math.round((dose)/((1 * 1.8)/100)/1000);
          if (dose > 501) {
            dose = 500;
        } else {
            dose = dose;
        }

    } else if (local === "Prilocaína 3%") {
        dose = (6 * peso);
        tubetes = Math.round((dose)/((3 * 1.8)/100)/1000);
          if (dose > 401) {
            dose = 400;
        } else {
            dose = dose;
        }

    } else if (local === "Bupivacaína 0,5%") {
        dose = (1.3 * peso);
        tubetes = Math.round((dose)/((0.5 * 1.8)/100)/1000);
          if (dose > 91) {
            dose = 90;
        } else {
            dose = dose;
        }
        
    } else {
        dose = "NAO ENCONTRADA";
    }

document.getElementById("resultado").innerHTML = `A dose recomendada de ${local} é de ${dose} mg ou ${tubetes} tubetes.`;

}