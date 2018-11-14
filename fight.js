let player={
  health:100,
  power:20

}

let monster={
  health:100,
  power:20
}

let monsterNumber=0;

function change(){
  monsterNumber=randomNumber();
  displayMonster(monsterNumber);
  monster.health=monsterHealths[monsterNumber];
  monster.power=monsterPowers[monsterNumber];
}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function attack(){
  let attackButton=document.getElementById('attack-button');
  let restartButton=document.getElementById('restart-button');
  let gameMessage=document.getElementById('game-message');

  let playerAttack=determineAttack(player.power);
  //console.log(playerAttack);
  monster.health-=playerAttack;
  printToScreen();

  if(isGameOver(monster.health)){
    endGame("Player Win!");

    return;
  }

  attackButton.disabled=true;
  gameMessage.innerText="Monster is about to strike!";

  setTimeout(()=>{
    let monsterAttack=determineAttack(monster.power);
    player.health-=monsterAttack;
      printToScreen();

      if(isGameOver(player.health)){
      endGame("Monster Win!")
        return;
      }

      attackButton.disabled=false;
  },500)
}


const endGame=(message)=>{
  document.getElementById('game-message').innerText=message;
  document.getElementById('attack-button').hidden=true;
  document.getElementById('restart-button').hidden=false;
}

const determineAttack=(power)=>{
  return Math.floor(Math.random()*power);
}

const restart =()=>{
  let attackButton=document.getElementById('attack-button');
  player.health=100;
  monster.health=100;
  document.getElementById('game-message').innerText="";
  attackButton.disabled=false;
  attackButton.hidden=false;
  document.getElementById('restart-button').hidden=true;
  printToScreen();
}


const printToScreen=()=>{
  document.getElementById('mon-health').innerText=monster.health;

  document.getElementById('player-health').innerText=player.health;
}

const isGameOver=(health)=>{
  return health<=0;
}


printToScreen();
