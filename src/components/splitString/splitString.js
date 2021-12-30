
const Splitstring=()=>{
    let data={id:1, 
        name:"teaher1_teacher2_teacher3_teacher4_teacher5"}
        let split=data.name.split("_");
        console.log("split",split)
return(
    <div>
{split?.map((single)=>(
    <div>{single}</div>
))

}
    </div>
)
}
export default Splitstring