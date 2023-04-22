// React-router-dom imports
import { redirect } from "react-router-dom";

// Library imports
import { toast } from "react-toastify";

// Helper functions
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // Delete the user
  deleteItem({
    key: "userName",
  });
  deleteItem({
    key: "budgets",
  });
  deleteItem({
    key: "expenses",
  });

  toast.success("You've deleted your account!");

  // Return redirect
  return redirect("/");
}
