
// team1

let teamOneShotCountSpanElement =document.querySelector("#teamone-numshots");
let teamOneShootButton= document.querySelector("#teamone-shoot-button");
let teamOneGoalCountSpanElement = document.querySelector("#teamone-numgoals") ;

teamOneShootButton.addEventListener("click", function() {
let currentTeamOneShotCount= Number(teamOneShotCountSpanElement.innerHTML)
let newShotCount=currentTeamOneShotCount+1;
teamOneShotCountSpanElement.innerHTML=newShotCount;
let randomNumberVar=Math.random();
if(randomNumberVar>0.5){
  let currentTeamOneGoalCount=Number(teamOneGoalCountSpanElement.innerHTML);
  let newTeamOneGoalCount=currentTeamOneGoalCount +1;
  teamOneGoalCountSpanElement.innerHTML=newTeamOneGoalCount;
  
}
})

//teamtwo

let teamTwoShotCountSpanElement =document.querySelector("#teamtwo-numshots");
let teamTwoShootButton= document.querySelector("#teamtwo-shoot-button");
let teamTwoGoalCountSpanElement = document.querySelector("#teamtwo-numgoals") ;

teamTwoShootButton.addEventListener("click", function() {
  let currentTeamTwoShotCount= Number(teamTwoShotCountSpanElement.innerHTML)
  let newShotCount=currentTeamTwoShotCount+1;
  teamTwoShotCountSpanElement.innerHTML=newShotCount;
  let randomNumberVar2=Math.random();

  
  if(randomNumberVar2>0.5){
    let currentTeamTwoGoalCount=Number(teamTwoGoalCountSpanElement.innerHTML);
    let newTeamTwoGoalCount=currentTeamTwoGoalCount +1;
    teamTwoGoalCountSpanElement.innerHTML=newTeamTwoGoalCount;
  
  }
  })
//reset
let RestCountElement=document.querySelector("#num-resets")
let RestButton= document.querySelector("#reset-button");
RestButton.addEventListener("click", function() {
let currenRestCount= Number(RestCountElement.innerHTML);
let newRestCount= currenRestCount+1;
RestCountElement.innerHTML = newRestCount;
teamOneShotCountSpanElement.innerHTML=0;
teamTwoGoalCountSpanElement.innerHTML=0;
teamTwoShotCountSpanElement.innerHTML=0;
teamOneGoalCountSpanElement.innerHTML=0;
}
)
