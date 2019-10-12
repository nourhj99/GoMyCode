const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge= (pet) => {
    return new Date().getFullYear() - pet.bornOn;
  }
  
const petsWithAge = pets.map((pet) =>{pet.age = getAge(pet); return pet;});
console.log(petsWithAge);

const dogs = pets.filter((pets)=>{return pets.type == "dog"})
console.log(dogs);

const jasper = pets.find((pets)=> {return pets.name == "Jasper"})
console.log(`Jasper is ${jasper.age} years old`);
 