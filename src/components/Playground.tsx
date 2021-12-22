import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { performGetRequest } from '../services/apiService';

const Playground = (): JSX.Element => {
  const [inputValue, setInputValue] = React.useState('');
  const [playgroundResult, setPlaygroundResult] = React.useState([]);
  React.useEffect(() => {
    performGetRequest('characters').then((data) => setPlaygroundResult(data[0]));
  }, []);

  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-7 col-sm-12'>
        <h2 id='try-now'>Try it now!</h2>
        <Divider />
        <div className='p-col-12 mb-2'>
          <div className='p-inputgroup w-100'>
            <span className='p-inputgroup-addon'>
              https://bobsburgers-api.herokuapp.com/
            </span>
            <InputText
              placeholder='characters/1'
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />

            <Button
              label='Get'
              onClick={() => {
                performGetRequest(inputValue).then((data) => setPlaygroundResult(data));
              }}
            />
          </div>
        </div>
        <pre> {JSON.stringify(playgroundResult, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Playground;
