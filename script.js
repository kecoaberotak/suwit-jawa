var tanya = true;

do {
  // menangkap pilihan user
  var player = prompt('Gajah / Semut / Orang?').toLocaleLowerCase();

  // generate bilangan random
  var com = Math.random() * 10;
  console.log(com);

  if (com <= 3){
    com = 'gajah';
  } else if (com <= 6){
    com = 'semut';
  } else com = 'orang';

  console.log(com);

  // rules
  switch (player) {
    case 'gajah':
      if(com == 'gajah'){
        alert('SERI! \nPlayer : ' + player + '\nComputer : ' + com);
      } else if (com == 'semut'){
        alert('KALAH! \nPlayer : ' + player + '\nComputer : ' + com);
      } else alert('MENANG! \nPlayer : ' + player + '\nComputer : ' + com);
    break;

    case 'semut' :
      if(com == 'gajah'){
        alert('MENANG! \nPlayer : ' + player + '\nComputer : ' + com);
      } else if (com == 'semut'){
        alert('SERI! \nPlayer : ' + player + '\nComputer : ' + com);
      } else alert('KALAH! \nPlayer : ' + player + '\nComputer : ' + com);
    break;

    case 'orang' :
      if(com == 'gajah'){
        alert('KALAH! \nPlayer : ' + player + '\nComputer : ' + com);
      } else if (com == 'semut'){
        alert('MENANG! \nPlayer : ' + player + '\nComputer : ' + com);
      } else alert('SERI! \nPlayer : ' + player + '\nComputer : ' + com);
    break;

    default :
      alert('HANYA BOLEH MEMILIH GAJAH / SEMUT / ORANG !!!!');
      break;
  }

  tanya = confirm('Mau bermain lagi?')
} while (tanya == true);