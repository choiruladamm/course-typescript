describe('Tipe Data Any', () => {
  
  it('should be any types', () => {
    
    const person: any = {
      id: 1,
      name: "Choirul Adamm",
      age: 30
    }

    person.age = 31

    console.info(person);

  });

});