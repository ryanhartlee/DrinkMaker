import React from "react";
import { Col } from "react-materialize";
import "./StarbucksCard.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const StarbucksCard = (props) => {
  // console.log(props.recipe);

  // console.log(props);
  return (
    
    <Col m={4} s={12}>
     
     
      
      <div className="card"><style>{'.card { background: #009051; width:250%; height:450px;'}</style>

        
        <div className="card-image waves-effect waves-block waves-light"><style>{'.card { height:400px;'}</style>
          <img className="activator" src={props.image} alt={props.name} 
          />

        </div>
        <div className="card-content"><FontAwesomeIcon icon="heart" pull= "right" />
        
          <span className="card-title activator">
            <span className="starbucks-names"> {props.name}</span>
          </span>
        
          
          
        </div>
        <div className="card-reveal">
          <div className="starbucks-info">
            <div className="card-top">
              <div>
                <span className="card-title"><span><i className="material-icons right">close</i></span>
                  <span className="starbucks-name">{props.name}</span>
                </span>
              </div>
              <div className="reveal-details">
                <div className="detail-item row">
                  <span><strong>Description:</strong></span> 
                 
                  <span>{props.description}</span>
                  
                </div>
                <div className="detail-item row">
                  <span><strong>Recipe:</strong></span>
                  <span>
                    <ul>
                      {props.recipe.map(ing => (
                        <li className="list">{ing}</li>
                      ))}
                      
                    </ul>
                  </span>
                </div>
                {props.children}
              </div>
            </div>
          </div>
        </div>
        </div>
        
        </Col>
  

  );
                      
                      
};



export default StarbucksCard;
