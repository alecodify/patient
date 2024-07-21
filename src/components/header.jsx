import React from 'react'

const Header = ({header, title, main}) => {
    
    return (
        <div className='header'>
            <div className='left'>
                <h1>{main === "" ? title : main}</h1>
                <ul className='breadcrumb'>
                    <li><a href="#">{header}</a></li>
                    <li>/</li>
                    <li><a href="#" className='active'>{title}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header