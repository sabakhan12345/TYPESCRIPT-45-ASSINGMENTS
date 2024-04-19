//  =================  45 QUESTIONS ASSINGMENT   ===================
// ==========   Q43   =========
function make_great(magicians) {
    let great_Magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_Magicians.push(magicians[i] + ' The Great ');
    }
    return great_Magicians;
}
let magicians_Names = ["David", " Penn jillette", " Teller ", "Harry potter"];
let great_Magicians2 = make_great(magicians_Names);
console.log(magicians_Names);
console.log(great_Magicians2);
