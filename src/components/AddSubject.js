import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const AddSubject = () => {
  //Component level state (hooked to JSX)
  const [code, setCode] = useState('');
  const [credit, setCredit] = useState();
  const [mark, setMark] = useState();
  const { addSubject } = useContext(GlobalContext);

  //Passing state to object
  const onSubmit = e => {
    e.preventDefault();
    const newSubject = {
      id: Math.floor(Math.random() * 1000000),
      code,
      credit: +credit,
      mark: +mark
    };

    addSubject(newSubject);
  };

  return (
    <>
      <h3>Add a subject</h3>
      <form onSubmit={onSubmit}>
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
            onChange={e => setMark(parseInt(e.target.value, 10))}
          />
        </div>
        <button className='btn'>Add subject</button>
      </form>
    </>
  );
};
