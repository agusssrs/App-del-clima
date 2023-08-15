import React from 'react';
import './CardInfo.css'

const SearchBar = ({handleSubmit}) => {
    
  return (
    <>
      <div className="searchBar">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Ingresá una ciudad!'/>
            <button>Buscar</button>
        </form>
      </div>
    </>
  )
}

export default SearchBar