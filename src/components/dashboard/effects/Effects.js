import React from 'react';
import './Effects.css';
import * as Icon from 'react-feather';

function Effects() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="container-fluid panel">
      <div className="row">
        {array.map((v) => (
          <div className="col-sm-12 col-md-2 col-lg-2">
            <div className="container-fluid effect-container bg-primary">
              <div className="row row-1">
                <div className="col-4 offset-4 text-center align-self-center">
                  <Icon.Star height={30} width={30} color="white" />
                </div>
              </div>
              <div className="row row-2 text-center">
                <div className="col text-center align-self-center">
                  <span>
                    <strong>
                      Effect
                      {v}
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Effects;
