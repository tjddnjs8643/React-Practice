import React from 'react';
import ThankyouDialog from './ThankyouDialog'
import {createPortal} from "react-dom"
const Portal = (props) =>{
  return createPortal(props.children, document.getElementById("portal"))
}

const Example = () => {
  return (
    <div>
      <Portal>
        <ThankyouDialog/>
      </Portal>
      <div style={{
        position: "absolute"
      }}>
        <button>asdasda</button>
      </div>
    </div>
  );
};

export default Example;