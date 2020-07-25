import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = ({ count, total }) => {
  if (count === 0) {
    return null;
  }

  return (
    <h1>
      Viewing {count} {count === 1 ? "expense" : "expenses"} totalling{" "}
      {numeral(total).format("$0,0.00")}{" "}
    </h1>
  );
};

const mapStateToProps = (state) => {
  return {
    total:
      getExpensesTotal(selectExpenses(state.expenses, state.filters)) / 100,
    count: selectExpenses(state.expenses, state.filters).length,
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
