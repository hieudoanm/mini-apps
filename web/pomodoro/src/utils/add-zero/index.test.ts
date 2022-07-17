import addZero from '.';

describe('addZero', () => {
  it('should add 0', () => {
    expect(addZero(0)).toEqual('00');
  });

  it('should not add 0', () => {
    expect(addZero(10)).toEqual('10');
  });
});
