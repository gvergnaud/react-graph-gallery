import React, { useRef } from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import Contact from '../component/Contact';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import ChartFamilySection from '../component/ChartFamilySection';
import { useDimensions } from '../hook/use-dimensions';
import { DonutDatasetTransition } from '../viz/DonutDatasetTransition/DonutDatasetTransition';
import { BarplotDatasetTransitionDemo } from '../viz/BarplotDatasetTransition/BarplotDatasetTransitionDemo';
import { ScatterplotDatasetTransitionDemo } from '../viz/ScatterplotDatasetTransition/ScatterplotDatasetTransitionDemo';
import { DonutDatasetTransitionDemo } from '../viz/DonutDatasetTransition/DonutDatasetTransitionDemo';
import { CodeBlock } from '../component/UI/CodeBlock';

const graphDescription = (
  <p>
    How to smoothly transition from a dataset to the other. Use the{' '}
    <code>react-spring</code> library. Several examples with explanation. Start
    simple. Then focus on tricky things like enter, exit, axis, path.
  </p>
);

const snippet1 = `
const springProps = useSpring({
  to: {
    barWidth,
  }
});
`.trim();

const snippet2 = `
<animated.rect
  x={x}
  y={y}
  width={springProps.barWidth}
  height={height}
  fill="#9d174d"
/>
`.trim();

export default function Home() {
  const demoRef = useRef<HTMLDivElement>(null);
  const demoDim = useDimensions(demoRef);

  return (
    <Layout
      title="Smooth dataset transition"
      seoDescription="This blogpost explains how to animate the a dataset transition using react-spring."
    >
      <TitleAndDescription
        title="Animated dataset transition"
        description={graphDescription}
      />

      {/* Basic demo */}
      <div className="w-full flex flex-col justify-center items-center">
        <div
          style={{ height: 250, width: '100%', maxWidth: 500 }}
          ref={demoRef}
        >
          <DonutDatasetTransition
            width={demoDim.width}
            height={demoDim.height}
          />
        </div>
        <p className="text-sm text-gray-500 max-w-md italic text-center mt-8 font-light">
          A minimal react-spring dataviz example. A viz component expect a{' '}
          <code>position</code> and a <code>color</code> prop. But it smoothly
          animates the transition.
        </p>
      </div>

      {/*
      //
      //
      //
      */}
      <h2 id="most basic">Most basic</h2>
      <p>
        Consider a change where dataset has the same structure, just the values
        change. Same number of items.
      </p>
      <p>Also, just animating a prop of a shape</p>
      <p>Very simple, just animate the bar width</p>
      <p>Spring looks like this</p>
      <CodeBlock code={snippet1} />
      <p>
        Now, we have a springProps object that has a <code>barWidth</code>{' '}
        property.
      </p>
      <p>
        We can pass it to a <code>animated.rect</code> svg element.
      </p>
      <CodeBlock code={snippet2} />

      <ChartOrSandbox
        vizName={'BarplotDatasetTransition'}
        VizComponent={BarplotDatasetTransitionDemo}
        maxWidth={800}
        height={450}
        caption="Most basic dataviz animation with react spring. The width of each bar is smoothly updated with an animation."
      />

      {/*
      //
      //
      //
      */}
      <h2 id="custom enter">Scatterplot transition</h2>
      <p>Axis limits set to 0 to 100. No need to animate axis for now.</p>
      <p>
        Most of the circles just have their x and Y positions that update, no
        big deal.
      </p>
      <p>
        Blue and red point exist only in dataset 1 and 2 respectively. We need
        to make them enter and leave the scene properly.
      </p>
      <ChartOrSandbox
        vizName={'ScatterplotDatasetTransition'}
        VizComponent={ScatterplotDatasetTransitionDemo}
        maxWidth={500}
        height={450}
        caption="A very basic animation using react and react-spring."
      />

      {/*
      //
      //
      //
      */}

      <h2 id="left">Animating a path</h2>
      <p>
        Donut is more tricky since each shape is a path. As a result, we need to
        compute the d property for each frame of the animation.
      </p>
      <p>
        This is possible thanks to the <code>to()</code> function
      </p>
      <ChartOrSandbox
        vizName={'DonutDatasetTransition'}
        VizComponent={DonutDatasetTransitionDemo}
        maxWidth={500}
        height={450}
        caption="A very basic animation using react and react-spring."
      />

      <br />
      <br />

      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />

      <ChartFamilySection chartFamily="general" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
