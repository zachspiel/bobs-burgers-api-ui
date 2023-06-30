import Navbar from "@bobs-burgers-api/components/common/Navbar";
import Image from "next/image";
import { useMemo } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const TOTAL_GIFS = 5;
  const getRandomInt = () => {
    return Math.floor(Math.random() * TOTAL_GIFS) + 1;
  };

  const gifIndex = useMemo(() => getRandomInt(), []);

  return (
    <div className="container-fluid">
      <Navbar parentClassName="custom-menubar" />
      <div className="row p-5 justify-content-center mt-5">
        <div className="col-sm-12 col-md-9 d-flex flex-column ">
          <h3 className="fw-bold">Sorry, page not found.</h3>

          <Image
            src={`/assets/images/404-${gifIndex}.gif`}
            width={300}
            height={300}
            style={{
              minHeight: "225px",
              minWidth: "225px",
              maxWidth: "500px",
              objectFit: "contain",
            }}
            alt="404 error gif"
          />
        </div>
      </div>
    </div>
  );
}
