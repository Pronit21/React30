import { useState, useEffect }  from 'react'


function Six() {
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.org/posts/1')
        .then((response)=>response.json())
        .then((json)=>setData(json))

    })
  return (
    <div>
        {
            data? (
                <div>
                    <h1>Title: {data.title}</h1>
                    </div>

            ) : (
                <p>Loading....</p>
        )}
    </div>
  )
}

export default Six