import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.match.params.id, expense);
    this.props.history.push("/");
  };
  onClick = () => {
    this.props.startRemoveExpense({ id: this.props.match.params.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
