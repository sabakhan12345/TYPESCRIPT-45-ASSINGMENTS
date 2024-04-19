//  =================  45 QUESTIONS ASSINGMENT   ===================

// ==========   Q38   ========= 
function describe_city(city: string, country: string = 'Pakistan'): void{
    console.log(`${city} is in ${country}`)
  };
  
  describe_city('Karachi'); // default sentence
  describe_city('istanbul', 'turkey');
  describe_city('mumbai', 'india');