import React from 'react';

const ListItem = ({ toggleStatus, setJobStatus, color, text }) => {
  return (
    <li
      onClick={() => {
        toggleStatus();
        setJobStatus(color);
      }}
    >
      {text}
    </li>
  );
};

export default ListItem;
