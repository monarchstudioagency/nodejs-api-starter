module.exports = {
  match: function (value, type = "id") {

    if (!value || value === "undefined") return false;

    let string = value.toString();

    if (type === "id") return string.match(/^[0-9a-fA-F]{24}$/);

    if (type === "password") {
      const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@+?#\$%\^&\*])(?=.{8,})/;
      return PASSWORD_REGEX.test(string);
    }
    if (type === "email") {
      const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return EMAIL_REGEX.test(string);
    }

  },
  empty: function (value) {
    if (value) {
      let string = value.toString();
      return string === "" || !string.replace(/\s/g, '').length;
    }
    return false;
  }
};
