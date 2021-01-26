import React, { useEffect, useContext, useState } from 'react';
import './PCustomization.css';
import * as Icon from 'react-feather';
import $ from 'jquery';
import Modal from '../../modal';
import ColorPicker from 'rc-color-picker';
import { Accordion, Card } from '../../accordion';
import { Danger } from '../../alert';
import { ButtonMenuContext, FormContext, FormContextProvider } from '../../../context';
import { Input } from '../../form';

function SectionParameters({
  id,
  currentButtonList,
  setCurrentButtonList,
  showColorPickerModal,
  colors,
  isModal }) {
  const {
    apiError,
    editedInputs,
    setValidationFunction,
    setApiError,
    setEditedInputs } = useContext(FormContext);
  // TODO: this function should call API
  const editSection = (value) => {
    // TODO: set this with result of sending request to API
    setApiError('Replace this with the corresponding error message');
    console.log(value);
  };

  if (typeof isModal === 'undefined') {
    isModal = false;
  }

  // Sets form validations
  useEffect(() => {
    // TODO: set corresponding validation for modal
    if (isModal) {
      setValidationFunction(() => () => true);
    }
    // TODO: set corresponding validation for the whole panel
  }, []);

  // Update contextual button menu
  useEffect(() => {
    if (!isModal) {
      let newButtonList = null;
      // If any input changes -> add upload button
      if (editedInputs.length > 0) {
        // Prevents adding same button twice
        if (currentButtonList.filter((x) => x.Icon === Icon.Upload).length === 0) {
          newButtonList = [{
            Icon: Icon.Upload,
            title: 'Send changes',
            onClick: () => {
              setEditedInputs([]);
              console.log('Send changes');
            }
          }, ...currentButtonList];
        } else {
          newButtonList = currentButtonList.slice();
        }
      // If upload button was pressed -> all inputs are in unchanged state -> remove upload button
      } else {
        newButtonList = currentButtonList.filter((x) => x.Icon !== Icon.Upload);
      }
      setCurrentButtonList(newButtonList);
    }
  }, [editedInputs]);

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
            onChange={() => null}
            onBlur={editSection}
            isInvalid={apiError && editedInputs.filter((x) => `${id}Start` === x).length > 0}
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
            onChange={() => null}
            onBlur={editSection}
            isInvalid={apiError && editedInputs.filter((x) => `${id}End` === x).length > 0}
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
  const [currentButtonList, setCurrentButtonList] = useState([]);
  const [validationFunction, setValidationFunction] = useState(() => () => true);
  // TODO: set this with result of sending request to API (probably it should be a string)
  const [apiError, setApiError] = useState(false);
  const [editedInputs, setEditedInputs] = useState([]);
  const [lastEditedInput, setLastEditedInput] = useState(null);
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
    const newButtonList = currentButtonList.slice();
    if (newButtonList.filter((x) => x.Icon === Icon.Plus).length === 0) {
      newButtonList.push({
        Icon: Icon.Plus,
        title: 'New section',
        onClick: () => $('#modalNewSection').modal(),
      });
    }
    setCurrentButtonList(newButtonList);
    setButtonList(newButtonList);
  }, [currentButtonList.length]);

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
        editedInputs={editedInputs}
        apiError={apiError}
        setValidationFunction={setValidationFunction}
        setLastEditedInput={setLastEditedInput}
        setApiError={setApiError}
        setEditedInputs={setEditedInputs}>
        <div className="container-fluid panel">
          {apiError ? (
            <div className="row">
              <div className="col col-12">
                <Danger>
                  {apiError}
                </Danger>
              </div>
            </div>
          ) : (<></>)}
          <div className="row">
            <div className="col  col-12">
              <Accordion>
                {sections.map(({ i }) => (
                  <Card id={`card${i}`} title={`Section ${i}`} key={i} expanded={currentSection === i}>
                    <SectionParameters
                      id={`section${i}`}
                      currentButtonList={currentButtonList}
                      setCurrentButtonList={setCurrentButtonList}
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
