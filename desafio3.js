const notas = [10,6,8,5.5,10]

console.log(notas) // todo o Array

notas.pop();

console.log(notas) // Array sem o ultimo numero

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A media é ${media}.`)

// O método pop() remove o ultimo elemento do seu Array