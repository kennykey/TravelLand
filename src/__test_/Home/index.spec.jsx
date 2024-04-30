import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/pages';

describe('home page', () => {
  it('should handle render homepage', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

});
