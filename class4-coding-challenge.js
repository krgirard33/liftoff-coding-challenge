// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.Words may also contain numbers, for example "Hello world123 567"
// Examples
// **** Input: "fun&!! time"
// Output: time
// **** Input: "I love dogs"
// Output: love

function LongestWord(sen) {

    let longest = "";
    let hold = "";
    let pattern = /[a-zA-z+" "]/;

    // removes the non-alpha characters
    for (const element of sen) {
        if (element.match(pattern)) {
            hold = hold + element;
        }
    }

    // builds array to hold each word
    let spliter = hold.split(" ");

    // compares each word to find the longest one, ignores following words that match in length
    for (const element of spliter) {
        if (element.length > longest.length) {
            longest = element;
        }
    }
    return longest;

}