import React from 'react';

export const ImportCSV = () => {
  return (
    <>
      <h3>Import Subject Data</h3>
      <form id='form-import'>
        <p>
          Paste data from a text file in the following format to mass add
          subjects. Or enter manually.
        </p>
        <textarea
          name='input-text'
          id='input-text'
          cols='46'
          rows='10'
          placeholder='subject,credits,final mark
          subject,credits,final mark'
        ></textarea>
        <button className='btn'>Calculate WAM</button>
      </form>
    </>
  );
};
