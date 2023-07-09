describe('Babel Typescript', () => {
  it('should must declare', () => {
    
    let name: string = "Choirul Adamm";
    let balance: number = 10000;
    let isVip: boolean = false;

    console.info(name);
    console.info(balance);
    console.info(isVip);

    // name = 1 // error
    // balance = 'Choirul Adam' // error
    // isVip = "900"

  });
});