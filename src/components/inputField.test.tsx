import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from './InputField';

describe('InputField component', () => {
  it('should call handleAdd when form is submitted', () => {
    const handleAdd = jest.fn();
    render(<InputField todo="New task" setTodo={jest.fn()} handleAdd={handleAdd} />);
    const input = screen.getByPlaceholderText('Enter a Task');
    userEvent.type(input, 'New task');
    userEvent.click(screen.getByRole('button'));
    expect(handleAdd).toHaveBeenCalledTimes(1);
  });
});