import React, {useState} from "react";
import {replace} from "../../../utils/array"
import ColorPicker from "rc-color-picker";
import "./Panel.css"
import * as Icon from 'react-feather';

function Color({hex, onChangeHex, onSelect, editable}) {

    // TODO implement delete

    const handleCloseColorPicker = (pepe) => {
      onChangeHex(pepe.color)
    }

    let first = <div class="col-4 col-mode" onClick={() => onSelect()} />
    let middle = <div class="col-4 col-mode" onClick={() => onSelect()}/> 
    let last = <div class="col-4 col-mode" onClick={() => onSelect()} />

    if(editable){
      first = 
        <div class="col-4 col-mode">
          <ColorPicker enableAlpha={false} animation="slide-up" onClose={handleCloseColorPicker}>
            <Icon.Edit className="react-custom-trigger" color="white" />
          </ColorPicker>
        </div>
      middle = <div class="col-4 col-mode"><Icon.Play color="white" onClick={() => onSelect()}/></div>
      last = 
        <div class="col-4 col-mode">
          <Icon.X color="white" />
        </div>
    }
    
    
    return (
      <div className="col-sm-12 col-md-2 col-lg-2">
        <div class="container-fluid color-container" >
          <div class="row align-items-center" style={{backgroundColor: hex}}> 
            {first}
            {middle}
            {last}
          </div>
        </div>
      </div>
    );
}

function Panel({values, onChose, editable }) {

    const [colorList, setColorList] = useState(values);
    let newColor = (l) => () => {let _l = l.slice(); _l.push("#000000"); setColorList(_l)}
    let editColor = (l, oldHex) => (newHex) => {let _l = replace(l, oldHex, newHex);console.log(_l);  setColorList(_l) }
    let addColorColumn = <></>

    if(editable)
      addColorColumn = 
        <div className="col-sm-12 col-md-2 col-lg-2 col-custom" onClick={newColor(colorList)}>
          <div class="container-fluid color-container add-color-container">
            <div class="row align-items-center">
              <div class="col-4 offset-4 add-color-col">
                <Icon.Plus color="black" />
              </div>
            </div>
          </div>
        </div>

    return (
      <div className="container-fluid panel">
          <div className="row">
              {colorList.map(v => <Color 
                hex={v} 
                editable={typeof(editable) !== 'boolean' ? false : editable}
                onChangeHex={editColor(colorList, v)} 
                onSelect={() => onChose(v)} />)
              }
              {addColorColumn}
          </div>
      </div>
    );
}

export default Panel;
