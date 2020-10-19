import React, {FC} from 'react';
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from 'recharts';

interface IProps {
  data: ReadonlyArray<object>;
}

export const Chart: FC<IProps> = ({data}) => {
  return (
    <LineChart width={800} height={400} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};
