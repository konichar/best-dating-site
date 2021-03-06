/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Input = (props) => {
  const { onChange, label, icon, type, formType } = props;
  return (
    <div className="form-group">
      {type === "password" && formType === "Sign In" ? (
        <div className="float-right">
          <a href="/forgotpassward" className="text-muted font-size-13">
            Forgot password?
          </a>
        </div>
      ) : null}
      <label>{label}</label>
      <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
        <div className="input-group-prepend">
          <span className="input-group-text border-light text-muted">
            <i className={`ri-${icon}-2-line`}></i>
          </span>
        </div>
        <input
          className="form-control bg-soft-light border-light"
          placeholder={`Enter ${label}`}
          name={type}
          type={type}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const Form = (props) => {
  const { formType, onChange, action, updateFormState, formState } = props;
  const { error } = formState;
  return (
    <div className="account-pages ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="text-center mb-4">
              <a href="/" className="auth-logo mb-5 d-block">
                <img
                  src="assets/images/logo-dark.png"
                  alt=""
                  height="30"
                  className="logo logo-dark"
                />
                <img
                  src="assets/images/logo-light.png"
                  alt=""
                  height="30"
                  className="logo logo-light"
                />
              </a>
              <h4>{formType}</h4>
              {formType === "Sign In" ? (
                <p className="text-muted mb-4">
                  Sign in to continue to the best dating site.
                </p>
              ) : (
                <p className="text-muted mb-4">
                  Get your best dating site account now.
                </p>
              )}
            </div>
            <div className="card">
              <div className="card-body p-4">
                <div className="p-3">
                  <form autoComplete="on">
                    <Input
                      onChange={onChange}
                      label="Username"
                      icon="user"
											type="username"
											formType={formType}
                    />
										{
											formType === "Sign Up" ? (
												<Input
												onChange={onChange}
												label="Email"
												icon="email"
												type="email"
												formType={formType}
											/>
											) : (
												null
											)
										}
                    <Input
                      onChange={onChange}
                      label="Password"
                      icon="lock"
											type="password"
											formType={formType}
                    />
                    <div className="form-group">
                      {error !== undefined ? (
                        <p className="text-danger">{formState.error}</p>
                      ) : null}
                    </div>
                    <div className="custom-control custom-checkbox mb-4">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="remember-check"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="remember-check"
                      >
                        Remember me
                      </label>
                    </div>
                    <div>
											{ formType === "Sign In" ? (
												<button
													onClick={(e) => action(e)}
													className="btn btn-primary btn-block waves-effect waves-light"
												>
													Sign in
												</button>
											) : (
												<button
												onClick={(e) => action(e)}
												className="btn btn-primary btn-block waves-effect waves-light"
											>
												Sign Up
											</button>
											)}
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              {formType === "Sign In" ? (
                <p>
                  Don't have an account ?{" "}
                  <a
                    onClick={() => {
                      updateFormState(() => ({
                        ...formState,
                        formType: "Sign Up",
                      }));
                    }}
                    className="font-weight-medium text-primary"
                  >
                    {" "}
                    Sign Up{" "}
                  </a>{" "}
                </p>
              ) : (
                <p>
                  Already have an account ?{" "}
                  <a 
                    onClick={() => {
                      updateFormState(() => ({
                        ...formState,
                        formType: "Sign In",
                      }));
                    }}
                    className="font-weight-medium text-primary"
                  >
                    {" "}
                    Sign In{" "}
                  </a>{" "}
                </p>
              )}
              <p>
                © 2020 bds. Crafted with{" "}
                <i className="mdi mdi-heart text-danger"></i> by konichar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
