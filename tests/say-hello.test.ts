import { sayHello } from "../src/say-hello";

describe("sayHello", (): void => {
  it("should return hello axell", (): void => {
    expect(sayHello("Axell")).toBe("Hello Axell");
  });
});
