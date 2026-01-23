function calcIMC(p, a){
    let imc;
    let = p / (a * a);
    return imc.toFixed(1)
}
let p, a;
p = parseFloat(prompt('Digite seu peso: '))
a = parseFloat(prompt('Digite sua altura: '))
alert('Seu IMC é: ' + calcIMC(p,a))