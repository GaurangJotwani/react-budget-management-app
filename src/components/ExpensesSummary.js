import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";
import { Link } from "react-router-dom";

export const ExpensesSummary = ({ count, total }) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{count}</span> {count === 1 ? "expense" : "expenses"}{" "}
          totalling <span>{numeral(total).format("$0,0.00")}</span>{" "}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
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
