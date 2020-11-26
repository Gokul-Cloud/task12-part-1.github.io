window.addEventListener('DOMContentLoaded', dob);

function dob()
{
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    container.style.backgroundColor = '#D3D3D3';
    container.style.borderRadius='5px';
    document.body.appendChild(container);

    var heading = document.createElement("H1");
    var title = document.createTextNode("Date of birth Calculator");
    heading.appendChild(title);
    heading.style.textAlign = 'center';
    container.appendChild(heading);

   const main = document.createElement('div');
   main.classList.add('main');
   main.style.width = '100%';
   container.appendChild(main);

   const input = document.createElement('input');
    input.setAttribute('type','date');
    input.classList.add('input');
    input.style.width = '20%';
    input.style.fontSize='1em';
    input.style.borderRadius = '5px';
    input.style.position = 'absolute';
    input.style.top='5.5em'
    input.style.left = '40%';
    container.appendChild(input);
    
    let btn = document.createElement('button');
    btn.setAttribute('type','button');
    btn.style.width='23%';
    btn.style.lineHeight = '50px';
    btn.style.margin = '2em';
    btn.val = 'check';
    btn.textContent = 'Check';
    btn.style.position = 'absolute';
    btn.style.top='6em'
    btn.style.left = '37%';
    btn.addEventListener('click',addOutput);
    main.appendChild(btn);
    function addOutput()
    {
        var inputvalue = new Date(input.value);
       var currentdate = new Date();
       var seconds = ((parseInt(currentdate.getTime())-parseInt(inputvalue.getTime())))/1000;
       var minutes = parseInt(seconds/60);
       var hrdiff = parseInt(minutes/60);
       var monthdiff = getMonthdata(inputvalue, currentdate);
       var yearDiff = getYearDate( inputvalue, currentdate);
       alert(` year difference is ${yearDiff}, month difference ${monthdiff} , hours difference ${hrdiff}, minutes difference ${minutes}, seconds difference ${seconds} ` );
    }
    function getYearDate(param1, param2)
    {
        return param2.getFullYear() - param1.getFullYear()
    }
    function getMonthdata(param1, param2)
    {
        var yr = getYearDate(param1,param2)
        var mon = (yr *12) + (param2.getMonth() - param1.getMonth());
        return mon
    }



}