import { data } from './data';
import { DonutChart } from './DonutChart';

export const DonutChartCanvasDemo = ({ width = 700, height = 400 }) => (
  <DonutChart data={data} width={width} height={height} />
);
