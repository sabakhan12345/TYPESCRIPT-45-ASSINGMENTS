//  =================  45 QUESTIONS ASSINGMENT   ===================

// ==========   Q44   ========= 
function make_Sandwich(...items: string[]){
    console.log(' making a sandwich. ');
    for (let i = 0; i < items.length; i++){
        console.log(`- ${items[i]}`)
      }
};

make_Sandwich('capsicum', 'tomato', 'onion');
make_Sandwich('beef', 'cheese');
make_Sandwich('black paper', 'mayo sauce');
console.log("Saba, your sandwich is ready! ");
