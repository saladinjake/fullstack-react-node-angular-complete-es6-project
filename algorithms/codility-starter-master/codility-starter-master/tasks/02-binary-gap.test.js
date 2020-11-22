const solution = require('./02-binary-gap');

xdescribe('BinaryGap', () => {
  it('N=0', () => {
    expect(solution(0)).toEqual(0);
  });

  it('N=9', () => {
    expect(solution(9)).toEqual(2);
  });

  it('N=529', () => {
    expect(solution(529)).toEqual(4);
  });

  it('N=20', () => {
    expect(solution(20)).toEqual(1);
  });

  it('N=15', () => {
    expect(solution(15)).toEqual(0);
  });

  it('N=32', () => {
    expect(solution(32)).toEqual(0);
  });
});
