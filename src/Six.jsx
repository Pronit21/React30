//Use effect helps us to fetch APIs, Creating timers, DOM manipulation
import {useState, useEffect} from 'react'


function Six() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('https://reqres.in/api/users?page=2');
            const data = await response.json();
            setUsers(data);
        };

        fetchData();
    }, []);
    
    return (
        <ul>
            {users.length === 0 ? (
                <li>Loading...</li>
            ) : (
                users.map((user)=>{
                    return <li key={user.id}>{user.name}</li>
                })
            )}
        </ul>
    )
}

export default Six;