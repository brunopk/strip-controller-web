import React, { useEffect, useContext, useState } from 'react';
import './Customization.css';
import '../../../css/colors.css';
import * as Icon from 'react-feather';
import $ from 'jquery';
import Modal from '../../modal';
import ColorPicker from 'rc-color-picker';
import { Accordion, Card } from '../../accordion';
import { Danger } from '../../alert';
import { ButtonMenuContext, DashboardContext, FormContext, FormContextProvider } from '../../../context';
import { Input } from '../../form';

// TODO: validate inputs when uploading (pressing upload button )

function SectionParameters({
  id,
  cardId,
  currentButtonMenu,
  setCurrentButtonMenu,
  showColorPickerModal,
  colors,
  isModal }) {
  const {
    apiError,
    editedInputs,
    setValidationFunction,
    setApiError,
    setEditedInputs } = useContext(FormContext);
    /* eslint-disable no-shadow */
  const onBlurSectionInput = (id, editedInputs) => (value) => {
    // TODO: update a Panel state variable to collect data of all sections
    const input = editedInputs.filter((x) => x.id === id)[0];
    // TODO: remove this
    setApiError('Replace this with the corresponding error message');
    if (typeof input !== 'undefined') {
      input.parentCardId = cardId;
    } else {
      const aux = editedInputs.slice();
      aux.push({ id, cardId });
      setEditedInputs(aux);
    }
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
      let newButtonMenu = null;
      // If any input changes
      // -> add upload button
      if (editedInputs.length > 0) {
        // Prevents adding same button twice
        if (currentButtonMenu.filter((x) => x.Icon === Icon.Upload).length === 0) {
          newButtonMenu = [{
            Icon: Icon.Upload,
            title: 'Send changes',
            onClick: () => {
              setEditedInputs([]);
              console.log('Send changes to API');
            }
          }, ...currentButtonMenu];
        } else {
          newButtonMenu = currentButtonMenu.slice();
        }
      // If editedInputs === []
      // -> upload button was pressed
      // -> all inputs are in unchanged state
      // -> remove upload button
      } else {
        newButtonMenu = currentButtonMenu.filter((x) => x.Icon !== Icon.Upload);
      }
      setCurrentButtonMenu(newButtonMenu);
    }
  }, [editedInputs]);

  return (
    <div className="container-fluid">
      <div className="row mt-3 align-items-center">
        <div className="col col-4">
          <span>Start:</span>
        </div>
        <div className="col col-8">
          <Input
            id={`${id}Start`}
            type="number"
            value=""
            onChange={() => null}
            onBlur={onBlurSectionInput(`${id}Start`, editedInputs)}
            isInvalid={apiError && editedInputs.filter((x) => `${id}Start` === x.id).length > 0}
            required />
        </div>
      </div>
      <div className="row mt-3 align-items-center">
        <div className="col col-4">
          <span>End:</span>
        </div>
        <div className="col col-8">
          <Input
            id={`${id}End`}
            type="number"
            value=""
            onChange={() => null}
            onBlur={onBlurSectionInput(`${id}End`, editedInputs)}
            isInvalid={apiError && editedInputs.filter((x) => `${id}End` === x.id).length > 0}
            required />
        </div>
      </div>
      <div className="row mt-3 align-items-center">
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
              {colors.map(({ hex }, index) => (
                <div className="dropdown-item" key={index} style={{ backgroundColor: `#${hex}` }}>
                  <br />
                </div>
              ))}
              {typeof showColorPickerModal !== 'undefined' ? (
                <div className="dropdown-item" onClick={() => showColorPickerModal()}>
                  <Icon.Plus className="text-primary" />
                </div>
              ) : (<></>)}
            </div>
          </div>
        </div>
      </div>
      {!isModal ? (
        <div className="row mt-5 ">
          <div className="col-12 justify-content-end align-items-center d-flex">
            <Icon.Trash2 className="btn-link" height={24} />
          </div>
        </div>
      ) : (<></>)}
    </div>
  );
}

function Customization() {
  const { contextualButtonMenu, setContextualButtonMenu } = useContext(ButtonMenuContext);
  const { data, colors, setData, setColors } = useContext(DashboardContext);
  const [validationFunction, setValidationFunction] = useState(() => () => true);
  // TODO: set this with result of sending request to API (probably it should be a string)
  const [apiError, setApiError] = useState(false);
  const [editedInputs, setEditedInputs] = useState([]);
  const [lastEditedInput, setLastEditedInput] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [currentNewColor, setCurrentNewColor] = useState(null);
  const [sections, setSections] = useState([]);

  // TODO: call API in onToggle function
  // eslint-disable-next-line no-shadow
  const newSection = (sections) => {
    const l = sections.slice();
    const s = {
      i: sections.length === 0 ? 1 : sections.length + 1,
      onToggle: (isOn) => console.log(isOn)
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

  console.log(data);

  useEffect(() => {
    const newButtonMenu = contextualButtonMenu.slice();
    if (newButtonMenu.filter((x) => x.Icon === Icon.Plus).length === 0) {
      newButtonMenu.push({
        Icon: Icon.Plus,
        title: 'New section',
        onClick: () => {
          $('#modalNewSection').modal();
          setData('CUSTOMIZATION TEST');
        },
      });
    }
    setContextualButtonMenu(newButtonMenu);
  }, [contextualButtonMenu.length]);

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
            <div className="row mb-3">
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
                {sections.map(({ i, onToggle }) => (
                  <Card
                    id={`card${i}`}
                    title={`Section ${i}`}
                    key={i}
                    isError={apiError && editedInputs.filter((x) => x.cardId === `card${i}`).length > 0}
                    expanded={currentSection === i}
                    onToggle={onToggle}>
                    <SectionParameters
                      id={`section${i}`}
                      cardId={`card${i}`}
                      currentButtonMenu={contextualButtonMenu}
                      setCurrentButtonMenu={setContextualButtonMenu}
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

export default Customization;
