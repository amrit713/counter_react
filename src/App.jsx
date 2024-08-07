import { useState } from "react";
import Button from "./components/Button";
import Content from "./components/Content";


const btnTypes = [{
    id:1,
    className:"bg-red-500  hover:bg-red-600 transition",
    content:"Decrease",
    onClick:(setCount, count)=>{
        setCount(count-1)
    }},
    {
        id:1,
        className:"bg-gray-700  hover:bg-gray-900 transition",
        content:"Reset",
        onClick:(setCount, count)=>{
            setCount(0)
        }},
        {
            id:1,
            className:"bg-green-500  hover:bg-green-600 transition",
            content:"Increase",
            onClick:(setCount, count)=>{
                setCount(count+1)
            },
}]


function App() {
    const [count, setCount] = useState(0)
  return (
    <div className="flex  justify-center items-center h-[100vh] w-full bg-red-50  ">

        <div className="shadow-md py-14 px-[6rem]  border rounded-lg flex flex-col gap-10">
        <Content count ={count} />

    <div className=" flex justify-between gap-8 ">
   {/* <Button className="bg-red-500  hover:bg-red-600 transition" onClick={()=> setCount(prev=> prev-1)}>Decrease</Button>

   <Button className="bg-gray-700  hover:bg-gray-900 transition" onClick={()=> setCount(0)}>Reset</Button>

   <Button className="bg-green-500  hover:bg-green-600 transition" onClick={()=> setCount(count+1)}>Increase</Button> */}

   {
    btnTypes.map((type)=>{
        return (<Button key={type.id} className={type.className} onClick={()=> type.onClick(setCount, count)}>{type.content}</Button>)
    })
   }
</div>
        </div>

    </div>
  );
}

export default App;
