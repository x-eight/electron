console.log('hello code js')

var keys = document.querySelectorAll('#calculator span');
var display1 = document.querySelectorAll('#display');
var oldNum= 0;
var lastNum = 0;
var operator = '';

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
        var value = e.target.innerHTML
        if (value === 'C'){
            lastNum = 0
            oldNum = 0
            display.innerHTML = ''
        }
        if (value === '='){
            //display.innerHTML = oldNum + lastNum
            switch (operator) {
                case '+':
                    display.innerHTML = oldNum + lastNum 
                    break;
                case '-':
                    display.innerHTML = oldNum - lastNum
                    break;
                case '/':
                    display.innerHTML = oldNum / lastNum
                    break;
                case '*':
                    display.innerHTML = oldNum * lastNum
                    break;
                default:
                    display.innerHTML = "no operation"
                    break;
            }
            operator = ''
            
        }
        if (value === '+' || value === '-' || value === '/' || value === '*'){
            operator = e.target.innerHTML
            oldNum = Number(display.innerHTML)
            display.innerHTML = ''
        }
        if (value === '1' || value === '2' || value === '3' || value === '4' ||
            value === '5' || value === '6' || value === '7' || value === '8' ||
            value === '9' || value === '0'){
            display.innerHTML += e.target.innerHTML
            lastNum = Number(display.innerHTML)
        }
        
    }

}

