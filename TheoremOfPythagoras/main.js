
let leg1 = document.getElementById('leg1-input');
let leg2 = document.getElementById('leg2-input');
let msg = document.getElementById('demo');

function hypotenuseFunction(){
  let a = leg1.value;
  let b = leg2.value;
  let square = (number) => number ** 2;
  
  //Result is rounded off.
  if(a === "" && b === ""){
    msg.textContent = 'Enter values!';
    msg.classList.add('error');
  }else{
    msg.textContent = 'Rounded off to: ' + 
    Math.round(
    Math.sqrt(
        square(a) + square(b)
    )
  );
  msg.classList.remove('error');
  msg.classList.add('result');
  }
}
