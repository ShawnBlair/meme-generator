import React from "react"
import memesData from "../memesData"

export default function Meme(){
    const[memei, setMemei] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })
    
    
    function setText(event){
        const {type,name,value,checked} = event.target
        setMemei(memei=>({
            ...memei,[name]:value
        }))
    }
    
    function setImage(){
        const[meme,setMeme] = React.useState(memesData.data.memes)
        const number = Math.floor(Math.random() * meme.length)
        const url = meme[number].url
        setMemei(memei=>({
            ...memei,randomImage: url
        }))
    }
    
    return(
        <div className="bo1">
        <input type="text" placeholder="Top text" name="topText" onChange={setText} value={memei.topText} className="t1"></input>
        <input type="text" placeholder="Bottom text" name="bottomText" onChange={setText} value={memei.bottomText} className="t2"></input>
        <button onClick={setImage} className="c1">Get a new meme image</button>
        <h3 className="tt1">{memei.topText}</h3>
        <h3 className="tt2">{memei.bottomText}</h3>
        <img src={memei.randomImage} className="i1"/>
        </div>
    )
}