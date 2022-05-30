def palindrome(word):
    word = (str(word)).lower()
    word = "".join(filter(str.isalnum, word))
    rev_word= word[::-1]
    return word == rev_word


