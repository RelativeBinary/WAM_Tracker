import React, { useContext } from 'react';
import { Subject } from './Subject';
import { GlobalContext } from '../context/GlobalState';

export const SubjectList = () => {
  const context = useContext(GlobalContext);
  const { classes } = useContext(GlobalContext);
  // console.log(context);
  // May change c.mark into its on Mark component to make more detailed. It would either have a red or green tip if the score is either good or bad.

  return (
    <>
      <h3>Subjects</h3>
      <ul className='list'>
        {classes.map(c => (
          <Subject key={c.id} subject={c} />
        ))}
      </ul>
    </>
  );
};
