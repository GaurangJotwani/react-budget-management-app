import {
  removeExpense,
  editExpense,
  addExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
} from "../../actions//expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref("expenses")
    .set(expensesData)
    .then(() => done());
});

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123",
  });
});

test("should setup edit action object", () => {
  const id = "123";
  const updates = {
    amount: 10,
    description: "again",
  };
  const action = editExpense(id, updates);
  expect(action).toEqual({ type: "EDIT_EXPENSE", id, updates });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[0],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "this one is better",
    createdAt: 1000,
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with default to database and store", (done) => {
  const store = createMockStore({});
  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          description: "",
          note: "",
          amount: 0,
          createdAt: 0,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual({
        description: "",
        note: "",
        amount: 0,
        createdAt: 0,
      });
      done();
    });
});

test("should set up set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should fetch the expenses from firebase", (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});

test("should remove an expense from firebase", (done) => {
  const store = createMockStore({});
  store
    .dispatch(startRemoveExpense({ id: 1 }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id: 1,
      });
      return database.ref(`expenses/${1}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});
