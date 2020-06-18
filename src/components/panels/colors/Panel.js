import React, {useState} from "react";
import {replaceAt} from "../../../utils/array"
import ColorPicker from "rc-color-picker";
import "./Panel.css"
import * as Icon from 'react-feather';

function Color({hex, onChangeHex, onSelect, editable}) {

    // TODO implement delete

    const handleCloseColorPicker = (pepe) => {
      onChangeHex(pepe.color)
    }

    let first = <div className="col-4 col-mode" onClick={() => onSelect()} />
    let middle = <div className="col-4 col-mode" onClick={() => onSelect()}/> 
    let last = <div className="col-4 col-mode" onClick={() => onSelect()} />

    if(editable){
      first = 
        <div className="col-4 col-mode">
          <ColorPicker enableAlpha={false} animation="slide-up" onClose={handleCloseColorPicker}>
            <Icon.Edit className="react-custom-trigger" color="white" />
          </ColorPicker>
        </div>
      middle = <div className="col-4 col-mode"><Icon.Play color="white" onClick={() => onSelect()}/></div>
      last = 
        <div className="col-4 col-mode">
          <Icon.X color="white" />
        </div>
    }
    
    
    return (
      <div className="col-sm-12 col-md-2 col-lg-2">
        <div className="container-fluid color-container" >
          <div className="row align-items-center" style={{backgroundColor: hex}}> 
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
    let editColor = (l, index) => (newHex) => {let _l = replaceAt(l, index, newHex);console.log(_l);  setColorList(_l) }
    let addColorColumn = <></>

    if(editable)
      addColorColumn = 
        <div className="col-sm-12 col-md-2 col-lg-2 col-custom" onClick={newColor(colorList)}>
          <div className="container-fluid color-container add-color-container bg-primary">
            <div className="row align-items-center">
              <div className="col-4 offset-4 text-center">
                <Icon.Plus color="white" />
              </div>
            </div>
          </div>
        </div>

    return (
      <div className="container-fluid panel">
          <div className="row">
              {colorList.map((v, k) => <Color 
                hex={v} 
                editable={typeof(editable) !== 'boolean' ? false : editable}
                onChangeHex={editColor(colorList, k)} 
                onSelect={() => onChose(v)} />)
              }
              {addColorColumn}
          </div>
      </div>
    );
}

export default Panel;
