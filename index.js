function scuberGreetingForFeet(feet){
  let msg = '';
  // Write your code here!
  if (feet <= 400){
    msg = 'This one is on me!';
  }else if(feet > 400 && feet <= 2000){
    msg = 'That will be twenty bucks.';
  }else if(feet > 2000 && feet <= 2500){
    msg = 'I will gladly take your thirty bucks.';
  }else{
    msg = 'No can do.';
  }
  return msg;
}

function ternaryCheckCity(city){
  // Write your code here!
  let togo = city === 'NYC'? 'Ok, sounds good.':'No go.';
  return togo
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}