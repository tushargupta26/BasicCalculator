var num1 = null;
var num2 = null;
var operand = null;
var display = document.getElementById('element');
display.innerText = 'Empty';
display.style.alignContent = 'center';
// display.style.fontSize = ;
display.style.marginTop = 10;
var buttons = document.getElementsByClassName('button');
console.log(buttons.length);
var prev = false;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-type');
        console.log(value);
        if(value == '*'){
            operand = value;
            prev = false;
        }
        else if(value == '+/-'){
            if(num2 !== null){
                num2 = num2 * -1;
                display.innerText = num2;
            }
            else{
                num1 = num1 * -1;
                display.innerText = num1;
            }
            prev = false;
        }
        else if(value == '%'){
            operand = value;
            prev = false;
        }
        else if(value == '/'){
            operand = value;
            prev = false;
        }
        else if(value == '-'){
            operand = value;
            prev = false;
        }
        else if(value == '+'){
            operand = value;
            prev = false;
        }
        else if(value == '='){
            if(num2 === null){
                // continue;
            }
            else if(num2 === '0' && operand === '/'){
                num1 = null;
                num2 = null;
                operand = null;
                display.innerText = 'Error';
                // continue;
            }
            else{
                num1 = eval(num1 + " " + operand + " " + num2);
                num2 = null;
                operand = null;
                display.innerText = num1;
            }
            prev = true;
        }
        else if(value == 'AC'){
            display.innerText = "";
            num1 = null;
            num2 = null;
            operand = null;
            prev = false;
        }
        else{
            if(operand == null){
                if(prev === true){
                    num1 = null;
                }
                if(num1 === null){
                    num1 = value;
                }
                else{
                    num1 = num1 + value;
                }
                display.innerText = num1;
            }
            else{
                if(num2 === null){
                    num2 = value;
                }
                else{
                    num2 = num2 + value;
                }
                display.innerText = num2;
            }
            prev = false;
        }
    });
}