import React, { useEffect, useState } from "react";

const SingleColor = ({ hex, index, rgb, weight }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hex}`;
  const bcg = rgb.join(",");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p>{weight}%</p>
      <p>{hexValue}</p>
      <p
        style={{
          opacity: `${alert ? "1" : "0"}`,
          fontSize: "0.85rem",
          marginTop: "0.5rem",
        }}
      >
        copied to clipboard
      </p>
    </article>
  );
};

export default SingleColor;
