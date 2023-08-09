// 1, 2 e 3//
let raceNumber = Math.floor(Math.random() * 1000);
let isRegistro = true;
let idCorredor = 18;

// 4 // 
if (idCorredor > 18 && isRegistro) {
  raceNumber += 1000;
}

// 5 //
if (idCorredor > 18 && isRegistro) {
  console.log(`Sua corrida começa às 9h30. Seu número de corrida é ${raceNumber}.`);
}
// 6 //
else if (idCorredor > 18 && !isRegistro) {
  console.log(`Sua corrida começa às 11h00. Seu número de corrida é ${raceNumber}.`);
}
// 7 // 
else if (idCorredor < 18) {
  console.log(`Sua corrida começa às 12h30. Seu número de corrida é ${raceNumber}.`);
}
// 8 // 
else {
  console.log("Por favor, verifique a mesa de registro.");
}