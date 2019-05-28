function* fibs(n)
{
    let [curr, next, result] = [n, n+1, 0];

    while(true)
    {
        result = curr +  next;
        curr = next;
        next = result;
        yield result;
    }
}

function* evenfibs(n)
{
    let fib1 = fibs(n);

    while(true) {
        let result = fib1.next().value;

        if (result % 2 == 0) {
            yield result;
        }
    }
}

myFibs = evenfibs(0) //not really fib(4), just shows passing param
let count = 5;
while (count --> 0) {
    console.log(myFibs.next().value)
}