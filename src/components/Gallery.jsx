import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';


const url = "https://api.unsplash.com/photos/?client_id=igc4p6wVnDOUul977vmWs2U8iN-saxmL3c9Y5GRlv7Y";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url)
      return result.data
    }
  })

  // console.log(response);

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  } if (response.isError){
    return (
      <section className="image-container">
        <h4>There was an Error...</h4>
      </section>
    )
  }

  const results = response.data
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No result found...</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {
        results.map(item =>{
          const url = item?.urls?.regular
          return (
            <img src={url} alt={item.alt_description} className="img" key={item.id}/>
          )
        })
      }
    </section>
  )
}

export default Gallery