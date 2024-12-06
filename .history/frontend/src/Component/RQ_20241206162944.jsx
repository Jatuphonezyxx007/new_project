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
    <div>RQ</div>
  )
}

export default RQ