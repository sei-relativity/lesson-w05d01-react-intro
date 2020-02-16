import React from 'react';
import Movie from './Movie';
class App extends React.Component {
    render() {
      const movies ={
movie1: ['The Fellowship of the Ring',2,58],
movie2: ['The Two Towers',2,59],
movie3: ['The Return of the King',3,21],
      }
      return ( 
        <div>
< Movie movie1 = {movies.movie1} movie2 = {movies.movie2} movie3 = {movies.movie3}/> 
{/* < Movie movie1 = {movies.movie1}movie2 = {movies.movie2}movie3 = {movies.movie3}/>  */}
{/* < Movie movie2 = {movies.movie2}/> 
< Movie movie3 = {movies.movie3}/>  */}
          </div>
          );
        }
  }

export default App;

