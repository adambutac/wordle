/* things to solve wordle:
needs to know which letter is correct, and in which place
a letter can be 
- present or not present in the word
- either in the correct place or wrong place

guesses need to be valid words
- how do we choose the first guess?
*/ 
function check_word(word) {
    winningWord = 'stark'
    wordleResponseList = []
    for (i=0; i < word.length; i++) {
        color = 'grey'
        if (word[i] == winningWord[i]) {
            color = 'green'
        } else if (winningWord.includes(word[i])) {
            color = 'yellow'
        }
        wordleResponseList.push({
            'char': word[i],
            'color': color 
        })

    }

    return wordleResponseList
}

const https = require('https');
wordle_words_link = "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words"


function playGame(list) {
    currentGuess = 'soare'
    filteredList = list

    while(win != true && filteredList.length > 0)
        possibleWin = check_word(currentGuess)
        console.log(possibleWin)
        filteredList = list.filter((word) => {
            // does this word start with an s?
            // returns true if yes, or false if no
            // word = ['s', 'o', 'a', 'r', 'e']
            if(word.indexOf('s') != 0) {
                return false
            } else if (word.indexOf('o') > -1) {
                return false
            } else if (word.indexOf('a') != 2) {
                return false
            } else if (word.indexOf('r') != 3) {
                return false
            } else if (word.indexOf('e') > -1) {
                return false
            } else if (word.indexOf('m') > -1) {
                return false
            }
            
            return true
        })
        console.log(filteredList)
        currentGuess = filteredList[0]
}

https.get(wordle_words_link, (res) => {
    list = ""
    res.on('data', (d) => {
        list += d
      });

    res.on('end', () => {
        playGame(list.split('\n'))
    })
})

