//  =================  45 QUESTIONS ASSINGMENT   ===================

// ==========   Q16   =========

let guest_List: string [] = ["miss hina", " sir ameen", "murtasim", "ali","saad"];
console.log("Great news! we found a bigger dinner table :")
// add one new guest beginning of the array
guest_List.unshift("sir zia");

//add one new in middle of the array
guest_List.splice(guest_List.length/2,  0, "miss atya");

//add one new in last of the array
guest_List.push(" sir daniyal");

console.log(" New set of invitation messages ");


for(let i = 0; i < guest_List.length; i++){
   console.log("Dear " + guest_List[i]+ ",");
   console.log("You are cordinally invited at my EID DINNER party !");
   console.log("Looking forward to seeing you there.  THANK YOU! ")
}