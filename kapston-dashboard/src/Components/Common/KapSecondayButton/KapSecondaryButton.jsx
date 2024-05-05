import React from 'react';
import './KapSecondayButton.scss';

function KapSecondaryButton(props) {
    const { buttonText, disabled, onClick } = props;
    return (
      <button type ='button' className="kaps-secondary-button" onClick={onClick} disabled={disabled}>
        {buttonText}
      </button>
    );
}

export default KapSecondaryButton
