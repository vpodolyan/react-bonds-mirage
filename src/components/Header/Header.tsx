import { format } from 'date-fns';
import React, {FC} from 'react';
import styled from 'styled-components';

import {IBond} from '../../interfaces/IBond';

interface IProps {
  bond: IBond
}

const Container = styled.header`
  padding-left: 64px;
  padding-bottom: 12x;
  margin-bottom: 10px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Currency = styled.span`
  padding-left: 8px
`;

const Details = styled.div`
  font-weight: 400;
`;


export const Header: FC<IProps> = ({bond}) => {
  return (
    <Container>
      <Title>
        <h1>{bond.name}</h1>
        <Currency>{bond.currency}</Currency>
      </Title>
      <Details>
        <div>{bond.isin.toLocaleUpperCase()}</div>
        <div>{bond.issuer}, {bond.sector}, {bond.rating} till {format(new Date(bond.endDate), 'dd.MM.yyyy')}</div>
      </Details>
      <hr />
    </Container>
  );
}
