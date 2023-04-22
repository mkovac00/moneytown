// Helper functions
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";

const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget;
  const amountSpent = calculateSpentByBudget(id);

  return (
    <div
      className="budget"
      style={{
        "--accent": color,
      }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} budgeted</p>
      </div>
      <progress max={amount} value={amountSpent}>
        {formatPercentage(amountSpent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(amountSpent)} spent</small>
        <small>{formatCurrency(amount - amountSpent)} remaining</small>
      </div>
    </div>
  );
};

export default BudgetItem;
