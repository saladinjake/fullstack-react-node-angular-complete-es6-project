// See: http://keithschwarz.com/interesting/code/?dir=single-sell-profit
// Goal: find the best historical profit (lowest buy day and later highest sell day)

// Iterate over all possible day pairs
function tradeBruteForce(prices) {
    maxProfit = 0;

    // Do not consider same day pairs, as profit is zero anyway
    for (let i = 0; i < prices.length; i++) {
        // Possible future days starts at least one day after current day
        for (let j = i + 1; j < prices.length; j++) {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
        }
    }
    return maxProfit;
}

/* Suppose that we know the maximum single-sell profit of the first k elements.
If we look at k + 1 elements, then either the maximum profit we could make by
buying and selling within the first k elements (in which case nothing changes),
or we're supposed to sell at the (k + 1)th price.  If we wanted to sell at this price
for a maximum profit, then we would want to do so by buying at the lowest of
the first k prices, then selling at the (k + 1)th price.
*/
function tradeDynamicProgramming(prices) {
    // If zero or one day, profit is zero
    if (prices.length <= 1) {
        return 0;
    }

    // Keep track of best profit and cheapest buy day
    maxProfit = 0;
    cheapest = prices[0];

    for (i = 1; i < prices.length; i++) {
        // Update cheapest buy day
        cheapest = Math.min(cheapest, prices[i]);

        // Update best profit
        maxProfit = Math.max(maxProfit, prices[i] - cheapest);
    }
    return maxProfit;
}

// Prices on consecutive days
prices = [100, 180, 260, 310, 40, 535, 695];

console.log(tradeBruteForce(prices));
console.log(tradeDynamicProgramming(prices));