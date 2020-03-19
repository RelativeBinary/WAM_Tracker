import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const SubjectList = () => {
  const context = useContext(GlobalContext);
  const { classes } = useContext(GlobalContext);
  // console.log(context);

  return (
    <>
      <h3>Subjects</h3>
      <ul className='list'>
        {classes.map(c => (
          <li className='minus'>
            <span>{c.code}</span>
            <span>{c.credit}</span>
            <span>87</span>
            <button className='delete-btn'>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};
