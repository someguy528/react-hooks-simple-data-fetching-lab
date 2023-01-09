// create your App component here
import React, {useState, useEffect} from "react";

function App(){

    const [isDog, setDog] = useState(null)
    // const [isContentLoaded, setContentLoaded] = useState(false)

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {
            setDog(data.message);
            // setContentLoaded(true);
        })
    }, [])


    if (!isDog){
        return (
            <p>Loading...</p>
        )
    }
    return (
        <div>
            <img src={isDog} alt="A Random Dog" /> 
        </div>
    )
}

export default App