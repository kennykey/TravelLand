import React from 'react';
import { render } from '@testing-library/react';
import BannerPage from '@/component/Fragment/BannerPage';
import PromoPage from '@/component/Fragment/PromoPage';
import Home from '@/pages';

describe('home page', () => {
  it('should handle render bannerPage', () => {
    const { container } = render(<BannerPage />);
    expect(container).toMatchSnapshot();
  });
  it('should handle render promoPage', () => {
    const { container } = render(<PromoPage/>);
    expect(container).toMatchSnapshot();
  });

  it('should handle render Home', () => {
    const { container } = render(<Home/>);
    expect(container).toMatchSnapshot();
  });
});
