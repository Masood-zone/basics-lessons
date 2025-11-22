// My House Object

const house = {
    houseRoofing: 'Flat Roofing',
    houseYearBuilt: '2006',
    housePaint: 'Purple',
    houseNumber:'Hse 4, Pinklips avenue',
    houseName:  '3 bedroom self contain Building',
    housePrice: 57000,

// Adding more properties to the house
   houseLocation: 'Shai Hills',
   houseCondition:'Well Furnished',
   houseStatus: 'For Rent',

 //Creating a Resident array property
 houseResidentsNames: ['MrYeboah','MrMasood','Agyewodin','Agya Attah','Tabita'],

// modiftying one or more properties
   houseLocation: 'Abuakwa',
   houseStatus:   'For Sale',
   houseYearBuilt:'2009',

 //  Adding Method
  getHouseInfo:function () { 
    console.log(`House Name: ${house.houseName},House Number: ${house.houseNumber},
 Name of Residents: ${house.houseResidentsNames.join(", ")}`)
    },
 
  getHouseName: () =>{
 console.log(`we have ${house.houseName} for rent at ${house.houseLocation} but the color is ${house.housePaint} going in for ${house.housePrice}.`)
  },





     
 };
  //Remove one resident
  house.houseResidentsNames.unshift('Mr wood'),                       
 house.getHouseName()

 // Add another resident to the end of the array
 house.houseResidentsNames.push('Mr Kwame Adu'),
 console.log(house);














