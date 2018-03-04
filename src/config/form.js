
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
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name *'
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name *'
    },
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
    if (!values.firstName) {
      errors.firstName = 'Enter first name';
    }
    if (!values.lastName) {
      errors.lastName = 'Enter last name';
    }
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
