import React, { Component } from 'react';

class UpDownBtn extends Component{
    render() {
        const {value, fnUp, fnDown} = this.props;
        return (
            <div className="UpDownBtn">
                <button id="subBtn" onClick={fnDown}>-</button>
                <span id="numberPreview">{ value }</span>
                <button id="plusBtn" onClick={fnUp}>+</button>
            </div>
        )
    }
}

export default UpDownBtn;