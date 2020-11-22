// My solution: https://app.codility.com/demo/results/trainingF4WJ9W-V45/
// Input string only contains parentheses characters.

function solution(S) {

    var stack = [];
    nestings = {"(": ")", "{": "}", "[": "]"};
    opening_chars = Object.keys(nestings);

    // If odd number of opening/closing chars, there must be an error
    if (S.length % 2 === 1) {
        return 0
    }

    // Scan each char of the string
    for (let i = 0; i < S.length; i++) {
        let char = S.charAt(i);

        // If opening char, push it on the stack
        if (opening_chars.includes(char)) {
            stack.push(char);
        }

        // If closing char, check if the last opening char matches
        // and return 0 if not
        else {
            let lastChar = stack.pop();
            if (nestings[lastChar] != char) {
                return 0;
            }
        }
    }

    // If stack is not empty, there must be some opening chars without
    // matching closing chars
    if (stack.length != 0) {
        return 0

    }
    // If the string was scanned entirely without any issue, return 1
    else {
        return 1
    }
}