// React-router-dom imports
import { useLoaderData } from "react-router-dom";

// Library imports
import { toast } from "react-toastify";

// Component imports
import Intro from "../components/Intro";

// Helper functions
import { fetchData } from "../helpers";

// Loader function
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// Action functions
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}!`);
  } catch (error) {
    throw new Error("There was a problem creating your account.");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return <div>{userName ? <p>{userName}</p> : <Intro />}</div>;
};

export default Dashboard;
