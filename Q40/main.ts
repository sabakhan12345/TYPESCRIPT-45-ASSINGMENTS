//  =================  45 QUESTIONS ASSINGMENT   ===================

// ==========   Q40   ========= 
function make_Album(artist: string, title: string,tracks?:number )
{ artist:String; title:String; tracks:Number;
 
    
    
      return`${artist} ${title}  ${tracks}`
     ;
}
 
 let album1 = make_Album('Tooba ',  ' The first album ',10);
 console.log(album1);
 let album2= make_Album( 'Saba ', ' The second album ', 20);
 console.log(album2);
 let album3 = make_Album( 'Ali ', ' The Third album ',8); 
 console.log(album3);
