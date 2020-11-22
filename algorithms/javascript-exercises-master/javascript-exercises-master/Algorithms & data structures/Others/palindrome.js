// Recursive version
function palindrome_rec(word) {
    if (word.length <= 1) {
        return true
    }
    if (word[0] != word[word.length-1]) {
        return false
    }
    word = word.slice(1, word.length-1)
    return palindrome_rec(word)
}

// Iterative version
function palindrome_iter(word) {
    start = 0;
    end = word.length-1;
    while (start < end) {
        if (word[start] != word[end]) {
            return false
        }
        start++;
        end--;
    }
    return true;
}

document.write(palindrome_rec("racecar"));
document.write(palindrome_iter("racecar"));