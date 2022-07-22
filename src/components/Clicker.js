import { useState } from "react";

export const Clicker = () => {
  const [clicks, setClicks] = useState(0);

  const clickHandler = (event) => {
    setClicks((oldclicks) => oldclicks + 1);
  };

  const dangerClicks = clicks > 20;

  if (clicks > 30) {
    return <h1>Finished Clicks</h1>;
  }
  return (
    <div>
      {dangerClicks && <h1>Danger Clicks</h1>}
      <h3>{clicks > 10 ? "Medium Clicks" : "Normal clicks"}</h3>
      <button onClick={clickHandler}>{clicks}</button>
    </div>
  );
};
