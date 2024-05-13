import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useGlobalContext } from '../context';


const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY}`;

const Gallery = () => {
  const {searchTerm} = useGlobalContext()
  // console.log(searchTerm);

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`)
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

  const results = response.data.results
  // console.log(results);
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