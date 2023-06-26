const hasil = document.querySelector('.info');
const gajah = document.querySelector('.gajah');
const semut = document.querySelector('.semut');
const orang = document.querySelector('.orang');
let com;
let player;



// menangkap pilihan user
gajah.addEventListener('click', function(){
  player = 'gajah';
  computerPilih();
  console.log('computer: ',com);
  rules(player, com);
});

semut.addEventListener('click', function(){
  player = 'semut';
  computerPilih();
  console.log('computer: ',com);
  rules(player, com);
});

orang.addEventListener('click', function(){
  player = 'orang';
  computerPilih();
  console.log('computer: ',com);
  rules(player, com);
});


// generate bilangan random
function computerPilih (){
  com = Math.random() * 10;

  if (com <= 3){
    com = 'gajah';
  } else if (com <= 6){
    com = 'semut';
  } else com = 'orang';
}


// rules
function rules(player, com){
  switch (player) {
    case 'gajah':
      if(com == 'gajah'){
        hasil.innerHTML= '<p>SERI!</p>';
      } else if (com == 'semut'){
        hasil.innerHTML= '<p>KALAH!</p>';
      } else hasil.innerHTML= '<p>MENANG!</p>';
    break;
  
    case 'semut' :
      if(com == 'gajah'){
        hasil.innerHTML= '<p>MENANG!</p>';
      } else if (com == 'semut'){
        hasil.innerHTML= '<p>SERI!</p>';
      } else hasil.innerHTML= '<p>KALAH!</p>';
    break;
  
    case 'orang' :
      if(com == 'gajah'){
        hasil.innerHTML= '<p>KALAH!</p>';
      } else if (com == 'semut'){
        hasil.innerHTML= '<p>MENANG!</p>';
      } else hasil.innerHTML= '<p>SERI!</p>';
    break;
  }
};