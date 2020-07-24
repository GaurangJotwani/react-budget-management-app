
// //Store Creation



// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// const expenseOne = store.dispatch(
//   addExpense({ description: "Rent", amount: 1000, createdAt: 10000 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "Coffee", amount: 3000, createdAt: -1000 })
// );

// // store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// // store.dispatch(setTextFilter("rent"));
// // store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// // store.dispatch(setStartDate(2000));
// // store.dispatch(setStartDate());
// // store.dispatch(setEndDate(-10000));

// const demoState = {
//   expenses: [
//     {
//       id: "fasdf",
//       description: "January Rent",
//       note: "This was the final payment for that address",
//       amount: 54500, //cents
//       createdAt: 0,
//     },
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "amount", //date or amount
//     startDate: undefined,
//     endDate: undefined,
//   },
// };
