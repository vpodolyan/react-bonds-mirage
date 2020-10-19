import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';

import {IBond} from '../../interfaces/IBond';
import { ChartType } from '../../types/ChartType';
import {Period} from '../../types/Period';
import {Chart} from '../Chart/Chart';
import {ChartTypeSelector} from '../ChartTypeSelector/ChartTypeSelector';
import {Header} from '../Header/Header';
import {PeriodSelector} from '../PeriodSelector/PeriodSelector';

const PageWrapper = styled.div`
  width: 800px;
`;

export const BondPage: FC = () => {
  const [data, setData] = useState<IBond | undefined>(undefined);
  const [selectedPeriod, setSelectedPeriod] = useState(Period.WEEK);
  const [selectedChartType, setSelectedChartType] = useState(ChartType.PRICE)

  useEffect(() => {
    const get = async () => {
      try {
        const repsonse = await fetch(`/api/bonds/us931142bf98?period=${selectedPeriod}&chartType=${selectedChartType}`);
        const bond = await repsonse.json();
        setData(bond);
      }
      catch {
        alert('There was an error getting bond data');
      }
    };
    
    get();
  }, [selectedChartType, selectedPeriod])

  if (!data) {
    return null;
  }
  
  return (
    <PageWrapper>
      <Header bond={data} />
      <PeriodSelector selectedValue={selectedPeriod} onSelect={(value) => setSelectedPeriod(value)} />
      <Chart data={data.points} />
      <ChartTypeSelector selectedValue={selectedChartType} onSelect={(value) => setSelectedChartType(value)} />
    </PageWrapper>
  );
}