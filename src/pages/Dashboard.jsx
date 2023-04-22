// React-router-dom imports
import { useLoaderData } from "react-router-dom";

// Library imports
import { toast } from "react-toastify";

// Component imports
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// Helper functions
import { createBudget, fetchData, pretendWait } from "../helpers";

// Loader function
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

// Action functions
export async function dashboardAction({ request }) {
  await pretendWait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // New user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}!`);
    } catch (error) {
      throw new Error("There was a problem creating your account.");
    }
  }

  // New budget creation
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created!");
    } catch (error) {
      throw new Error("There was a problem creating your budget.");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default Dashboard;
