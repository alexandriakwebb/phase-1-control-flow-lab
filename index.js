function scuberGreetingForFeet(someValue){
 let response
  if (someValue <= 400) {
    response = 'This one is on me!'
  } 
  
  else if (someValue > 400 && someValue <= 2000) {
    response = 'That will be twenty bucks.'
  } 
  
  else if (someValue > 2000 && someValue <= 2500) {
    response = 'I will gladly take your thirty bucks.'
  }
  
  else {
    response = 'No can do.'
  }

  return response
}

function ternaryCheckCity(cityWanted){
let result =
    cityWanted === 'NYC' ? 'Ok, sounds good.' : 'No go.'

  return result
}

function switchOnCharmFromTip(tipLevel){
  let tipResponse

  switch (tipLevel) {
    case 'generous' :
      tipResponse = 'Thank you so much.'
      break;
    case 'not as generous':
      tipResponse = 'Thank you.'
      break;
    default: 
      tipResponse = 'Bye.'
      break;
  }

  return tipResponse
}