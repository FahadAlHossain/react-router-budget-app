import { useLoaderData } from "react-router-dom";
import { fetchData } from "../../utilities/localStorage";

const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};
export { dashboardLoader };

const DashBoard = () => {
  const { userName } = useLoaderData();
  return (
  <div>
    <h1>{userName}</h1>
    Dash
  </div>
  );
};

export default DashBoard;
