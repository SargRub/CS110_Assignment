function factorial(number){
    let result = 1;
    for(let i = 2; i <= number; i++)
    {
        result *= i;
    }
    return result
}

function gcd(num1, num2)
{
    while(num2 != 0){
        temp = num1; 
        num1 = num2; 
        num2 = temp % num2; 
    }
    return num1;
}

function lcm(num1, num2)
{
    return num1 * num2 / gcd(num1, num2);
}

function toHexadecimal(num)
{
    let result = ""
    let remainder;
    while(num != 0){
        remainder = num % 16;
        num = (num - remainder) / 16;
        result = toLetter(remainder) + result;
    }
    return result;
}


function toLetter(rem){
    let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    if(rem >= 10){
        return letters[rem % 10]
    }
    else{
        return rem;
    }
}

module.exports = {
    'factorial': factorial,
    'gcd': gcd,
    'lcm': lcm,
    'toHexadecimal': toHexadecimal
}