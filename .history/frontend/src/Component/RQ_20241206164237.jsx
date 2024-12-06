import React from 'react'
import { useQuery } from 'react-query'

function RQ() {


    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        return response.json();
    }

    const { data, error, isLoading } = useQuery("myData", fetchData);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error loading data</div>
    }

  return (
    <div>
        <h3>Using RQ</h3>
        {data?.map((val) => (
            <p>{val.title}</p>
        ))}
    </div>
  )
}

export default RQ