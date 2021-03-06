// KEY
/*
  a, b => params
  f, g => functions
  n, m => numbers
  p, q => booleans
*/

// Lambda Functions
const I = a => a;                   // Identity
const M = f => f(f);                // Apply(self)
const K = a => b => a;              // Const or first
const KI = a => b => b;             // Second
const C = f => a => b => f(b)(a);   // Flip

// Lambda Booleans
const T = a => b => a;              // True or K or First
const F = a => b => b;              // False or KI or Second
const not = p => p(F)(T);           // Not or flip !combinator
const and = p => q => p(q)(p);      // And
const or = p => q => p(p)(q);        // Or {M*} ** discovered :D **
const beq = p => q => p(q)(not(q));   // Boolean Equality
const _beq = p => q => p(q(T)(F))(q(F)(T));

<<<<<<< HEAD
=======
// FP Style Use cases

// of :: arg => arg
const of = a => a

// unary :: function -> function
const unary = func => x => func(x)
>>>>>>> a8fd0d81d4ba8bba8b35357984edc4267454dd25

// Playground functions
const add = a => b => a+b;
const add5 = add(5);

// Church Numerals
const n0 = f => x => x;
const n1 = f => x => f(x);
const n2 = f => x => f(f(x));
const n3 = f => x => f(f(f(x)));
const n4 = f => x => f(f(f(f(x))));
const n5 = f => x => f(f(f(f(f(x)))));




// Use cases

// of :: arg => arg
const of = a => a;
// console.log(`Is Dave cool? Ans: ${(F(of(true))(of(false)))}`);


//                          Intentional vs Extensional equality
// Extensional equality is if 2 fn given the same in, provide the same out
// Intentional equality is a comparison of the "guts" of a function

const _first = T;
const _second = F;
const __first = C(F);        // Extensionally equal to T
const __second = C(T);       // Extensionally equal to F

// Example of (K/T && KI/F) vs (flip && not)

// console.log(_first(1)(2) === 1);     // true
// console.log(_second(1)(2) === 2);    // true
// console.log(__first(1)(2) === 1);    // true
// console.log(__second(1)(2) === 2);   // true
