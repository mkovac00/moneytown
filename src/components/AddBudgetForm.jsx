// React-router-dom imports
import { Form } from "react-router-dom";

// Library imports
import { CurrencyEuroIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
          ></input>
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step="0.1"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $200"
            required
            inputMode="decimal"
          ></input>
        </div>
        <button type="submit" className="btn btn--dark">
          <span>Create budget</span>
          <CurrencyEuroIcon width={20} />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
