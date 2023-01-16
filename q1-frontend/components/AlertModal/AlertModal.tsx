import { SetStateAction, Dispatch, FormEvent } from 'react';
import { TableContents } from '../Table/Table';

interface AlertModalProps {
  useContents: Dispatch<SetStateAction<TableContents>>;
}

export default function AlertModal({ useContents }: AlertModalProps) {
  function onSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log((e.target as any)[0].value);
    const newAlert = (e.target as any).elements[0].value;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useContents((prev) => ({
      ...prev,
      rowContents: [
        ...prev.rowContents,
        {
          alert: newAlert,
          status: '',
          updates: [],
        },
      ],
    }));
  }

  return (
    <form data-testid='form' onSubmit={onSubmitEvent}>
      <label> Add new alert: </label>
      <input type='text' id='alert' name='alert' />
      <button type='submit'> Add </button>
    </form>
  );
}
