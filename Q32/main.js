//  =================  45 QUESTIONS ASSINGMENT   ===================
// ==========   Q32   ========= 
let current_Users = ["Admin", " Saba ", " Ayesha", " tooba", " arshi"];
let new_Users = ["admin", " saba ", " isbah", " dawood ", " mehwish"];
// convert all user names to lower case for case insentive comparison.
let current_users_lower = current_Users.map(user => user.toLowerCase());
for (let new_User of new_Users) {
    // convert to lower case comparison.
    let new_User_Lower = new_User.toLowerCase();
    if (current_users_lower.push(new_User_Lower)) {
        console.log(`Sorry ${new_User}, that name is taken`);
    }
    else {
        console.log(`Yes ${new_User}, is  avaliable `);
    }
}
