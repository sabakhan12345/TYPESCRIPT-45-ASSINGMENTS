//  =================  45 QUESTIONS ASSINGMENT   ===================
// ==========   Q15   =========
var guest_list = ['ali', 'saad', 'wahid', 'murtasim'];
// remove the list
var not_Guests = guest_list.splice(1, 1)[0];
console.log("".concat(not_Guests, " can't make the dinner."));
// added in the list
guest_list.push("saba khan");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear respected : ", guest_list[i], ", We Are Invinting to Our EID DINNER Party. THANK YOU.");
}
;
