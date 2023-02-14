import {useState, useEffect} from 'react';
import axios from 'axios';
export const Application= () => {

    const[userID, setUserID] = useState(1);

    const [items, setItems] = useState([])

    useEffect ( () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(response => setItems( response.data))
    }, [userID]);
    
    return (
        <div>
            <input onChange= { (ev) => setUserID(Number(ev.target.value))}></input>
          <pre> {JSON.stringify(items, null, 2)}</pre>
        </div>
    )
};