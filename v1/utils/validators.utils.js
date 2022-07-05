module.exports = {
  match: function (value, type = "id") {

    if (!value || value === "undefined") return false;

    const STRING = value.toString();

    switch (type) {
      case "id":
        return STRING.match(/^[0-9a-fA-F]{24}$/);

      case "password":
        const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@+?#\$%\^&\*])(?=.{8,})/;
        return PASSWORD_REGEX.test(STRING);

      case "email":
        const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEX.test(STRING);

      case "phone_fr":
        const PHONE_REGEX_FR = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        return PHONE_REGEX_FR.test(string);

      case "civility":
        return string.match(/^(M\.|Mme|Mlle|Mr|Mrs|Miss|Ms)$/);
    }

  },
  empty: function (value) {
    if (value) {
      const STRING = value.toString();
      return STRING === "" || !STRING.replace(/\s/g, '').length;
    }
    return false;
  }
};
