import React from "react";
import "./index.scss";

const Portfolio = () => { 

    return (
        <>
            <div className= "project-container">
        <h1>
          Some of the projects I have worked on:
        </h1>
        <h3>
          WerkSheets: 
        </h3>
        <p>
          While interning at Saltech Systems I implemented many features on frontend and backend. The web-app was built using Angular for the frontend and cfwheels for the backend. Check it out <a href = "https://werksheets.com/">here</a>
        </p>
        <h3>
          Kingdom Klash:
        </h3>
        <p>
          During my third year at Iowa State I worked on a 4 player live strategy base mobile game. This was a class project done with 3 other classmates. The app was made using andriod studio and springboot. I worked on the frontend and implemented the player movement and resource gathering. 
        </p>
        <h3>
          Portfolio:
        </h3>
        <p>
          I made this site using react and hosted it through firebase. You can see the code <a href = "https://github.com/jacob-kelderman/portfolio">here</a>.
        </p>
      </div>
        </>
    );
}

export default Portfolio;