import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import './App.css';

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleButtonClick = () => {
    setAlertVisibility(true);
  };
  const onClose = () => {
    setAlertVisibility(false);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={onClose}> Your account has been created</Alert>
      )}
      <Button
        children="Signup"
        color="secondary"
        onClick={handleButtonClick}
      ></Button>
    </div>
  );
}

export default App;
