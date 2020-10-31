export const addBusiness = (business) => {
  return {
    type: "ADD_BUSINESS",
    value: business,
  };
};

export const removeBusiness = (idx) => {
  return {
    type: "REMOVE_BUSINESS",
    value: idx,
  };
};

export const userLogin = (user) => {
  return {
    type: "USER_LOGIN",
    value: user,
  };
};
