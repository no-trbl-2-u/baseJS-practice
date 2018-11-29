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


// not :: Boolean -> Boolean
const not = p => p(F)(T);           // Not or flip (flip(F) === T)


// Playground functions
const add = a => b => a+b;
const add5 = add(5);
const first = T;
const second = F;
const _first = C(F);        // Extensionally equal to T
const _second = C(T);       // Extensionally equal to F

//                          Intentional vs Extensional equality
// Extensional equality is if 2 fn given the same in, provide the same out
// Intentional equality is a comparison of the "guts" of a fn
// Example of (K/T && KI/F) vs (flip && not)
// console.log(first(1)(2) === 1);     // true
// console.log(second(1)(2) === 2);    // true
// console.log(_first(1)(2) === 1);    // true 
// console.log(_second(1)(2) === 2);   // true



// Playground Data
const str = 'BaseLC';
const arr = [1, 2, 'a'];
const charA = 'a';
const charB = 'b';