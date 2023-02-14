import {useState} from 'react'
export const Features= () => {

const[value, setValue] = useState (0);
const[name, setName] = useState ("");
const [bool, setHidden] = useState(true)


const add = () => setValue((prev ) => prev + 1);
const rem = () => setValue((prev ) => prev - 1);
const toggle = () => setHidden( (bool) => !bool)


    return (
        <div>
            <h1>HOLY SHIT, THIS IS AWESOME REACT APPLICATION!!!</h1>

            Value: {value}

            <button  onClick= {add}> Add </button>
            <button  onClick= {rem}> Rem </button>
            <br/>
            <hr></hr>
            <h3>Name: {name}</h3>
            <input onChange= { (name) =>  setName(name.target.value) }/>
            <hr/>
              <div>
              <button onClick = {toggle}>Open gnome</button>
                {!bool&& 
                <div> Hidden gnome</div>}
              </div>
            </div>
    )
};