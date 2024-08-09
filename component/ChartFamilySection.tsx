import React from 'react';

import SectionLogoWithOverlay from 'component/SectionLogoWithOverlay';
import { ChartFamily, chartTypesInfo } from 'util/sectionDescriptions';
import { fullUrlToInternalLink } from 'util/utils';

const TITLES = {
  distribution: 'Distribution',
  correlation: 'Correlation',
  ranking: 'Ranking',
  partOfAWhole: 'Part Of A Whole',
  evolution: 'Evolution',
  map: 'Map',
  flow: 'Flow',
  general: 'General Knowledge',
};

type ChartFamilySection = {
  chartFamily: ChartFamily;
};

export default function ChartFamilySection({
  chartFamily,
}: ChartFamilySection) {
  const allLogos = chartTypesInfo
    .filter((chart) => chart.family === chartFamily)
    .map((chart, id) => {
      const link = fullUrlToInternalLink(chart.reactURL);
      return (
        <div key={id} className="flex flex-col items-center justify-center">
          <SectionLogoWithOverlay
            link={link}
            chartLogo={chart.logo}
            caption={chart.label}
            isAvailable={chart.isAvailable}
            size={122}
          />
        </div>
      );
    });

  return (
    <div>
      <p
        className={
          chartFamily +
          ' ' +
          ' mt-4 text-md border-b mb-2 border-gray-100 tracking-wider'
        }
      >
        {TITLES?.[chartFamily]}
      </p>
      <div className="flex flex-row justify-start flex-wrap">{allLogos}</div>
    </div>
  );
}
