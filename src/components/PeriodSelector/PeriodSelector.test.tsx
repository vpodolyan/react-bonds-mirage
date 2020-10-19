
import React from 'react';
import {render} from '@testing-library/react';

import {Period} from '../../types/Period';
import {PeriodSelector} from './PeriodSelector';

test('renders all period options', () => {
  const {getByText} = render(<PeriodSelector selectedValue={Period.QUARTER} onSelect={() => {}} />);

  expect(getByText(Period.WEEK.toLowerCase())).toBeInTheDocument();
  expect(getByText(Period.MONTH.toLowerCase())).toBeInTheDocument();
  expect(getByText(Period.QUARTER.toLowerCase())).toBeInTheDocument();
  expect(getByText(Period.YEAR.toLowerCase())).toBeInTheDocument();
  expect(getByText(Period.MAX.toLowerCase())).toBeInTheDocument();
});
