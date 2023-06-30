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
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me a Coffee"
        height={60}
        width={200}
      />
    </a>
  );
};

export default CoffeeButton;
