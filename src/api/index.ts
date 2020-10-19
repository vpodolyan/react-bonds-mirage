import {addDays, format} from 'date-fns';
import {createServer} from 'miragejs';

import {ChartType} from '../types/ChartType';
import {Period} from '../types/Period';

function getPricePoint() {
  return Math.random() * (1500 - 500) + 500;
}

function getYieldSpreadPoint() {
  return (Math.random() * (2.3555 - 2.2400) + 2.2400).toFixed(2);
}

function generatePoints(period: Period, type: ChartType) {
  const result = [];

  const date = new Date();
  let pointDate;
  let daysCount = 0;
  let dt;

  switch (period) {
    case 'WEEK':
      daysCount = 7;
      dt = 1;
      break;
    case 'MONTH':
      daysCount = 30;
      dt = 1;
      break;
    case 'QUARTER':
      daysCount = 120
      dt = 10;
      break;
    case 'YEAR':
      daysCount = 365;
      dt = 20;
      break;
    case 'MAX':
      daysCount = 1825;
      dt = 45;
      break;
    default:
      daysCount = 0;
      dt = 1;
  }

  pointDate = addDays(date, -daysCount);

  for (let i = 0; i < daysCount; i += dt) {
    const value = type === ChartType.PRICE ? getPricePoint() : getYieldSpreadPoint();

    result.push({name: format(pointDate, 'dd.MM.yy'), value})
    pointDate = addDays(pointDate, dt);
  }

  return result;
}

function isPeriod(value: any): value is Period {
  return value && value.toUpperCase && Object.keys(Period).includes(value.toUpperCase());
}

function isChartType(value: any): value is ChartType {
  return value && value.toUpperCase && Object.keys(ChartType).includes(value.toUpperCase());
}

export function initApi() {
  createServer({
    routes() {
      this.namespace = 'api';

      this.get('/bonds/:isin', (_, request) => {
        const {period, chartType} = request.queryParams;
        return {
          isin: request.params.isin,
          name: 'WALMART 2030',
          issuer: 'Wallmart Inc.',
          sector: 'Consumer Services',
          currency: 'USD',
          rating: 'AA',
          endDate: new Date('2030-02-14'),
          points: generatePoints(isPeriod(period) ? period.toUpperCase() as Period : Period.WEEK, isChartType(chartType) ? chartType.toUpperCase() as ChartType: ChartType.PRICE)
        }
      })
    }
  })
}