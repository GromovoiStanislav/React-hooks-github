import { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
  const { show } = useContext(AlertContext);
  const onSubmit = (event) => {
    if (event.keyCode === 13) {
      show(event.target.value);
    }
  };

  return (
    <div className="form-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyDown={onSubmit}
      />
    </div>
  );
};
