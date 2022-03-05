

let line_num = 66; // this is a 64-bit number type lookin like 1100...110
let col_num = 57; // this is a 64-bit number type lookin like 1100...0111


// shifting left is the same as just multiplying by 2 and carrying the 1!
// we can avoid the 32-bit integer treatment of javascript's bitwise operations
let line_num_shifted = line_num * Math.pow(2, 32);
console.log("line num shifted: ", line_num_shifted);

let line_col_combined = line_num_shifted + col_num;
console.log("line/col combined: ", line_col_combined);

// now we try to get the col number back
let just_col_num = (0) | line_col_combined; // we can only do this because JS bitwise OR is treated as ops with 32 bit numbers
console.log("just column number is: ", just_col_num);

let just_line_num = (line_col_combined - just_col_num) / Math.pow(2,32);
console.log("just line number is: ", just_line_num);
