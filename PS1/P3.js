const myfunc = (value, operation) => operation(value);

function createobj(mystring)
{
    let arr = mystring.split('');
    let newstring = mystring;
    let count = 0;

    for (let i = 0; i < arr.length; i++)
    {
        if(arr[i] == 'a')
        {
            newstring.charAt(i).toUpperCase();
            count = count + 1;
        }
    }

    var myobj = {

        originalString: mystring,
        modifiedString: newstring,
        numberReplaced: count,
        length: mystring.length
    };

    return myobj;
}

let result1 = myfunc(
    "supercalifragilisticexpialidocious",
    val => val.replace(/c/gi, ",c").split(",")
)
console.log(result1);

let result2 = myfunc(
    "supercalifragilisticexpialidocious",
    val => createobj(val)
)
console.log(result2);