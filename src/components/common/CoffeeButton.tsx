import React from "react";
import Image from "next/image";

const CoffeeButton = (): JSX.Element => {
  return (
    <a
      href="https://www.buymeacoffee.com/bobsburgersapi"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="/assets/images/buy-me-a-coffe-button.png"
        alt="Buy Me a Coffee"
        height={60}
        width={200}
      />
    </a>
  );
};

export default CoffeeButton;
