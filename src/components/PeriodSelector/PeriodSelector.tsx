import React, {FC} from 'react';
import styled from 'styled-components';

import {Period} from '../../types/Period';

interface IProps {
  selectedValue: Period;
  onSelect: (value: Period) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 64px;
  padding-bottom: 8px;
`;

const Item = styled.div`
  border: 1px solid #ddd;
  padding: 4px;
  text-transform: capitalize;

  background: ${({selected}: {selected: boolean}) => selected ? '#ddd': '#fff'};

  &:hover {
    cursor: pointer;
  }
`;

export const PeriodSelector: FC<IProps> = ({selectedValue, onSelect}) => {
  return (
    <Container>
      {Object.keys(Period).map((period) => (
        <Item
          key={period}
          selected={selectedValue === period}
          onClick={() => {
            onSelect(period as Period);
          }}
        >
          {period.toLocaleLowerCase()}
        </Item>
      ))}
    </Container>
  );
}

