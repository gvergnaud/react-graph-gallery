import * as d3 from 'd3';
import { LineItem } from './LineItem';

const COLORS = ['#e0ac2b', '#e85252', '#6689c6', '#9a6fb0', '#a53253'];
const MARGIN = { top: 30, right: 0, bottom: 30, left: 0 };

type DataItem = {
  AgeGrpStart: string;
  Location: string;
  MidPeriod: string;
  PopFemale: string;
  PopMale: string;
};

type PopulationPyramidProps = {
  width: number;
  height: number;
  data: DataItem[];
  selectedGroup: string;
};

export const PopulationPyramid = ({
  width,
  height,
  data,
  selectedGroup,
}: PopulationPyramidProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const dataFiltered = data.filter((d) => d.Location === selectedGroup);

  const allYears = [...new Set(data.map((d) => d.MidPeriod))].sort();
  const firstYear = Number(allYears[0]);
  const lastYear = Number(allYears[allYears.length - 1]);

  const colorScale = d3
    .scaleLinear<string, string, never>()
    .range(['blue', 'white'])
    .domain([firstYear, lastYear]);

  const opacityScale = d3
    .scaleLinear()
    .range([0, 1])
    .domain([firstYear, lastYear]);

  const yScale = d3.scaleLinear().range([boundsHeight, 0]).domain([0, 100]);

  // Males on the left
  const xScaleMale = d3
    .scaleLinear()
    .range([0, boundsWidth / 2 - 10])
    .domain([10, 0]);

  const xScaleFemale = d3
    .scaleLinear()
    .range([boundsWidth / 2 + 10, boundsWidth])
    .domain([0, 10]);

  const lineBuilderMale = d3
    .line<DataItem>()
    .x((d) => xScaleMale(Number(d.PopMale)))
    .y((d) => yScale(Number(d.AgeGrpStart)));

  const lineBuilderFemale = d3
    .line<DataItem>()
    .x((d) => xScaleFemale(Number(d.PopFemale)))
    .y((d) => yScale(Number(d.AgeGrpStart)));

  const allLinePathMale = allYears.map((year) => {
    const path = lineBuilderMale(
      dataFiltered.filter((d) => d.MidPeriod === year)
    );
    return (
      <LineItem
        path={path}
        color={colorScale(year)}
        opacity={opacityScale(year)}
      />
    );
  });

  const allLinePathFemale = allYears.map((year) => {
    const path = lineBuilderFemale(
      dataFiltered.filter((d) => d.MidPeriod === year)
    );
    return (
      <LineItem
        path={path}
        color={colorScale(year)}
        opacity={opacityScale(year)}
      />
    );
  });

  return (
    <div className="relative bg-black">
      <svg width={width} height={height}>
        <text
          x={width / 2}
          y={15}
          fill="white"
          fontSize={10}
          alignmentBaseline="central"
          textAnchor="middle"
        >
          100 years old
        </text>
        <line
          x1={width / 2 - 5}
          y1={32}
          x2={width / 2 + 5}
          y2={32}
          stroke="white"
          opacity={1}
          strokeWidth={0.5}
        />

        <text
          x={width / 2}
          y={height - 15}
          fill="white"
          fontSize={10}
          alignmentBaseline="central"
          textAnchor="middle"
        >
          0 years old
        </text>
        <line
          x1={width / 2 - 5}
          y1={height - MARGIN.top}
          x2={width / 2 + 5}
          y2={height - MARGIN.top}
          stroke="white"
          opacity={1}
          strokeWidth={0.5}
        />

        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {allLinePathMale}
          {allLinePathFemale}
        </g>
      </svg>
    </div>
  );
};
