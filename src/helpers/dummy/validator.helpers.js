import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const ENCRYPTION_KEY = "KISS-OF-DEATH-IS-THE-SECRET-KEY-TO-LIFE-BEYOND"


export const generateToken = (data) => {
   return jwt.sign(data, ENCRYPTION_KEY ,{
     expiresIn:"48h"
   })
};


export const hashPassword = (plain) =>{
  return bcrypt.hashSync(plain,10)
}

export const checkMatchPassword = (hashedPassword,password) =>{
  return bcrypt.compareSync(hashedPassword,password)
}
