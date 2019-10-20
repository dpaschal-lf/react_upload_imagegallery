import React from 'react';

export default props => {
    const clickHandler = ()=>{
        if(props.handleImageClick){
            props.handleImageClick(props.url)
        }
    }
    return (<div className="item" style={{'backgroundImage':`url('${props.url}')`}} onClick={clickHandler}></div>);
}
