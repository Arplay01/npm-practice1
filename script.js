personOne = {
    name: 'Arek',
    age: 25,
    pet: true,
    myAgePetAdoption: 23  
};

function dogDate(petAge) {
return petAge - personOne.myAgePetAdoption;
}

let petAge = dogDate(personOne.age);

console.log(`${personOne.name} znalazłeś mnie mój przyjacielu. Czy masz psa?`);

if (personOne.pet == true) {
    console.log(`Siema! Tak, mam psa. Ma na imię nel i mam ją od ${petAge} lat`);
}