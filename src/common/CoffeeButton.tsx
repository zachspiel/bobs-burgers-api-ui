import React from 'react';

const CoffeeButton = (): JSX.Element => {
  return (
    <a
      href="https://www.buymeacoffee.com/bobsburgersapi"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        style={{ height: '60px', width: '200px' }}
      />
    </a>
  );
};

export default CoffeeButton;
