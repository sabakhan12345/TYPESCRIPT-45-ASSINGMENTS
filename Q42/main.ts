//  =================  45 QUESTIONS ASSINGMENT   ===================

// ==========   Q42   ========= 

function make_great(magicians: string[]): any{
    for (let i = 0; i < magicians.length; i++){
      magicians[i] = magicians[i]  + ' The Great '
    
    } 
  }
  
  
  let magicians: string[] = [" David"," Penn jillette", " Teller ", " Harry potter"];
  make_great(magicians); // modifies the oiginal array
  console.log(magicians); // show modified name