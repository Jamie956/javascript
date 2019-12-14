/*
Input 0 or 1 or 2 … or 9 or 0 …
Output number to next
Example: Input 1, output 2
(1+11)%10 = 2
(2+11)%10 = 3
.
.
(8+11)%10 = 9
(9+11)%10 = 0

Input 0 or 1 or 2 … or 9 or 0 …
Output number to previous
(1+9)%10 = 0
(2+9)%10 = 1
.
.
(8+9)%10 = 7
(9+9)%10 = 8
*/

let answer = (1+11)%10;//2

console.log(answer);

answer = (1+9)%10;

console.log(answer);//0
