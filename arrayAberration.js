//JavaScript array aberration 
var arr = [11, 22, 33, 44];
arr.pro1 = '55';
arr.pro2 = '66';


for (i in arr) {
  console.log(i);
  console.log(arr[i]);
}


for (i of arr)
  console.log(i);


arr.forEach(i => {
  console.log(i)
});
