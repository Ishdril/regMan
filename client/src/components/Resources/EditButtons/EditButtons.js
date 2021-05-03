import React from 'react';
import './EditButtons.css';

// Display component. Displays different buttons depending on the isEditting value. The button functionality
// is handled by the parent component. buttonFunctionality is an object containing the callback functions for each
// button interaction.

const EditButtons = ({buttonFunctionality, isEditting}) => {
  const { editParticipant, cancelChanges, submitChanges } = buttonFunctionality;
  return (
    <div className="edit-buttons">
      <div>
        <button title='save' type='button' onClick={submitChanges} className={isEditting ? '' : 'hidden-button'}>Save changes</button>
        <button title='edit' type='button' onClick={editParticipant} className={isEditting ? 'hidden-button' : ''}>Edit contact</button>
        <button title='cancel' type='button' onClick={cancelChanges} className={isEditting ? '' : 'hidden-button'}>Cancel changes</button>
      </div>
    </div>
  );
}

export default EditButtons;
