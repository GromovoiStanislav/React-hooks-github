import { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext);

  const onSubmit = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (value.trim()) {
      //query
    } else show('Введите данные пользователя!');
  };

  return (
    <div className="form-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyDown={onSubmit}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
