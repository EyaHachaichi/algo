//ex1


//var para = "An array is a collection of items stored at contiguous memory locations."
//var count =1 
//var countVo=0
//var tabVol =["a","e","i","o","u","y"]
//for (let i=0; i<para.length; i++){
    //if(para[i]===" "){
       // count=count+1
    //}
    //if(tabVol.includes(para[i].toLocaleUpperCase())){
       // countVo++
   // }

//}
//console.log(count)
//console.log("counter voyelle", countVo)
//ex2
function calcul(set1, set2){
    var tabDeffi=[];
    for (let i=0; i<set1.length; i++){
       if (!set1.includes(set2[i])&& ! tabDeffi.includes(set2[i])){
          tabDeffi.push(set2[i]);
       }
    }
    var sum = tabDeffi.reduce((acc,curr)=>acc+curr);
    return tabDeffi;
}
var tab1=[3,1,7,9,10,3,7,7,7];
var tab2=[2,4,1,9,3,4,5,5];

console.log(calcul(tab1,tab2));