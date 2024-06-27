import StackService from "../service/Stack";


describe("Stack", () => {
  it('should return 0 when peek empty stack', () => {
    expect(StackService.peek()).toEqual(undefined);
  })

  it('should return 0 when pop empty stack', () => {
    expect(StackService.pop()).toEqual(undefined);
  })

  it('should return 1 when push 1', () => {
    StackService.push(1);
    expect(StackService.peek()).toEqual(1);
  })

  it('should return 2 when push 2', () => {
    StackService.push(2);
    expect(StackService.peek()).toEqual(2);
  })

  it('should return 2 when pop 2', () => {
    StackService.pop();
    expect(StackService.peek()).toEqual(1);
  })
  
})