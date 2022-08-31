import { extend } from 'vee-validate';
import { required, alpha, numeric } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '{_field_} is required',
});

extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters',
});

extend('numeric', {
  ...numeric,
  message: '{_field_} must be a number',
});
