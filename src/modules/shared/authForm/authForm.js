import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
  const error = {
    email: '',
    password: ''
  }
  const { email, password } = values
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!emailRegex.test(email)) {
    error.email = 'error'
  }
  if (!password) {
    error.password = 'error'
  }
  return error
}

class AuthForm extends Component {

  constructor(props) {
    super(props);
    this._renderInput = this._renderInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _renderInput(obj) {
    const { error, dirty, visited } = obj.meta;
    if (visited && dirty && error) {
      return (
        <div className="field error">
          <input placeholder={obj.placeholder} {...obj.input} {...obj.config} />
        </div>
      )
    } else {
      return (
        <div className="field">
          <input placeholder={obj.placeholder} {...obj.input} {...obj.config} />
        </div>
      )
    }
  }

  _handleSubmit(values) {
    this.props.onSubmit(values);
  }

  render() {
    const { valid, handleSubmit, loading, submitText, err } = this.props;
    return (
      <div>
        <form className="ui form">
          <Field name="email" config={{ type: 'text' }} placeholder="Email" component={this._renderInput} />
          <Field name="password" config={{ type: 'password' }} placeholder="Password" component={this._renderInput} />

          <div className="d-f j-c-sp-btwn a-i-cntr">
            <button
              onClick={handleSubmit(this._handleSubmit)}
              disabled={!valid}
              type="submit"
              className={`ui button secondary ${loading ? 'loading' : ''}`}
            >{submitText}</button>
            {err ? (<span className="f-r c-r">{err.message}</span>) : null}
          </div>

        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'authForm',
  validate
})(AuthForm);