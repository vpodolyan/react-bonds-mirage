import React from 'react';
import { render } from '@testing-library/react';
import { Chart } from './Chart';

test('renders without errors', () => {
  const {container} = render(<Chart data={[{name: '01.12.2020', value: 100}, {name: '02.12.2020', value: 106}]} />);
  
  expect(container.firstChild).toHaveClass('recharts-wrapper');
  expect(container.firstChild.firstChild).toHaveClass('recharts-surface');
})
