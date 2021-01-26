import React, { useEffect, useContext, useState } from 'react';
import './PCustomization.css';
import * as Icon from 'react-feather';
import $ from 'jquery';
import Modal from '../../modal';
import ColorPicker from 'rc-color-picker';
import { Accordion, Card } from '../../accordion';
import { ButtonMenuContext, FormContext, FormContextProvider } from '../../../context';
import { Input } from '../../form';

function SectionParameters({ id, showColorPickerModal, colors, isModal }) {
  // const { setButtonList } = useContext(ButtonMenuContext);
  const formContext = useContext(FormContext);
  // TODO: set this with result of sending request to API
  const [apiError, setApiError] = useState(false);
  // TODO: this function should call API
  const editSection = (value) => {
    setApiError(true);
    console.log(value);
  };

  if (typeof isModal === 'undefined') {
    isModal = false;
  }

  useEffect(() => {
    // TODO: set corresponding validation for modal
    if (isModal && typeof formContext !== 'undefined') {
      formContext.setValidationFunction(() => () => true);
    }
    // TODO: set corresponding validation for the whole panel
  }, []);

  return (
    <div className="container-fluid">
      <div className="row row-with-margin-top align-items-center">
        <div className="col col-4">
          <span>Start:</span>
        </div>
        <div className="col col-8">
          <Input
            id={`${id}Start`}
            type="number"
            value=""
            onChange={(value) => console.log(value)}
            onBlur={editSection}
            isInvalid={apiError && `${id}Start` === formContext.lastEditedInput}
            required />
        </div>
      </div>
      <div className="row row-with-margin-top align-items-center">
        <div className="col col-4">
          <span>End:</span>
        </div>
        <div className="col col-8">
          <Input
            id={`${id}End`}
            type="number"
            value=""
            onChange={(value) => console.log(value)}
            onBlur={editSection}
            isInvalid={apiError && `${id}End` === formContext.lastEditedInput}
            required />
        </div>
      </div>
      <div className="row row-with-margin-top align-items-center">
        <div className="col col-4">
          <span>Color:</span>
        </div>
        <div className="col col-8">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Select color" />
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {colors.map((hex, index) => (
                <div className="dropdown-item" key={index} style={{ backgroundColor: hex }}><br /></div>
              ))}
              {typeof showColorPickerModal !== 'undefined' ? (
                <div className="dropdown-item" onClick={() => showColorPickerModal()}>New color</div>
              ) : (<></>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel() {
  const { setButtonList } = useContext(ButtonMenuContext);
  const [validationFunction, setValidationFunction] = useState(() => () => true);
  const [lastEditedInput, setLastEditedInput] = useState([]);
  const [currentSection, setCurrentSection] = useState(null);
  const [currentNewColor, setCurrentNewColor] = useState(null);
  const [colors, setColors] = useState([]);
  const [sections, setSections] = useState([]);
  // eslint-disable-next-line no-shadow
  const newSection = (sections) => {
    const l = sections.slice();
    const s = {
      i: sections.length === 0 ? 1 : sections.length + 1,
    };
    l.push(s);
    setCurrentSection(s.i);
    setSections(l);
  };
  // eslint-disable-next-line no-shadow
  const newColor = (colors, c) => {
    const l = colors.slice();
    l.push(c);
    setColors(l);
  };
  const showColorPickerModal = () => {
    $('#modalColorPicker').modal();
  };

  useEffect(() => {
    setButtonList([{
      Icon: Icon.Plus,
      title: 'New section',
      onClick: () => $('#modalNewSection').modal(),
    }]);
  }, []);

  return (
    <>
      <Modal
        id="modalNewSection"
        primaryBtn={{ text: 'OK', onClick: () => newSection(sections) }}
        secondaryBtn={{ text: 'CANCEL', onClick: () => null, dataDismiss: 'modal' }}>
        <SectionParameters id="newSection" colors={colors} isModal />
      </Modal>
      <Modal
        id="modalColorPicker"
        primaryBtn={{ text: 'OK', onClick: () => newColor(colors, currentNewColor), dataDismiss: 'modal' }}>
        <ColorPicker.Panel
          enableAlpha={false}
          onChange={(selected) => setCurrentNewColor(selected.color)} />
      </Modal>
      <FormContextProvider
        validationFunction={validationFunction}
        lastEditedInput={lastEditedInput}
        setValidationFunction={setValidationFunction}
        setLastEditedInput={setLastEditedInput}>
        <div className="container-fluid panel">
          <div className="row">
            <div className="col  col-12">
              <Accordion>
                {sections.map(({ i }) => (
                  <Card id={`card${i}`} title={`Section ${i}`} key={i} expanded={currentSection === i}>
                    <SectionParameters
                      id={`section${i}`}
                      showColorPickerModal={() => showColorPickerModal()}
                      colors={colors} />
                  </Card>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </FormContextProvider>
    </>
  );
}

export default Panel;
