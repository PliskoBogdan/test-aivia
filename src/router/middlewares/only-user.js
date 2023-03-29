export default (to, from, next) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return next({name: 'login'});
  }
  return next();
};
