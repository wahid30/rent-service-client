import React from "react";
import useTitle from "../../hooks/useTitle";
import Moshjit from "../Shared/Moshjit/Moshjit";
import Services from "../Shared/Services/Services";
import SportsField from "../Shared/SportsField/SportsField";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Services></Services>
      <Moshjit></Moshjit>
      <SportsField></SportsField>
    </div>
  );
};

export default Home;
