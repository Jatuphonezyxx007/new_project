import React, { useState, useEffect } from 'react'

function Fetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        }
    }, [])

  return (
    <div>Fetch</div>
  )
}

export default Fetch