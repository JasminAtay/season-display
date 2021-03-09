import React from 'react'
import './SeasonDisplay.css'


const getSeason = (en, ay) =>{
    if(ay > 2 && ay < 9){
        return en  > 0 ? "summer" : "winter";
    } else {
        return en < 0 ? "winter" : "summer";
    }
}

const seasonDisplayConfig = {
    winter:{
        text: ".. spring is soon",
        background: 'https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'
    },
    summer:{
        text: ".. summer time",
        background: 'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
    },
}


const SeasonDisplay = ({enlem}) => {
    const season = getSeason(enlem , new Date().getMonth());
    const {text, background} = seasonDisplayConfig[season];
    
    return (
        <div className={`season-display ${season}`}
        style = {{background: `url(${background})`}}>
            <h3>{text}</h3>
        </div>
    )
}

export default SeasonDisplay
