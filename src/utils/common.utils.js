import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fs from 'fs';
const Utils = {

  calculateAge(dateOfBirthAsStr) {
    let dateOfBirth = new Date(dateOfBirthAsStr);
    let ageDiffMs = Date.now() - dateOfBirth.getTime();
    let ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },

  readHTMLFile(path, callback) {
      fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
          if (err) {
              throw err;
              callback(err);
          }
          else {
              callback(null, html);
          }
      });
  },


  validatePassword(password, userPassword) {
    return bcrypt.compareSync(password, userPassword);
  },

  /**
   * @description - remove null key from ab object
   * @param {object}
   * @returns {object}
   */
  stripNull(obj) {
    let cleanObj = {};

    Object.keys(obj).forEach((val) => {
      const newVal = obj[val];
      cleanObj = newVal ? { ...cleanObj, [val]: newVal } : cleanObj;
    });

    return cleanObj;
  },
};

export default Utils;
