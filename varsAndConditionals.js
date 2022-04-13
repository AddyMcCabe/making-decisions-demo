/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonattack = 35;
let jamieattack = 25;

if(jonattack > jamieattack){console.log ('john has the better attack');}
else if(jonattack < jamieattack){console.log ('jamie has the better attack');}
else if(jonattack === jamieattack){console.log ('jon and jamie have the same attack');}

let jonhealth = 100;

if(jonhealth <= 0){console.log ('jon has been slayn');}
else (jonhealth = jonhealth - jamieattack)
// jonhealth -= jamieattack
console.log(`jons health is down to ${jonhealth}`);

if((jonhealth + 50 ) >= 100){jonhealth = 100;}
else {jonhealth += 50;}

console.log(jonhealth);

let coinlandsheads = true;

if(coinlandsheads = true){console.log ('the fight continues');}
else if(coinlandsheads !== true){console.log ('jon may run away');}

// for(let i = 0; i < 5; i++)
// { if(jonhealth > 0) jonhealth -= jamieattack;
//     else {console.log ('jon is dead');}
    
// console.log (`jons health is now ${jonhealth}.`);}

while(jonhealth > 0){ jonhealth -= jamieattack;
console.log (`jon health is now ${jonhealth}.`);}
