window.addEventListener('DOMContentLoaded', rand);

function rand()
{
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    container.style.backgroundColor = 'lightblue';
    container.style.borderRadius='5px';
    document.body.appendChild(container);

   const output = document.createElement('input');
   output.setAttribute('type', 'text');
   output.classList.add('output')
   output.style.width = '100%'
   output.style.lineHeight = '50px';
   output.style.fontSize = '1em';
   output.style.textAlign = 'center';
   output.style.backgroundColor = '#bccd95'
   output.style.borderRadius = '5px';
   container.appendChild(output);
   const main = document.createElement('div');
   main.classList.add('main');
   main.style.width = '100%';
   container.appendChild(main);

   let btn = document.createElement('button');
   btn.setAttribute('type','button');
   btn.style.width='23%';
   btn.style.lineHeight = '50px';
   btn.style.margin = '2em';
   btn.val = 'generate';
   btn.textContent = 'Generate';
   btn.style.marginLeft = '15em';
   btn.style.backgroundColor = '#ff4561';
   btn.style.borderRadius = '6px';
   btn.addEventListener('click',myFunction);
   main.appendChild(btn);
   


  function myFunction()
    {
    output.value = Math.floor(10000000 + Math.random() * 90000000);
    // document.getElementById("eightrandom").innerHTML=output;
    }
}