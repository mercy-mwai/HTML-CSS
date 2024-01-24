let  xp = '0';
let health= '100';
let gold='50';
let currentWeapon='0';
let fighting;
let monsterHealth;
let inventory = ['stick'];
const button1 = document.querySelector("#button1");
const button2= document.querySelector("#button2");
const button3=document.querySelector("#button3");
const text=document.querySelector("#text");
const xpText=document.querySelector("#xpText");
const healthText=document.querySelector("#healthText");
const goldText=document.querySelector("#goldText");
const monsterStats=document.querySelector("#monsterStats");
const monsterHealthText=document.querySelector("#monsterHealth");
function goTown(){
    update(locations[0]);

}
function goStore(){
    update(locations[1]);
}
   
function goCave(){
    update(locations[2]);
}
function fightDragon(){
    console.log("Fighting dragon");
}
//initialize buttons
button1.onclick= goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;
function buyHealth(){
if ("gold >=10"){
    gold-=10;
    health+=10
    goldText.innerText = gold;
    healthText.innerText = health;}
    else{
        text.innerText='You do not have enough gold to buy health';
    }

}

function buyWeapon(){
    if(gold>=30){
        gold -=30;
        currentWeapon++;
    }
    goldText.innerText='gold';
    let newWeapon=weapons[currentWeapon].name;
    text.innerText='You now have a new weapon';

}
function update(location){
    button1.innerText  = location["button text"][0];
    button2.innerText=location["button text"][1];
    button3.innerText=location["button text"][2];
    button1.onclick =location["button function"][0];
    button2.onclick=location["button function"][1];
    button3.onclck=location["button location"][2];
    text.innerText=location.text;

}
const weapons=[
    {
        name:'stick', power:'5'},
    {
        name:'daggger',power:'30',},
    {
        name:'claw hammer',power:'50'},
    {
        name:'sword',power:'100'},
];
const locations=[
    {
name: "town square",
"button text":["Go to store","Go to town","Fight dragon"],
"button functions":[goStore, goTown,fightDragon],
    text:"You are in the town square. You see a sign that says \"Store\"."

},
{
    name: "store",
    "button text":["Buy health(10 gold)","Buy weapon(30 gold)", "Go to town square"],
    "button functions":[buyHealth,buyWeapon,goTown],
    text:"You enter the store"
},
{
    name:"cave",
    "button text":["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions":[fightSlime, fightBeast,goTown],
    text:"You enter the cave .You see monsters"

}
];
function fightSlime (){

}
function fightBeast (){

}