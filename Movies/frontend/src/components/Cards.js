import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./style.css";
import axios from "axios";

const Cards = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getAllMovie() {
      try {
        const movies = await axios.get("http://localhost:3003/movies");
        // console.log(movies.data);
        setMovies(movies.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getAllMovie();
  }, []);

  return (
    <div className='container mt-3'>
     
      <h2 className='text-center'>| Movies List Project|</h2>
      <hr></hr>

      <div className="row d-flex justify-content-center align-items-center">
        {
          movies.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>
                    <h6> Movie IMDB Rating : {element.rating} </h6>
                    <h6> Movie Release Date : {element.date} </h6>
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="success"  
                      
                     className='col-lg-12'> Book Ticket </Button>
                    </div>
                  
                  </Card.Body>
                </Card>
               
              </>
            )
          })
        }

      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
    </div>
  )
}

export default Cards