let mob = {brand:"Samsung",color:"Black"}

console.log(mob);

//Add new key value
mob.price=35000
console.log(mob);

//update
mob.price=45000
console.log(mob);

console.log(mob.color);
console.log(mob["brand"]);

delete mob.brand;
console.log(mob);

delete mob["color"];
console.log(mob);