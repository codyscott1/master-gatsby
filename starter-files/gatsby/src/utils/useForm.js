import { useState } from 'react';

const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);

  const updateValues = (e) => {
    let { value } = e.target;
    if (e.target.type === 'Number') {
      value = parseInt(e.target.value);
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return { values, updateValues };
};

export default useForm;
