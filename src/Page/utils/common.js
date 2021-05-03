export const getFullName = () => {
  const userStr = sessionStorage.getItem("fullName");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("fullName");
};

// set the token and user from the session storage
export const setUserSession = (token, id, fullName, photoProfile, email) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("id", id);
  sessionStorage.setItem("fullName", fullName);
  sessionStorage.setItem("photoProfile", photoProfile);
  sessionStorage.setItem("email", email);
};
