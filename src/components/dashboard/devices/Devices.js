import React, { useEffect, useContext } from 'react';
import './Devices.css';
import '../../../css/colors.css';
import { Accordion, Card } from '../../accordion';
import { Danger } from '../../alert';
import { ButtonMenuContext, MainContext } from '../../../context';

// TODO: Device name and led number should come from API

function Devices() {
  const { setContextualButtonMenu } = useContext(ButtonMenuContext);
  const { deviceError } = useContext(MainContext);

  useEffect(() => {
    setContextualButtonMenu([]);
  }, []);

  return (
    <div className="container-fluid panel">
      <div className="row">
        <div className="col  col-12">
          <Accordion>
            <Card
              id="cardRpi3"
              title="Raspberry Pi 3"
              isError={deviceError != null || deviceError}
              onToggle={() => console.log('Call API')}
              expanded>
              <div className="container-fluid">
                {deviceError ? (
                  <div className="row mt-3 align-items-center">
                    <div className="col col-12">
                      <Danger>Error</Danger>
                    </div>
                  </div>
                ) : (<></>)}
                <div className="row mt-3 align-items-center">
                  <div className="col col-4">
                    <span>IP/Hostname:</span>
                  </div>
                  <div className="col col-8">
                    <input className="form-control" type="text" value="" onChange={() => null} />
                  </div>
                </div>
                <div className="row mt-3 align-items-center">
                  <div className="col col-4">
                    <span>Port:</span>
                  </div>
                  <div className="col col-8">
                    <input className="form-control" type="number" value="" />
                  </div>
                </div>
              </div>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Devices;
