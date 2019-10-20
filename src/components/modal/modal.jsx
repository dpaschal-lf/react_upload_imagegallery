import React from 'react';
import './modal.css';

export default (props)=>{
    //debugger;
    let showModal = false;
    if( props.children ){
        if(Array.isArray(props.children)){
            if(props.children.length){
                showModal = true;
            }
            
        } else {
            showModal = true;
        }
    }
    return (
    <div className="modalShadow" style={{ visibility: showModal ? 'visible' : 'hidden'}}>
        <div className="modalBody">
            <div className="modalClose" onClick={props.closeModal}>X</div>
            <div className="modalContent">
                {props.children}
            </div>
        </div>
    </div>
    );
}