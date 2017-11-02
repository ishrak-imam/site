
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values, props) => {
  const { validate } = props.config;
  return validate(values);
}

class Form extends Component {

  constructor(props) {
    super(props);
    this._renderInput = this._renderInput.bind(this);
    this._renderInputs = this._renderInputs.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _renderInput({ input, config, meta: { touched, error } }) {
    return (
      <div className={`field ${(touched && error) ? 'error' : ''}`}>
        <input {...input} {...config} />
        <div className="m-t5">
          {touched && error && <span className="err-clr">{error}</span>}
        </div>
      </div>
    )
  }

  _renderInputs() {
    const { config } = this.props;
    return config.fields.map(field => {
      return (
        <Field key={field.name} name={field.name} config={field} component={this._renderInput} />
      );
    });
  }

  _handleSubmit(values) {
    const { valid } = this.props;
    if (valid) {
      this.props.onSubmit(values);
    }
  }

  render() {
    const { submitting, handleSubmit, loading, config, err } = this.props;
    return (
      <div>
        <form className="ui form">

          {this._renderInputs()}

          <div className="d-f j-c-sp-btwn a-i-cntr">
            <button
              onClick={handleSubmit(this._handleSubmit)}
              disabled={submitting}
              type="submit"
              className={`ui button secondary ${loading ? 'loading' : ''}`}
            >{config.submitText}</button>
            {err ? (<span className="f-r c-r">{err.message}</span>) : null}
          </div>

        </form>
      </div>
    )
  }
}

export default reduxForm({
  validate
})(Form);