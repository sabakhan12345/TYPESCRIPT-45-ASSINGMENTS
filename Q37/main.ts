//  =================  45 QUESTIONS ASSINGMENT   ===================

// ==========   Q37   ========= 

function make_Shirt(size: string = 'large' ,text: string = ' "i love typescript." ' ){
    console.log(` you order a ${size} t-shirt with the message ${text} printed on it. `);
}

make_Shirt(); // default large and message 
make_Shirt('medium');  // default message, medium size
//custom message 
make_Shirt('any ', ' "Dive into CODING." ');

