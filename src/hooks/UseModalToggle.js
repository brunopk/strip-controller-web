import { useEffect, useContext, useState } from 'react';
import { DashboardContext } from '../context';
import $ from 'jquery';

function useModalToggle() {
  const { modalVisible, setModalVisible } = useContext(DashboardContext);
  const [aux, setAux] = useState(modalVisible);

  useEffect(() => {
    if (typeof setModalVisible !== 'undefined') {
      setModalVisible(aux);
    } else {
      throw new Error('setModalVisible not defined in DashboardContext');
    }
  }, [aux]);

  return [
    (id) => {
      $(`#${id}`).modal();
      setAux(true);
    },
    (id) => {
      $(`#${id}`).modal();
      setAux(false);
    }
  ];
}

export default useModalToggle;
