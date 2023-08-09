
// Questão 1//

let promoção = true;

// Questão2,3 e 4// 

promoção = false;
if (promoção){
    console.log ('Hora de comprar!')
} else {
    console.log('Hora de esperar uma promoção.')
};

// Questão 5 e 6//

let nivelFome = 7
if (nivelFome > 7){
    console.log('Hora de comer!')
} else{
    console.log('Podemos comer mais tarde!')
};

// Questão 7 //

let humor = "sonolento";
let nivelcansaço = 6 ;

if (humor === 'sonolento' && nivelCansaco > 8) {
    console.log('Hora de dormir');
  } else {
    console.log('Ainda não é hora de dormir');
  }

// Questão 8, 9 e 10 //

let estação = 'inverno'

if (estacao === 'inverno') {
    console.log('É inverno! Tudo está coberto de neve.');
  } else if (estacao === 'outono') {
    console.log('É outono! As folhas estão caindo!');
  } else if (estacao === 'verão') {
    console.log('É ensolarado e quente porque é verão!');
  }

  // Questão 11 e 12 //

  let posicaoFinalAtleta = 'primeiro lugar';

switch (posicaoFinalAtleta) {
  case 'primeiro lugar':
    console.log('Você ganha a medalha de ouro!');
    break;
  case 'segundo lugar':
    console.log('Você ganha a medalha de prata!');
    break;
  case 'terceiro lugar':
    console.log('Você ganha a medalha de bronze!');
    break;
  default:
    console.log('Nenhuma medalha concedida.');
    break;
}

