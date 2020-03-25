import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Subject = ({ subject }) => {
  console.log('testing subject.js');
  console.log(subject);
  const { deleteSubject } = useContext(GlobalContext);

  return (
    <>
      <li className='minus'>
        <span>{subject.code}</span>
        <span>{subject.credit}</span>
        <span>{subject.mark}</span>
        <button
          className='delete-btn'
          onClick={() => deleteSubject(subject.id)}
        >
          x
        </button>
      </li>
    </>
  );
};
