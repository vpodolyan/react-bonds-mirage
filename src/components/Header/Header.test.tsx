import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';
import { IBond } from '../../interfaces/IBond';

test('renders available bond data', () => {
  const bond: IBond = {
    isin: 'CH0271171693',
    issuer: 'Apple',
    name: 'APPLE 15-30',
    sector: 'Technology',
    currency: 'CHF',
    endDate: new Date('2030-02-24'),
    price: 108,
    rating: 'AA',
    points: []
  }
  const {getByText} = render(<Header bond={bond} />);

  expect(getByText(bond.isin)).toBeInTheDocument();
  expect(getByText(`${bond.issuer}, ${bond.sector}, ${bond.rating} till 24.02.2030`)).toBeInTheDocument();
});
