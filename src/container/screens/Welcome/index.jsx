import React from "react";
import { useHistory } from "react-router";
import FeatureComponent from "./Features";

const WelcomeScreen = () => {
  const history = useHistory();
  const goto = (link) => {
    history.push(link)
  }
  return (
    <div>
      {/* <MyAnimation> */}
        <FeatureComponent goto={goto}/>
      {/* </MyAnimation> */}
    </div>
  );
};

export default WelcomeScreen;
