//  =================  45 QUESTIONS ASSINGMENT   ===================

// ==========   Q15   =========


let guest_list:string[] = ['ali','saad','wahid','murtasim'];

// remove the list
let not_Guests:string = guest_list.splice(1,1)[0];
console.log(`${not_Guests} can't make the dinner.`);

// added in the list
guest_list.push("saba khan");
for(let i=0; i<guest_list.length; i++){
    console.log("Dear respected : " ,guest_list[i]
    , ", We Are Invinting to Our EID DINNER Party. THANK YOU.");
    };

