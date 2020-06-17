import React, {useState} from "react";
import ColorPicker from "rc-color-picker";
import "./Panel.css"
import * as Icon from 'react-feather';
import * as $ from 'jquery'

function Color({rgbValue}) {

    // TODO its not necessary to use hooks for mode, just onclik for icons
    const Mode = {
      EDIT: 1,
      PLAY: 2,
      DELETE: 3
    }
    const [mode, setMode] = useState(Mode.PLAY);
    const handleChangeMode = (mode) => () => setMode(mode)
    const handleClick = (_mode) => () => {
      // TODO handle click for other modes
      switch(_mode){
        case Mode.EDIT: alert('EDIT'); break;
        case Mode.DELETE: alert('DELETE'); break;
        default: alert('PLAY'); break;
      }
    }
    
    return (
      <div className="col-sm-12 col-md-2 col-lg-2">
        <div class="container-fluid color-container" onClick={handleClick(mode)} >
          <div class="row align-items-center" style={{backgroundColor: `rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`}}>
            <div class="col-4 col-mode" onMouseEnter={handleChangeMode(Mode.EDIT)}>
              <ColorPicker enableAlpha={false} animation="slide-up">
                <Icon.Edit className="react-custom-trigger" color="white" />
              </ColorPicker>
            </div>
            <div class="col-4 col-mode" onMouseEnter={handleChangeMode(Mode.PLAY)}>
              <Icon.Play color="white" />
            </div>
            <div class="col-4 col-mode" onMouseEnter={handleChangeMode(Mode.DELETE)}>
              <Icon.X color="white" />
            </div>
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
                <div class="container-fluid color-container add-color-container">
                  <div class="row align-items-center">
                    <div class="col-4 offset-4 add-color-col">
                      <Icon.Plus color="black" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    );
}

export default Panel;
