const fs = require('fs').promises;

/**
 * Returns the contents of 64M.bin.
 *
 * @returns {Promise<Buffer>}
 */
module.exports = async function () {
  const data = await fs.readFile('64M.bin', 'binary');
  return Buffer.from(data);
};
