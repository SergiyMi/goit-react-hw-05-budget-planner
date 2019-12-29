import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const notifyInvalid = () =>
  toast('Enter positive number', {
    position: toast.POSITION.TOP_CENTER,
  });

const notifyInvalidString = () =>
  toast('Your balance is not sufficient for all your expenses', {
    position: toast.POSITION.TOP_CENTER,
  });

const notifyError = () =>
  toast('You must enter all field', {
    position: toast.POSITION.TOP_CENTER,
  });

export default { notifyInvalid, notifyInvalidString, notifyError };
