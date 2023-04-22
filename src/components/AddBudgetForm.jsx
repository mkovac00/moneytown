// React imports
import { useRef, useEffect } from "react";

// React-router-dom imports
import { useFetcher } from "react-router-dom";

// Library imports
import { CurrencyEuroIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef}
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
        <input type="hidden" name="_action" value="createBudget"></input>
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Create budget</span>
              <CurrencyEuroIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
