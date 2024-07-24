import { useState } from 'react';
import { ResponsivePopulationPyramid } from '../PopulationPyramid';
import { Legend } from '../plot/Legend';
import { DataItem } from '../types';
import { HorizontalTabBar } from '../HorizontalTabBar';

const weirdCountries = [
  'Sint Maarten',
  'Quatar',
  'Monaco',
  'Japan',
  'Bahrain',
  'Italy',
];

type WeirdosSectionProps = {
  data: DataItem[];
  allGroupsWithCode: string[];
};

export const WeirdosSection = ({
  data,
  allGroupsWithCode,
}: WeirdosSectionProps) => {
  const [highlightedYear, setHighlightedYear] = useState<number | undefined>();
  const [selectedGroup, setSelectedGroup] = useState(0);

  const selectedData = data
    .filter((d) => d.Location === weirdCountries[selectedGroup])
    .filter((d) => Number(d.Time) === 2024);

  console.log('selectedData', selectedData);

  const tabBar = (
    <div className="relative w-full h-12 flex justify-center">
      <HorizontalTabBar
        selectedItem={selectedGroup}
        items={allGroupsWithCode.filter((d) =>
          weirdCountries.includes(d.split('---')[0])
        )}
        setSelectedItem={setSelectedGroup}
      />
    </div>
  );

  return (
    <div className="relative py-60">
      <div className="narrowWrapper  flex flex-col justify-center items-start">
        <p className="text-gray-400 text-xl uppercase">Unexpected</p>
        <p className="text-7xl">Unusual patterns</p>
        <p>
          In the study of population dynamics, some countries exhibit unusual
          and unexpected age distribution patterns.
        </p>
        <p>
          These nations, such as Monaco, Qatar, and Bahrain, defy conventional
          population structures seen in most other regions. Their unique
          demographic profiles often result from specific socio-economic
          factors, such as high levels of immigration, economic specialization,
          or distinctive healthcare and social policies.
        </p>
        <p>
          <br />
        </p>
        {tabBar}

        <div className="h-96 w-full">
          <ResponsivePopulationPyramid
            data={selectedData}
            highlightedYear={highlightedYear}
            isHistogramEnabled={true}
            isLineEnabled={false}
            histogramOpacity={0.8}
          />
        </div>
      </div>

      <div className="absolute top-1/2 left-10 transform -translate-x-1/2">
        <Legend setHighlightedYear={setHighlightedYear} />
      </div>
    </div>
  );
};
