import { useLoaderData } from "react-router-dom";
import { fetchData } from "../../utilities/localStorage";
import Intro from "../Intro/Intro";
import { toast } from "react-toastify";

const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};
export { dashboardLoader };

export async function dashboardAction({request}) {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    try {
        localStorage.setItem("userName", JSON.stringify(formData.userName));
        return toast.success(`Welcome, ${formData.userName}`);
    } catch (e) {
        throw new Error("There was a problem creating your account.",e)
    }
}

const DashBoard = () => {
  const { userName } = useLoaderData();
  return (
  <div>
    {
        userName ? <p>{userName}</p> : <Intro/>
    }
  </div>
  );
};

export default DashBoard;
