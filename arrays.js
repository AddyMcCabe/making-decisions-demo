/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let jonattack = 35;
let jamieattack = 25;

if(jonattack > jamieattack){console.log ('john has the better attack');}
else if(johnattack < jamieattack){console.log ('jamie has the better attack');}
else if(jonattack === jamieattack){console.log ('jon and jamie have the same attack');}

let jonhealth = 100;

if(jonhealth <= 0){console.log ('jon has been slayn');}
else (jonhealth = jonhealth - jamieattack)
// jonhealth -= jamieattack
console.log(`jons health is down to ${jonhealth}`);