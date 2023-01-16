// A test function using jest that tests the function in index.js and expects the result to be a promise that resolves to a Buffer

const load64M = require('./index.js');

describe('load64M', () => {
  it('resolves to a Buffer', async () => {
    const result = await load64M();
    expect(result).toBeInstanceOf(Buffer);
  });
});
