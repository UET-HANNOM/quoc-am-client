export const validateValue = (str, type) => {
  switch (type) {
    case "email":
      var re = /\S+@\S+\.\S+/;
      return re.test(str);
    default:
      return str !== "";
  }
};
