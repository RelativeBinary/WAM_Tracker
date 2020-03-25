import React from 'react';

export const ImportCSV = () => {
  return (
    <>
      <h3>Import Subject Data CSV File</h3>
      <form id='form-import'>
        <p>
          The format of the CSV sshould be a .txt file with each subject listed
          like the example below:
        </p>
        <p>
          CSIT111;6;87;
          <br />
          CSIT111;6;87;
          <br />
          CSIT111;6;87;
          <br />
          CSIT111;6;87;
        </p>
        <button className='btn'>Import a CSV file</button>
      </form>
    </>
  );
};
