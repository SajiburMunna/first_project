// // // // console.log(087);
// // // // console.log("sajiburmunna");
// // // // var m=10;
// // // // var n=12;
// // // // var c=m+n;
// // // // console.log(c);
// // // // console.log(typeof n);
// // //   console.log(undefined == null);

// // // var age =18;
// // // if (age =>18){
// // //     console.log('Yes');
// // // }
// // // else{
// // //     console.log('Nope');
// // // }


// // var name =' sajibur munna';
// // for (var i=0;i<10;i++)
// // {
// //     console.log('Hello,'+ name);
// // }

 var names=[1,3,4,5,3];
// names[0]='sajib';
// names[1]='she' ;
// names[2]='you';
// //console.log(names[0]);
// for(var i=0;i<names.length;i++){
//     console.log(names[i].toUpperCase());
// }

console.log(names.length);
console.log(names.length-1);
console.log(names.indexOf(1));
names.push('i love you');
console.log(names);
var asort=names.sort();
console.log(asort);
names.splice(5,1);
console.log(names);
names.splice(5,1,'you');
console.log(names);

function add(a,b){
    return a+b;
}
console.log(add(10,30));

var ad=add;
console.log(ad(30,40));

var add =function (a,b){
    return a+b;
}

console.log(add(10,30));

