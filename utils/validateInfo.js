export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = 'First name required';
  }
  if (!values.lastName.trim()) {
    errors.lastName = 'Last Name required';
  }
  if (!values.dob.trim()) {
    errors.dob = 'Date of Birth required';
  }
  if (!values.income.trim()) {
    errors.income = 'Income required';
  }
  if (!values.address.trim()) {
    errors.address = 'Address required';
  }
  if (!values.pinCode.trim()) {
    errors.pinCode = 'Pin Code required';
  }
  
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}
