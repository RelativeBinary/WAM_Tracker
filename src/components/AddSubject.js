import React, { useState } from 'react';

export const AddSubject = () => {
  const [code, setCode] = useState('');
  const [credit, setCredit] = useState();
  const [mark, setMark] = useState();

  return (
    <>
      <h3>Add a subject</h3>
      <form id='form'>
        <div className='form-control'>
          <label htmlFor='code'>Subject Code</label>
          <input
            type='text'
            id='code'
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder='Enter subject code...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='credit'>Credits</label>
          <input
            type='number'
            id='credit'
            value={credit}
            onChange={e => setCredit(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='mark'>Final Mark</label>
          <input
            type='number'
            id='mark'
            value={mark}
            onChange={e => setMark(e.target.value)}
          />
        </div>
        <button className='btn'>Add subject</button>
      </form>
    </>
  );
};
