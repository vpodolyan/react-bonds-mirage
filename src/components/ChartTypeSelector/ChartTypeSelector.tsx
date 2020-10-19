import React, { FC } from 'react';
import styled from 'styled-components';
import { ChartType } from '../../types/ChartType';

interface IProps {
  selectedValue: ChartType;
  onSelect: (value: ChartType) => void; 
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Select = styled.select`
  text-transform: capitalize;
`;

export const ChartTypeSelector: FC<IProps> = ({onSelect}) => {
  return (
    <Container>
      <Select onChange={(e) => onSelect(e.target.value as ChartType)}>
        {
          Object.keys(ChartType).map((chartType) => <option key={chartType} value={chartType}>{chartType.toLocaleLowerCase()}</option>)
        }
      </Select>
    </Container>
  );
}
