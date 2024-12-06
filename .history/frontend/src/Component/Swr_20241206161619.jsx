import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Swr() {

    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

    if (error) {
        return <div>Error loading data</div>
    }

    if (!data) {
        return <div>Loading...</div>
    }
  return (
    <div>
        <h3>Using SWR</h3>
        {data?.map((val) => (
            <p>{val.title}</p>
        ))}
    </div>
  )
}

export default Swr