
export const LOGIN_FORM = {
  name: 'login',
  submitText: 'Log in',
  fields: [
    {
      name: 'email',
      type: 'text',
      placeholder: 'Email *'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password *'
    }
  ],
  validate: (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!values.password) {
      errors.password = 'Enter password';
    }
    return errors;
  }
};

export const SIGNUP_FORM = {
  name: 'signup',
  submitText: 'Sign up',
  fields: [
    {
      name: 'email',
      type: 'text',
      placeholder: 'Email *'
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password *'
    }
  ],
  validate: (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!values.password) {
      errors.password = 'Enter password';
    }
    return errors;
  }
}
;
