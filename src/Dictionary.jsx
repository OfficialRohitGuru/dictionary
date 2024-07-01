import React,{useState} from "react";

const Dict= 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]



export default function Dictionary(){
    
    const [dispaly,setDisplay]= useState("")
    const [Definition,setDefinition]= useState("")
    const [search,setSearch]= useState(false)

    function handleChange(e){
        setSearch(false)
        let type=(e.target.value)
        setDisplay(type)
        let result = Dict.find(item => type === item.word)
        if(result){
            setDefinition(result.meaning)
        }else{
            setDefinition("Word not found in the dictionary.")
        }
      
        
       
    }
    function handleClick(){
        setSearch(true)
    }


    return (<>
    <h2>Dictionary App</h2>
    <input type="text" value={dispaly} onChange={handleChange} placeholder="Search for a word.." />
    <button onClick={handleClick}>Search</button><br></br>
    <p>Definition:</p>
    {search && <p>{Definition}</p>}

    </>);
}