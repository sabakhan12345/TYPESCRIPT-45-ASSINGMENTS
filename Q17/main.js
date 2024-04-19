//  =================  45 QUESTIONS ASSINGMENT   ===================
// ==========   Q17   =========
var guest_List = ["miss hina", " sir ameen", "murtasim", "ali", "saad"];
console.log("Unfortunately, we can only invite two people for dinner.");
while (guest_List.length > 2) {
    var removedGuest = guest_List.pop();
    console.log("Sorry, " + removedGuest + ", We can't invite you to dinner.");
}
console.log("updated guest list.");
for (var i = 0; i < guest_List.length; i++) {
    console.log("Dear " + guest_List[i] + ",");
    console.log("You are still invited to dinner at EID OCASSIONAL Party!");
}
guest_List.splice(0, guest_List.length);
console.log("Updated guest list:", guest_List);
