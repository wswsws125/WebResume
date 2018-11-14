function Monster(name, health, power, src) {
    this.name = name;
    this.health = health;
    this.power = power;
    this.src = src;
}


var monsterNames=new Array("Slime","Bat","Ghost","Goblin","Mermaid","Stone Man","Dragon");
var monsterHealths=new Array(30,50,110,180,230,300,500);
var monsterPowers=new Array(10,20,30,40,60,80,100);
var monsterSources=new Array( "images/monsters/1.png", "images/monsters/2.png",
"images/monsters/3.png", "images/monsters/4.png",
 "images/monsters/5.png", "images/monsters/6.png",
 "images/monsters/7.png");


function randomNumber(){
  var n1 = Math.round(Math.random()*100); //获取100之内的任意一个整数；
  var n2 = Math.ceil(Math.random()*5);  //取0-9个数里面的值；

  if(n1 < 98){
             return n2;
          }else{
              return 6;
          }
}

console.log(monsterNames[1]);


function displayMonster(number){
  let card=document.getElementById('card');
  card.src=monsterSources[number];
  document.getElementById('mon-health').innerText=monsterHealths[number];
  document.getElementById('mon-name').innerText=monsterNames[number];
}
