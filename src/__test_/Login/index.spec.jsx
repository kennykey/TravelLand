import React from 'react';
import { render } from '@testing-library/react';
import Login from '@/pages/detail/Login';

describe('login page', () => {
  it('should handle render login', () => {
    const { container } = render(<Login />);
    expect(container).toBeInTheDocument();
  });

  it('should handle render input text', () => {
    const { container } = render(<input type="text" label="email"/>);
    expect(container).toMatchSnapshot();
  });

  it('should handle render input text', () => {
    const { container } = render(<input type="text" label="password"/>);
    expect(container).toMatchSnapshot();
  });

  it('should handle render button not disable', () => {
    const { container } = render(
      <button text={'button'} type="submit"/>);
    expect(container).toMatchSnapshot();
  });
});
