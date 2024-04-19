//  =================  45 QUESTIONS ASSINGMENT   ===================
// ==========   Q45  ========= 

  function create_Car(manufacture: string, model: string, ...args: [string, any][])
   {
    let car =  { manufacture,model};
    args.forEach(([key,value]) => (car[key] = value));
    return car;
    }
    console.log(create_Car("toyota","camry",["color", "blue"], ["year","2023"]));
    
