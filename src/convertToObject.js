'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};

  for (const styleLine of sourceString.split(';')) {
    if (styleLine.trim().length != 0) {
      const [key, value] = styleLine.split(':');

      styleObj[key.trim()] = value.trim();
    }
  }

  console.log(styleObj == { position: 'absolute' });
  console.log(styleObj);
  console.log({ position: 'absolute' });

  return styleObj;
}

module.exports = convertToObject;
