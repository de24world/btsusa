import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12618.779420223822!2d-122.2029607!3d37.7503024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6497349cedd00de4!2sOracle+Arena!5e0!3m2!1sde!2sde!4v1536652740805" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;

