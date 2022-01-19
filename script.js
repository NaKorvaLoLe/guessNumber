'use strict';



let score = 20;
let highscore = 0;
let scoreValue = document.querySelector('.score');
let randomNumber = Math.ceil(Math.random()*20);
let question = document.querySelector('.question');
let guessMessage = document.querySelector('.guess-message'); 
let btnCheck = document.querySelector('.check');
let btnAgain = document.querySelector('.again');
let bodyBackground = document.querySelector('body');
let highScoreValue = document.querySelector('.highscore');


    

    btnCheck.addEventListener('click', function(){
        let numberInput = +document.querySelector('.number-input').value;
        //Игрок не ввел число 
        if(!numberInput){
            guessMessage.textContent = 'Введите число от 1 до 20';

        //Игрок победил 
        }else if(numberInput === randomNumber){
            guessMessage.textContent = 'Правильно!';
            question.textContent = randomNumber;
            bodyBackground.style.backgroundColor = 'green'
            question.style.width = '50rem';
            if(score > highscore){
                highscore = score;
                highScoreValue.textContent = highscore;
            }

        //Игрок ввел число больше 
        }else if(numberInput !== randomNumber){
            if(score > 1){
                guessMessage.textContent = numberInput > randomNumber ? 'Слишком много!' : 'Слишком мало';
                score--;
                scoreValue.textContent = score; 
            }else{
                guessMessage.textContent = 'Game over!';
                scoreValue.textContent = 0;
            }
        }
    });

    //  Начать игру сначала
    btnAgain.addEventListener('click', function(){
        randomNumber = Math.ceil(Math.random()*20);
        question.textContent = '???';
        question.style.width = '25rem';
        guessMessage.textContent = 'Начни угадывать!';
        score = 20
        scoreValue.textContent = score;
        document.querySelector('.number-input').value = '';
        bodyBackground.style.backgroundColor = 'black';
        
    });
 