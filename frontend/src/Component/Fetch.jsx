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

        fetchData();
    }, [])

    console.log(data);

    if (loading) {
        return <div>Loading...</div>
    }

    if (!data) {
        return <div>Error loading data</div>
    }

  return (
    <div>
        <h3>Using Fetch inside useEffect</h3>
        {data?.map((val) => (
            <p>{val.title}</p>
        ))}
    </div>
  )
}

export default Fetch