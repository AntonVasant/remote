const score =  { wins : 0,lose:0,tie:0 };
updateScoreElement();
function playGame(playerMove)
{
    const computerMove = pickComputerMove();
let result = '';
if(playerMove === 'Rock')
{
if(computerMove === 'Rock')
{
  result = 'Tie';
}
else if(computerMove === 'Paper')
{
  result = 'You Lose';
}
else if(computerMove === 'Scissor')
{
  result = 'You Win';
}
}



else if(playerMove === 'Paper')
{
  if(computerMove === 'Rock')
{
  result = 'You Win';
}
else if(computerMove === 'Paper')
{
  result = 'Tie';
}
else if(computerMove === 'Scissor')
{
  result = 'You Lose';
}
}

 



else if(playerMove === 'Scissor')
{
  if(computerMove === 'Rock')
{
  result = 'You Lose';
}
else if(computerMove === 'Paper')
{
  result = 'You Win';
}
else if(computerMove === 'Scissor')
{
  result = 'Tie';
}

}
if(result === 'You Win')
{
  score.wins +=1;
}
else if(result === 'You Lose')
{
  score.lose +=1;
}
if(result === 'Tie')
{
  score.tie +=1;
}
 
updateScoreElement();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = ` You<img src="pics/${playerMove}-emoji.png" 
class="move-icon"><img src="pics/${computerMove}-emoji.png" class="move-icon"> Computers`;
 
 

}

function pickComputerMove()
{
let computerMove = '';
const randomNumber = Math.random();
 
if(randomNumber >= 0 && randomNumber < 1/3)
{
    computerMove = 'Rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3 )
{
  computerMove ='Paper';
}
else if (randomNumber >=2/3 && randomNumber <1)
{
  computerMove ='Scissor';
}
return computerMove;

}
function updateScoreElement()
{
document.querySelector('.js-score').innerHTML =
`Wins : ${score.wins} Losses : ${score.lose} Tie : ${score.tie}`;
}