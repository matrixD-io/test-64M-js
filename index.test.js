const load64M = require('./index.js');

describe('load64M', () => {
  it('resolves to a Buffer', async () => {
    const result = await load64M();
    expect(result).toBeInstanceOf(Buffer);
  });
});
