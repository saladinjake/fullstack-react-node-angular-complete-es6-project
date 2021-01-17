import bcrypt from 'bcrypt';
//import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export class TokenGenerator {
  /**
   * @description - generate jwt data
   * @param {object} data
   * @returns {object} signed data from jwt
   */

 static generateToken(data) {
   const token = jwt.sign(data, process.env.SECRET, {
     expiresIn: '48h',
   });
   return token;
 }




 /**
  * @description - encypt password
  * @param {object} password
  * @returns {object} hashpassword
  */

 static hashPassword(password) {
   const hashedPassword = bcrypt.hashSync(password, 10);
   return hashedPassword;
 }

 /**
  * @description - validate password by comparing password with hash password
  * @param {string} password
  * @param {string} hashpassword
  * @returns {boolean} boolean to show if password match or not
  */

 static checkIfPasswordMatch(hashedPassword, password) {
   // console.log(bcrypt.compareSync(hashedPassword, password))
   return bcrypt.compareSync(hashedPassword, password);
 }
}
