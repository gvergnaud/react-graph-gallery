import React, { useEffect, useRef } from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import Contact from '../component/Contact';
import ChartFamilySection from '../component/ChartFamilySection';
import { AccordionSection } from '../component/AccordionSection';
import { Caption } from '../component/UI/Caption';
import CodeSandboxButton from '../component/CodeSandboxButton';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import Link from 'next/link';

import { StackedBarplot } from '../viz/BarplotStackedBasic/StackedBarplot';
import { data } from '../viz/BarplotStackedBasic/data';

import { StackedBarplot as StackedBarplotDiverging } from '../viz/BarplotStackedNegativeDiverging/StackedBarplot';
import { data as dataDiverging } from '../viz/BarplotStackedNegativeDiverging/data';

import { StackedBarplot as StackedBarplotOverlapping } from '../viz/BarplotStackedNegativeOverlapping/StackedBarplot';
import { data as dataOverlapping } from '../viz/BarplotStackedNegativeOverlapping/data';
import { BarplotStackedBasicDemo } from '../viz/BarplotStackedBasic/BarplotStackedBasicDemo';
import { BarplotStackedNegativeDivergingBasicDemo } from '../viz/BarplotStackedNegativeDiverging/BarplotStackedNegativeDivergingDemo';
import { BarplotStackedNegativeOverlappingDemo } from '../viz/BarplotStackedNegativeOverlapping/BarplotStackedNegativeOverlappingDemo';

const graphDescription = (
  <>
    <p>
      Drawing a{' '}
      <a href="https://www.data-to-viz.com/graph/barplot.html">
        stacked barplot
      </a>{' '}
      sounds like pretty basic task for somebody into dataviz. But it gets
      surprisingly tricky once the dataset includes <b>negative values</b>.
    </p>
    <p>
      This post explains how to deal with it, suggesting several options coming
      together with some reproducible code examples.
    </p>
  </>
);

export default function Post() {
  return (
    <Layout
      title="Dealing with negative values on a stacked barplot"
      seoDescription="How to deal with negative values on stacked barplot. A post describing the pros and cons of the 2 main options, together with some examples with d3.js code."
    >
      <TitleAndDescription
        title="Dealing with negative values on a stacked barplot"
        description={graphDescription}
      />

      {/*
      //
      // Basic Stacked Barplot
      //
      */}
      <h2 id="Positive values only">
        🍔 Regular stacked barplot with positive values
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-6 gap-8">
        <div className="col-span-4">
          <p>
            Let's consider a company that has 3 employees: <code>a</code>,{' '}
            <code>b</code> and <code>c</code>. Each month those employees sell
            umbrellas and make money.
          </p>
          <p>
            In January, they made 1, 1 and 2 dollars respectively. It's pretty
            easy to represent those sales as a stacked barplot!
          </p>
          <p>
            There is even a bonus! The total height of those bars is 4. So is
            the value of the stack on the Y axis. We now know what's the total
            revenue of the company 🎉!
          </p>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center">
          <img src="/img/stacked-barplot-explanation-1.png" />
          <Caption>Stacking positive values is straightforward</Caption>
        </div>
      </div>

      <br />

      <p>
        Now let's follow the same process for the 12 months of the year. That
        makes a stacked area barplot built with <code>react</code> and{' '}
        <code>d3.js</code>. If you need explanations for the code, please refer
        to the{' '}
        <a href="https://d3-graph-gallery.com/graph/barplot_stacked_basicWide.html">
          d3.js gallery
        </a>{' '}
        or to the <Link href="barplot">barplot section</Link> of the react
        gallery.
      </p>

      <br />

      <ChartOrSandbox
        vizName={'BarplotStackedBasic'}
        VizComponent={BarplotStackedBasicDemo}
        height={400}
        maxWidth={600}
        caption={
          'A stacked area chart with positive values only. Built with react and d3.js'
        }
      />

      <br />

      <p>
        That's the end of the easy part. Now, let's say that sometimes employees
        spend more money than what they make.
      </p>
      <p>
        We now have some negative values in the dataset 😳. How can we deal with
        it?
      </p>

      {/*
      //
      // Strategy 1: diverging
      //
      */}
      <h2 id="Diverging strategy">
        1️⃣ Stacked barplot with negative values: the diverging strategy
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-8">
        <div className="col-span-4">
          <p>
            We are in January but this time, employee <code>A</code> lost 1$! 😥
          </p>
          <p>
            To represent this on the stack, we can add all the positive values
            on top of the chart, and all the negative ones below the 0 axis.
          </p>
          <p>
            It is still very easy to see how much each employee made in a
            glimpse!
          </p>
          <p>
            However, it is now <b>impossible</b> to know what's the company
            revenue! Indeed, the total height of the bars is <code>4</code>, the
            value on the y axis is <code>3</code>, but the real revenue is 1 + 2
            - 1 = <code>2</code>!
          </p>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center">
          <img
            src="/img/stacked-barplot-explanation-2.png"
            alt="shema of a stacked barplot with the diverging strategy for stacking"
          />
          <Caption>
            Stacking with negative values with all negative values below the 0
            axis
          </Caption>
        </div>
      </div>

      <br />

      <p>
        Using almost the same code we can build the stacked barplot including
        those negative values. Note that when stacking the data with the{' '}
        <code>stack()</code> function of d3, the specific{' '}
        <code>stackOffsetDiverging</code> offset parameter must be passed,
        handling all the work for us (
        <a href="https://github.com/d3/d3-shape#stack-offsets">doc</a>).
      </p>

      <br />

      <ChartOrSandbox
        vizName={'BarplotStackedNegativeDivergingBasic'}
        VizComponent={BarplotStackedNegativeDivergingBasicDemo}
        height={400}
        maxWidth={700}
        caption={
          'With the diverging strategy, all negative values are located under the 0 baseline.'
        }
      />

      <br />

      <p>Let's recap the pros and cons of this diverging option:</p>
      <div className="">
        <div>
          <p className="px-2 bg-green-400 rounded-md text-white w-16 text-md">
            Pros
          </p>
          <ul>
            <li>Easy to read the value of each item</li>
            <li>Obvious what's negative and what's positive</li>
          </ul>
        </div>
        <br />
        <div>
          <p className="px-2 bg-red-400 rounded-md text-white w-16 text-md">
            Cons
          </p>
          <ul>
            <li>Impossible to know the total value of each stack</li>
            <li>
              A series can jump from the bottom to the top of the chart and is
              thus hard to follow
            </li>
          </ul>
        </div>
      </div>

      {/*
      //
      // Strategy 2: overlap
      //
      */}
      <h2 id="Overlap strategy">
        2️⃣ Stacked barplot with negative values: the overlapping strategy
      </h2>

      <div className="col-span-4">
        <p>
          Another strategy can be applied to stack the items including negative
          values.
        </p>
        <p>
          Items can be added one by one, with rectangles going up when values
          are positive and going down when values are negative.
        </p>
      </div>
      <div className="col-span-2 flex flex-col items-center justify-center">
        <img src="/img/stacked-barplot-explanation-4.png" />
        <Caption>
          Stacking items by overlapping the items on top of each other.
        </Caption>
      </div>

      <br />

      <p>
        It's important to understand that here, the item order is important. We
        will get very different results depending on the order since not all
        groups are visible.
      </p>

      <br />

      <ChartOrSandbox
        vizName={'BarplotStackedNegativeOverlappingDemo'}
        VizComponent={BarplotStackedNegativeOverlappingDemo}
        height={400}
        maxWidth={700}
        caption={
          'With the overlapping strategy items are drawn successively, going up and down and overlapping if necessary'
        }
      />

      <br />

      <p>Let's recap the pros and cons of this diverging option:</p>
      <div className="">
        <div>
          <p className="px-2 bg-green-400 rounded-md text-white w-16 text-md">
            Pros
          </p>
          <ul>
            <li>
              Depending on the group order, the Y value can reflect the sum of
              the items. But it's not guarantee.
            </li>
          </ul>
        </div>
        <br />
        <div>
          <p className="px-2 bg-red-400 rounded-md text-white w-16 text-md">
            Cons
          </p>
          <ul>
            <li>
              Groups overlap each other. Information is hidden. Chart is
              unreadable
            </li>
          </ul>
        </div>
      </div>

      {/*
      *
      Part 4: Conclusion
      *
      */}
      <h2 id="Conclusion">Conclusion </h2>
      <p>
        In my opinion the first option (<b>diverging</b>) makes much more sense
        than the second one (<b>overlapping</b>). The cons are very limited:
      </p>
      <ul>
        <li>
          It is true that the net total value is not available. But if that's
          what interests you, you don't have to split the dataset by subgroups,
          just create a line chart with a single line!
        </li>
        <li>
          Having a group flipping from top to bottom is indeed annoying.
          However, the hover effect that is included allows to quickly see what
          happens for a specific group.
        </li>
      </ul>

      <br />
      <p>
        It's also important to note that most dataviz tools choosed this
        approach. Here is an example using the same dataset using the{' '}
        <a href="https://r-graph-gallery.com/ggplot2-package.html">ggplot2</a>
        library (left) and data wrapper (right).
      </p>

      <p>
        {' '}
        <br />
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        <img
          src="/img/stacked-barchart-ggplot2.png"
          alt="stacked barplot with R and ggplot2"
        />
        <img
          src="/img/stacked-barchart-datawrapper.png"
          alt="stacked barplot with data wrapper"
        />
      </div>

      <div className="w-100 flex flex-row justify-center">
        <Caption>
          Same dataset that includes negative values plotted with ggplot2 (left)
          and data wrapper (right)
        </Caption>
      </div>

      <p>
        <br />
      </p>
      <p>
        Last but not least, I really like this example by <code>chartio</code>{' '}
        that fixes the non available total issue by <b>adding a line</b> on top
        of the stacked barchart to show the total:
      </p>

      <br />
      <img
        src="/img/stacked-barchart-chartio.png"
        alt="stacked barplot with chartio"
      />

      <div className="w-100 flex flex-row justify-center">
        <Caption>
          Chartio displays the total of each timestamp using a line chart on top
          of the stacked items.
        </Caption>
      </div>

      <p>
        <br />
      </p>
      <br />
      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
    </Layout>
  );
}
