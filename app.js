const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  render : function(){
    let guessNum = this.prevGuesses.length
    if(this.prevGuesses[guessNum -1] === this.secretNum){
      alert(`Congrats! You guessd the number in ${guessNum}!`)
    }else if(this.prevGuesses[guessNum - 1] > this.secretNum){
        alert(`Your guess is too high. Previous guesses: ${this.prevGuesses.join()}`)
      }else if(this.prevGuesses[guessNum -1] < this.secretNum){
          alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join()}`)
      
      }
    },  
  getGuesses: function(){        
    guess = parseInt(
      prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      )
      while(isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum){
        guess = parseInt(
          prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
        )
      }return guess
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum){
          this.prevGuesses.push(this.getGuesses())
          this.render()
        }
        this.render()
        return this.secretNum;
      }
    }
game.play()