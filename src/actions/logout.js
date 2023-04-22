// React-router-dom imports
import { redirect } from "react-router-dom";

// Helper functions
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // Delete the user
  deleteItem({
    key: "userName",
  });

  // Return redirect
  return redirect("/");
}
