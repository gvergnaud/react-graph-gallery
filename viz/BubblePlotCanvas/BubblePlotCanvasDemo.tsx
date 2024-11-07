import { data } from './data';
import { BubblePlot } from './BubblePlot';

export const BubblePlotCanvasDemo = ({ width = 700, height = 400 }) => (
  <BubblePlot data={data} width={width} height={height} />
);
