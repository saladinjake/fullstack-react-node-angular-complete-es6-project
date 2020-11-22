// See: https://www.codingame.com/ide/puzzle/stock-exchange-losses

const n = parseInt(readline());
const inputs = readline().split(' ');

let max = 0;
let max_loss = 0;

// Scan the stock market values
for (let i = 0; i < n; i++) {
        // Current value
    const v = parseInt(inputs[i]);

    max = Math.max(max, v);  // update overall maximum value if higher
    let loss = -(max - v);  // current maximum loss
    max_loss = Math.min(max_loss, loss);  // update overall maximum loss if lower
}

print(max_loss);