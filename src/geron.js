"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type AttackType = "Physical" | "Magical";
// let dmg = 0
// function calculateDamage(baseDmg: number, targetArmor: number,atkType:AttackType):number {
//     if(atkType === "Magical"){
//         return(baseDmg)
//     }
//     else if(atkType === "Physical"){
//         if(baseDmg > 0){
//             return(baseDmg - targetArmor)
//         }
//         else{
//             return(baseDmg)
//         }
//     }
//     else{
//         return(baseDmg)
//     }
// } 
// console.log(calculateDamage(42,51, "Physical"))
// console.log(calculateDamage(42,51, "Magical"))
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["Processing"] = 0] = "Processing";
    orderStatus[orderStatus["shipped"] = 1] = "shipped";
    orderStatus[orderStatus["delivered"] = 2] = "delivered";
    orderStatus[orderStatus["cancelled"] = 3] = "cancelled";
})(orderStatus || (orderStatus = {}));
function getClientNot(status) {
    switch (orderStatus) {
        case orderStatus:
            Processing: return ("Sobiraut");
            break;
        case orderStatus:
            shipped: return ("v dostavke");
            break;
        case orderStatus:
            delivered: return ("Dostavleno");
            break;
        case orderStatus:
            cancelled: return ("Otmenen");
            break;
    }
}
console.log(getClientNot(stasus, Processing));
