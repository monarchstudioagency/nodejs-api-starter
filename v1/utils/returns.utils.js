module.exports = {

  error: (message, context = "INTERNAL") => {

    try {
      return {
        success: false,
        message: message,
        context: context
      };
    } catch (e) {
      console.log(e);
    }

  },
  success: (message = null) => {

    if (typeof message === "string") {
      try {
        return {
          success: true,
          message: message
        };
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        return {
          success: true,
          body: message
        };
      } catch (e) {
        console.log(e);
      }
    }

  },

};
