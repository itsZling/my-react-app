import { useState } from 'react';

function Card(props) {
        const [isActive, setIsActive] = useState(false);
        
        const toggleActive = () => {
          setIsActive(!isActive);
        };

    return(
        <button onClick={toggleActive} className={`my-element ${isActive ? 'card-button-active' : 'card-button-inactive'}`}>
            <div className="card">
                <img className='card-image' src={props.pfp} alt="profile picture" />
                <h2 className={`my-element ${isActive ? 'card-title-active' : 'card-title-inactive'}`}>{props.name}</h2>
                <p className={`my-element ${isActive ? 'card-description-active' : 'card-description-inactive'}`}>2nd year CS Major @ the Georgia Institue of technology.</p>
            </div>
        </button>
    );
}

export default Card