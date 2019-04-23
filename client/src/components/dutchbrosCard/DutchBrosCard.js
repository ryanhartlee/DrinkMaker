import React from "react";
import { Button, Card, Row, Col } from "react-materialize";
import "./DutchBrosCard.css";



const DutchBrosCard = props => {
  console.log(props);
  return (
    <Col m={6} s={12}>
      <div className="card"><style>{'.card { background: #fefe31; width:250%; height:450px;'}</style>

        
        <div className="card-image waves-effect waves-block waves-light"><i class="material-icons right"></i>
          <img className="activator" src={props.image} alt={props.name} 
          />

        </div>
        <div className="card-content">
          <span className="card-title activator">
            <span className="dutchbros-name">{props.name}</span>
          </span>
        </div>
        <div className="card-reveal">
          <div className="dutchbros-info">
            <div className="card-top">
              <div>
                <span className="card-title">
                  <span className="dutchbros-name">{props.name}</span>
                </span>
              </div>
              <div className="reveal-details">
                <div className="detail-item">
                  <span>Description:</span> <span>{props.description}</span>
                </div>
                <div className="detail-item">
                  <span>Recipe:</span>{" "}
                  <span>
                    <ul>
                      {props.recipe.map(ing => (
                        <li>{ing}</li>
                      ))}
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </Col>
  );
};

export default DutchBrosCard;