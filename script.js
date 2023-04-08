let button1=document.querySelector("#btn1");
let txt=document.querySelector('#txt1');

button1.addEventListener("click", ()=>{
    let a=document.querySelector('#inp1').value;
    let b=document.querySelector('#inp2').value;
    c=Number(a)+Number(b);
    console.log(c);
    txt.innerHTML="Результат: "+(c);
}
)


let button2=document.querySelector('#btn2');
button2.addEventListener('click', addCircle);
function addCircle(){
    let newCircle=document.createElement('div');
    tsk2.appendChild(newCircle);
    newCircle.classList.add('circle');
    
}


  let button3=document.querySelector("#btn3");
  let txt2=document.querySelector('#txt2');
  button3.addEventListener("click", ()=>{
      let d=document.querySelector('#inp3').value;
        let m=document.querySelector('#inp4').value;
       let c=document.querySelector('#inp5').value; 
      g=Number(d)+Number(m)+Number(c);
     console.log(g);
      txt2.innerHTML="Результат: "+(g);
  }
  )

  let button4=document.querySelector('#btn4');
button4.addEventListener('click', addbox);
function addbox(){
    let newbox=document.createElement('div');
    tsk4.appendChild(newbox);
    newbox.classList.add('box');
    
}
