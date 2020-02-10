import Joi from "joi-browser";

const schema = () => {
  const schema = {
    username: Joi.string()
      .min(5)
      .required()
  };
  return {
    schema
  };
};

export default schema;
