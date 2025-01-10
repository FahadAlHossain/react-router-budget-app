import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../../utilities/localStorage";
import wave from "../../assets/wave.svg"
import Nav from "../Nav/Nav";

const mainLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};
export { mainLoader };

const Main = () => {
  const { userName } = useLoaderData();
  return (
  <div className="layout">
    <Nav userName={userName}/>
    <Outlet></Outlet>
    <img src={wave} alt="" />
  </div>
  );
};

export default Main;
