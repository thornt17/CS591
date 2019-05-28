
function alphabet(mystring)
{
    let x = mystring.split('');
    var y;

    for(let i = 0; i < x.length; i++){
        for(let j = i + 1; j < x.length; j++){
            if(x[i] > x[j]){
                y = x[i];
                x[i] = x[j];
                x[j] = y;
            }
        }
        //console.log(mystring);
    }

    mystring = x.join('');

    return mystring;
}

let z = alphabet("supercalifragilisticexpialidocious");

console.log(z);