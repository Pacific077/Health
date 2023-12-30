import React, { useEffect, useContext } from "react";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import UserContext from "../../context/users/UserContext";

const Home = () => {
  const usercontext = useContext(UserContext);
  const { GetProfile } = usercontext;
  useEffect(() => {
    GetProfile();
  }, []);
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;
//activity tracker
//water tracker
//sleep tracker

//appointmetns 
//if doctor id === user id then show accept reject button