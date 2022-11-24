export const Auth = () => {
  if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return user.token;
  } else {
    return {};
  }
};
