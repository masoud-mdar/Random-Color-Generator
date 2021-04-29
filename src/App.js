import React, {useState} from "react"
import {Button} from "react-bootstrap"

const App = () => {
    const [color, setColor] = useState("")

    const colorFunction = () => {
        let colorString = "ABCDEF123456";
        let colorArr = colorString.split("");
        let finalArr = [];
        let i=0;
        while (i<6){
            let n = Math.floor(Math.random()*12);
            finalArr.push(colorArr[n]);     
            i++;
        }
        let c = finalArr.join("");
        setColor("#" + c) ;
    }

    return (
        <div id="body" style={{background: `${color}`}}>

            <div id="code">
                {color ? (
                    <h2>
                        {color}
                    </h2>
                ) : (
                    <h2>#A52A2A</h2>
                )}
                        
            </div>

            <br />

            <Button variant="outline-dark" onClick={colorFunction} >Change Color</Button>

        </div>
    )
}

export default App