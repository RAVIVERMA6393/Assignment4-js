// Q.1 find the product

// let arr = [1,2,3,4,5];
// let result = 1;
// for(let i=0; i<arr.length; i++){
    
//     result = result * arr[i];

// }
// console.log(result);



// function Find_Prod(N,arr){
//     let product = 1;
//     for(let i=0; i<N; i++){
//         product *= arr[i]
//     }
//     return product
// }

// const array = [1,2,3,4,5];
// const N = array.length;
// console.log(Find_Prod(N,array));

// Q.2 find the sum
// let arr1 = [1,2,3,4,5]
// let result1 = 1;
// for(let i=0; i<arr1.length; i++){
//     result1 = result1 + arr1[i];
// }
// console.log(result1);


// function Find_Prod(N,arr){
//     let product = 1;
//     for(let i=0; i<N; i++){
//         product += arr[i]
//     }
//     return product
// }

// const array = [1,2,3,4,5];
// const N = array.length;
// console.log(Find_Prod(N,array));


// Q.3  find count occurences

// function findcount(N,K,A){

//     let count = 0;
//     for(let i =0; i<N; i++){
//         if(A[i] === K){
//             count++;
//         }
//     }
//     return count;
// }
// const array = [4,3,3,3,1,2];
// const N = array.length -1;
// const K = array[0];
// const A = array.slice(1);
// console.log(findcount(N,K,A));



// Q.4 even odd
// let a = [1,2,3,4,5,6,7];
// oddsum = 0;
// evensum = 0;
// for(let i=0; i<a.length; i++){
//     oddsum = oddsum + a[i];
//     evensum = evensum + a[i];
// }
// console.log(oddsum)
// console.log(evensum)


// // 5.-----------------------
// // let d = prompt(Number("enter here"));
// // let arr3 =[1,2,3,4,5,6,7,8,9];            puchhna hai?
// // // arr3.split("")
// // // console.log(arr3)
// // // let yes ="yes"
// // // let not ="not"
// // for(i=0; i>arr3.length; i++){
// //     if(d===arr3[i]){
// //     console.log("yes")
// //     }
// //     else if( d!==arr3[i]){
// //         console.log("not")
// //     }
// // }

// // 6.---------------------
// // let  e= [6,11,23,3,45,72,68]
// // var highage = 0;

// // for (let i = 0; i < e.length; i++) {
// //   if (e[i] > highage ) {
// //     highage = e[i];
// //   }
// // }
// // console.log(highage);


// // 7.--------------------

// let arr5=[1,2,3,4,5]
// for (let i =0; i<arr5.length;i++){
//     arr5[i] += 1;
// }
// console.log(arr5)

// // 9.---------------------------
// let arr=[6 ,3 ,2, 4, 1, 2, 3]
// let res;
// for (let i =0; i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             res=arr[i]
//             break;

//         }
//     }
//     if(res!==undefined){
//         break;
//     }
// }
// console.log(res+" reapetetion")


// // 10.
// let e =[66 ,33, 11, 44, 66, 22, 77]
// var highestno = 0;
// // var lowestno;
// for (let i = 0; i < e.length; i++) {
//   if (e[i] >  highestno ) {
//      highestno = e[i];
//   }
// }
// var lowestno = highestno;
// for (let i = 0; i < e.length; i++) {
//   if (e[i] < lowestno ) {
//     lowestno = e[i];
//   }
// }


// console.log("higest no is "+ highestno + ", and  lowest no is " +  lowestno);

