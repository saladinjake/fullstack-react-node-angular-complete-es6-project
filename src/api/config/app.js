const path = require('path')
const { DB_LINK_STAGING,DB_LINK_PRODUCTION,DB_LINK_DEVELOPMENT } = process.env;
let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  "DEVELOPMENT": {
    rootPath: rootPath,
    db: DB_LINK_DEVELOPMENT || 'mongodb://localhost:27017/bethlehem-bets-db',
    port: 5000
  },
  "STAGING": {
    rootPath: rootPath,
    db: DB_LINK_STAGING || 'mongodb://localhost:27017/bethlehem-bets-db',
    port: 7000
  },
  "PRODUCTION": {
    rootPath: rootPath,
    port: process.env.PORT,
    db: DB_LINK_PRODUCTION || 'mongodb://localhost:27017/bethlehem-bets-db',
  }
}
