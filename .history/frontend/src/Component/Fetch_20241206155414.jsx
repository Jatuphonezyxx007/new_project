import React, { useState, useEffect } from 'react'

function Fetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {

            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
    }, [])

  return (
    <div>Fetch</div>
  )
}

export default Fetch