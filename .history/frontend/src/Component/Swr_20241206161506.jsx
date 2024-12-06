import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Swr() {

    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

    if (error) {
        return <div>Error loading data</div>
    }
  return (
    <div>Swr</div>
  )
}

export default Swr