// pri function
let pri = x => y => x;

// last function
let last = x => y => y;

// flip function
let flip = f => x => y => f(y)(x);

// true and false
let t = pri;
let f = last;

// not operator
let not = x => x(f)(t);

// and operator
let and = f => y => f(y)(f);

// or operator
let or = f => y => f(t)(y);

// print function
let print = console.log;

let lambda = {
    print,
    pri,
    last,
    flip,
    t,
    f,
    not,
    and,
    or
};

module.exports = lambda;