exports.palindrome = function(word) {
    word= word.toString().replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    let revWord= word.split("").reverse().join("")
    return (word === revWord) 
}


