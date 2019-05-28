function* printWord(sentence)
{
    let arr = sentence.split(" ");
    let n = 0;

    while(true)
    {
        yield arr[n];
        n++;
    }
}

let mystring = "All I know is something like a bird within her sang";

myWord = printWord(mystring);
let count = 11;
while(count --> 0)
{
    console.log(myWord.next().value);
}