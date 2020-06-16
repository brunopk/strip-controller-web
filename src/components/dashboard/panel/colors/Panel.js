import React from "react";
import ColorPicker from "rc-color-picker";
import "../Panel.css"
import "./Panel.css"

function Color({rgbValue}) {

    return (
        <div className="col-sm-12 col-md-2 col-lg-2 col-custom">
            <div class="card">
                <div class="card-body text-right" style={{backgroundColor: `rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`}}>
                    <button className="btn btn-danger btn-delete">
                        <strong>X</strong>
                    </button>
                </div>
                <div class="card-footer" style={{backgroundColor: `rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`}}>
                    <ColorPicker enableAlpha={false} animation="slide-up" color={'#36c'}/>
                </div>
            </div>
        </div>
    );
}


function Panel() {

    let colors = [[123, 123, 123], [45, 0, 54], [124, 43, 34], [123, 123, 123], [45, 0, 54], [124, 43, 34], [123, 123, 123], [45, 0, 54], [124, 43, 34], [123, 123, 123], [45, 0, 54]];

    return (
      <div className="container-fluid panel">
          <div className="row">
              {colors.map(rgbValue => <Color rgbValue={rgbValue}/>)}
              <div className="col-sm-12 col-md-2 col-lg-2 col-custom">
                  <button className="btn btn-light btn-add-color active">
                      <strong>+</strong>
                  </button>
              </div>
          </div>
      </div>
    );
}

export default Panel;
