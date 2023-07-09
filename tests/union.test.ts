describe('Union Type', () => {
  
  it('should must declared', () => {
    let sample: number | string | boolean = "Axel"
    sample = 100
    sample = true

    console.info(sample);
  });

  it('pengecekan using typof', () => {
    const process = (value: number | string | boolean) => {
      if (typeof value === "string") {
        return value.toUpperCase()
      } else if (typeof value === "number") {
        return value + 2
      } else {
        return !value
      }
    }
    
    expect(process(100)).toBe(102)
    expect(process("Axell")).toBe("AXELL")
    expect(process(true)).toBe(false)
  });

});