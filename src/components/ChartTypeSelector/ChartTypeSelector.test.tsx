
import React from 'react';
import {render} from '@testing-library/react';

import {ChartType} from '../../types/ChartType';
import {ChartTypeSelector} from './ChartTypeSelector';

test('renders all chart type options', () => {
  const {getByText} = render(<ChartTypeSelector selectedValue={ChartType.PRICE} onSelect={() => {}} />);

  expect(getByText(ChartType.PRICE.toLowerCase())).toBeInTheDocument();
  expect(getByText(ChartType.SPREAD.toLowerCase())).toBeInTheDocument();
  expect(getByText(ChartType.YIELD.toLowerCase())).toBeInTheDocument();
});
