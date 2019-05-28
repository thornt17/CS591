function calculator(mystring)
{
    let arr = mystring.split('');


    if(arr[1] == '+')
    {
        return arr[0].charCodeAt(0) + arr[2].charCodeAt(0) - 96;
    }
    else if(arr[1] == '*')
    {
        return (arr[0].charCodeAt(0) - 48) * (arr[2].charCodeAt(0) - 48);
    }
    else if(arr[1] == '/')
    {
        return (arr[0].charCodeAt(0) - 48) / (arr[2].charCodeAt(0) - 48);
    }
    else (arr[1] == '-')
    {
        return arr[0].charCodeAt(0) - arr[2].charCodeAt(0);
    }

}

let x = "4+2";
let y = "5*7’";
let z = "6-1";
let z1 = "9/2";

console.log(`${x} = ${calculator(x)}`);
console.log(`${y} = ${calculator(y)}`);
console.log(`${z} = ${calculator(z)}`);
console.log(`${z1} = ${calculator(z1)}`);