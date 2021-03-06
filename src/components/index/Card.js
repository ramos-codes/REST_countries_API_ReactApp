import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Card.css';
import '../../styles/darkMode.css'

import DarkModeContext from '../../contexts/DarkModeContext';

const Card = ({
    flag,
    name,
    population,
    region,
    capital,
    nationId
}) => {
    
    const context = useContext(DarkModeContext)

    return (
        <div className={`card-body ${context.darkmode ? 'dark-element' : '' }`}>
            <img 
                className="card-image"
                src={flag} 
                alt={name}
            />
            <div className="card-content-container">
                <Link to={`/nation/${name}`} className="card-link">
                    <h1 className="card-title">
                        {name}
                    </h1>
                </Link>
                <div className="card-content-row">
                    <h4 className="card-content-label">
                        Population: 
                    </h4>
                    <p className="card-content-text">
                        {population}
                    </p>
                </div>
                <div className="card-content-row">
                    <h4 className="card-content-label">
                        Region:
                    </h4>
                    <p className="card-content-text">
                        {region}
                    </p>
                </div>
                <div className="card-content-row">
                    <h4 className="card-content-label">
                        Capital: 
                    </h4>
                    <p className="card-content-text">
                        {capital || 'Undeclared*'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card
