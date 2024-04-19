//  =================  45 QUESTIONS ASSINGMENT   ===================
// ==========   Q30   ========= 
let user_Nmae = ["admin", " saba ", " aysha", " tooba", " arshi"];
// loop
for (let user of user_Nmae)
    // conditional statement:
    if (user === "admin") {
        console.log("hello admin, would you like to see a status report!");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
