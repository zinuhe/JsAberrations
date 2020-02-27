// JavaScript array aberration 
var arr = [11, 22, 33, 44];
arr.pro1 = '55';
arr.pro2 = '66';

// Using in
for (i in arr) {
  console.log(i);
  console.log(arr[i]);
}

// Using of
for (i of arr)
  console.log(i);

// This is the most secure option
arr.forEach(i => {
  console.log(i)
});
