import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const WeightedAvgMark = () => {
  const { classes } = useContext(GlobalContext);
  const credits = classes.map(c => c.credit);
  const marks = classes.map(c => c.mark);

  const sumProduct = credits.reduce((sum, val, i) => sum + val * marks[i], 0);
  const totalCredits = credits.reduce((sum, val) => sum + val, 0);

  const wam = (sumProduct / totalCredits).toFixed(2);

  console.log(sumProduct);
  console.log(totalCredits);
  console.log(wam);
  return (
    <>
      <div className='wam-container'>
        <div>
          <h4>Your WAM</h4>
          <p id='wam' className='score'>
            {wam > 0 ? wam : <span>Please add a subject</span>}
          </p>
        </div>
      </div>
      <form id='form-export'>
        <button className='btn'>Export to CSV file</button>
      </form>
    </>
  );
};
