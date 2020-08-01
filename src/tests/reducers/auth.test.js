import authReducer from "../../reducers/auth";

test("should set state to be empty object", () => {
  const currentState = {
    uid: "12345",
  };
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer(currentState, action);
  expect(state).toEqual({});
});

test("should set state to have uid", () => {
    const currentState = {};
    const action = {
      type: "LOGIN",
      uid: "123",
    };
    const state = authReducer(currentState, action);
    expect(state).toEqual({ uid: "123" });
  });
