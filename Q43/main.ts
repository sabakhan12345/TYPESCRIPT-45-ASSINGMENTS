//  =================  45 QUESTIONS ASSINGMENT   ===================

// ==========   Q43   =========


function make_great(magicians: string[]): string[] {
    let great_Magicians :string[] = []
    for (let i = 0; i < magicians.length; i++){
      great_Magicians.push(magicians[i]  + ' The Great ')
    
    } 
    return   great_Magicians;    
  }
let magicians_Names:string[] = ["David"," Penn jillette", " Teller ", "Harry potter"];

 let great_Magicians2: string[] = make_great(magicians_Names);

console.log(magicians_Names);
console.log(great_Magicians2);
