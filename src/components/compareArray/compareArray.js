import {useEffect, useState} from "react"
const CompareArray = () => {
    let arr1=  [{no:1},{no:2},{no:4},{no:5},{no:6},{no:8},{no:10}];
let arr2=  [{no:14},{no:2},{no:4},{no:12},{no:6},{no:8},{no:13}]
const [sameValue, setSameValue]=useState()
useEffect(()=>{
// let array=arr1.no.filter((single)=>arr2.no.includes(single))
let result = arr1.filter(o1 => arr2.some(o2 => o1.no === o2.no));
console.log("array",result)
 // let arr = [];  
  // for(let i=0 ; i<arr1.length ; i++) {
  //   for(let j=0 ; j<arr2.length ; j++) {
  //     if(arr1[i] == arr2[j]) {    
  //       arr.push(arr1[i] );   
       
  //     }
  
  //   }
  //   setSameValue(arr)
  // }
  // console.log("result",arr)
},[])
  return(
    <div>
{/* <div>{sameValue.no }</div> */}
    </div>
  )
  
};
export default CompareArray;