//imc = peso/(altura*altura)

let peso;
let alura;
let imc;

let tipoImc;

peso = prompt("Peso: ");
altura = prompt("Altura: ");

imc = peso/(altura*altura);

if(imc < 18.5 && imc >= 0) {
    tipoImc = "MAGRESA";

} else if(imc >= 18.5 && imc <= 24.9) {
    tipoImc = "NORMAL";
} else if(imc >= 25 && imc <= 29.9){
    tipoImc = "SOBREPESO";
} else if(imc >= 30 && imc <= 39.9){
    tipoImc = "OBESIDADE";
} else if(imc >= 40){
    tipoImc = "OBESIDADE GRAVE";
} else {
    tipoImc = "ERRO AO CALCULAR O IMC"
}


alert(`Seu IMC é de ${imc} kg/m2. O seu tipo de IMC é ${tipoImc}`);


