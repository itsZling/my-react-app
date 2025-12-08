import { useState } from 'react';


function Button() {
    const [isActive, setIsActive] = useState(false);
    
    const toggleActive = () => {
      setIsActive(!isActive);
    };

    return(
        <div>
            <button onClick={toggleActive} className={isActive ? 'button-on' : 'button-off'}>Mode</button>
        </div>
    );
}

export default Button