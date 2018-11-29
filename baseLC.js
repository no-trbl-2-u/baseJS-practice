// KEY
/*
  a, b => params
  f => function
  n, m => numbers
*/

// Lambda Functions
const I = a => a;                   // Identity
const M = f => f(f);                // A pply(self)
const K = a => b => a;              // Const or first 
const KI = a => b => b;             // Second
const C = f => a => b => f(b)(a);   // Flip 

// Lambda Booleans
const T = a => b => a;              // True or 
const F = a => b => b;              // False


// Playground functions
const add = a => b => a+b;
const add5 = add(5);


// Playground Data
const str = 'BaseLC';
const arr = [1, 2, 'a'];
const charA = 'a';
const charB = 'b';