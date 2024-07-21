import React from 'react';
import { BiSearch } from 'react-icons/bi';
import "../styles/search.scss";
import { Header, SearchCard } from '../components';

const Search = () => {
  return (
    <div className='content'>
      <main>
        <Header main={""} header={"Home"} title={"Search"} />

        <div className="search-container">
          <input type="search" placeholder="Search for doctor" className='search-input' />
          <div className='search-icon'>
            <BiSearch className='' color='black' size={24} />
          </div>
        </div>

        <ul className='search-insights'>
          <SearchCard name={"Haroon Ameer"} title={"Physiotherapist"} image={"avatar1.png"} />
          <SearchCard name={"Zohaib Jameel"} title={"Physiotherapist"} image={"avatar2.png"} />
          <SearchCard name={"Zainab Khan"} title={"Physiotherapist"} image={"avatar3.png"} />
          <SearchCard name={"Kinza Shah"} title={"Physiotherapist"} image={"avatar4.png"} />
          <SearchCard name={"Shahnoor Altaf"} title={"Mental Case"} image={"avatar5.png"} />
          <SearchCard name={"Awais Salamat"} title={"Physiotherapist"} image={"avatar1.png"} />
          <SearchCard name={"Usman Dogar"} title={"Physiotherapist"} image={"avatar2.png"} />
          <SearchCard name={"Aliza Rajput"} title={"Physiotherapist"} image={"avatar3.png"} />
          <SearchCard name={"Mah Noor"} title={"Physiotherapist"} image={"avatar4.png"} />
        </ul>
      </main>
    </div>
  )
}

export default Search