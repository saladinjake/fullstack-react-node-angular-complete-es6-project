import bcrypt from 'bcrypt';
export const dummydb = [
  {
    id:1,
    title:'Dummy Title Data',
    description: 'This is when sweetness meets awesomeness'
  },

  {
    id:2,
    title:'Adam and Eve',
    description: 'Eve was the first naked woman, Adam saw all her nakedness, The devil was the first to tell Eve'
  }
];

export const user = [
  {
    username:"Adam",
    email:"adam@gmail.com",
    password: bcrypt.hashSync("apple",10)
  },
  {
    username:"Eve",
    email:"eve@gmail.com",
    password: bcrypt.hashSync("apple",10)
  }
]
