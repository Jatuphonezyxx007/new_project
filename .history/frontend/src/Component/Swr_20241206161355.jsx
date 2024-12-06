import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Swr() {

    const { data, error } = useSWR();
  return (
    <div>Swr</div>
  )
}

export default Swr