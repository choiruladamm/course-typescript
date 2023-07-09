describe('Tipe Data Array', () => {
  it('should must declare', () => {
    
    const names:string[] = ["Choirul", "Adamm", "Axell"]
    const values:number[] = [1,2,3]

    console.info(names);
    console.info(values);

  });

  it('should support readonly array', () => {
    
    const hobbies:ReadonlyArray<string> = ['Coding', "Baca Webtoon"]
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[0] = "Belajar"

  });
  
  it('should support tupple', () => {
    
    const person: readonly [string, string, number] = ["Coding", "Workout", 99]
    console.info(person);

  });
});