import React from "react";
import PropTypes from "prop-types";

const Form = ({ isLogin, errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>
      <span>{isLogin ? "Log in" : "Create an Account"}</span>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
    </label>

    <button type="submit">{isLogin ? "Log in" : "Create"}</button>

    {errorMessage && <p className="error">{errorMessage}</p>}

    <style jsx>{`
      form,
      label {
        display: flex;
        flex-flow: column;
      }
      label > span {
        font-weight: 600;
      }
      input {
        padding: 8px;
        margin: 0.3rem 0 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .error {
        color: brown;
        margin: 1rem 0 0;
      }
    `}</style>
  </form>
);

export default Form;

Form.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
  isLogin: PropTypes.bool,
};
