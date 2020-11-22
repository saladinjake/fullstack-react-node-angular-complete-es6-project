
import  { App } from './api/server';

import axios from 'axios';
import cheerio from 'cheerio';
let url = "https://web.bet9ja.com/Sport/Default.aspx";




const sports = require('radar-sport-api');
//defina a casa de aposta
const sport = new sports('bet365', { getCommonContents: false });

// console.log(sport)

sport.getInfo('Europe:Berlin', 'stats_season_meta', 76415).then((data) => {
    console.log(data)
})




// const app = new App();
// app.run();
// export default app;
