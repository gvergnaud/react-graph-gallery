import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import Link from 'next/link';
import { Code } from 'lucide-react';
import { Caption } from '@/component/UI/Caption';

const previousURL = '/course/axis/introduction';
const currentURL = '/course/axis/margin-and-translation';
const nextURL = '/course/axis/bottom-axis';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);

  if (!currentLesson) {
    return null;
  }

  return (
    <LayoutCourse
      title={currentLesson.name}
      seoDescription={seoDescription}
      nextTocItem={lessonList.find((l) => l.link === nextURL)}
      previousTocItem={lessonList.find((l) => l.link === previousURL)}
    >
      <TitleAndDescription
        title={currentLesson.name}
        lessonStatus={currentLesson.status}
        readTime={currentLesson.readTime}
        selectedLesson={currentLesson}
        description={
          <>
            <p>
              Most chart types use a <b>bottom</b> and <b>left</b> axis.
            </p>
            <p>
              In these cases, we need to <b>leave space</b> for tick labels and
              axis titles. Let’s look at how to implement this effectively.
            </p>
          </>
        }
      />
      <h2>SVG Area and Bounds Area</h2>
      <p>
        Imagine an SVG area with a <code>width</code> of 500px and a{' '}
        <code>height</code> of 300px.
      </p>
      <p>
        The left and bottom axes aren’t displayed right at the SVG border.
        Instead, we add <b>margins</b> on all sides: left, right, bottom, and
        top.
      </p>
      <p>
        The area within these margins is known as the <b>bounds</b>, where the
        chart content is positioned between the x and y axes. In our code, we’ll
        refer to the width and height of this bounds area as{' '}
        <code>boundsWidth</code> and <code>boundsHeight</code>.
      </p>

      <div className="flex flex-col items-center mt-8 mb-12">
        <img
          src="/excalidraw/bounds-explanation.png"
          style={{ maxWidth: 750 }}
          alt="Anatomy of the chart areas: some margins are set all around the SVG area. The area inside is called the Bounds."
        />
        <Caption>
          Anatomy of the chart areas: some margins are set all around the SVG
          area. The area inside is called the Bounds.
        </Caption>
      </div>
      {/* -
-
-
-
-
-
-
- */}

      <h2>Implementation</h2>
      <p>
        A chart component often starts by defining its margins. An object with 4
        properties is ideal for that:
      </p>
      <CodeBlock
        code={`
const MARGIN = {
  top: 10,
  right: 30,
  bottom: 50,
  left: 30
}
      `.trim()}
      />

      <p>
        Since the chart component has defined <code>width</code> and{' '}
        <code>height</code>, we can easily determine the dimensions of the
        bounds area, referred to as <code>boundsWidth</code> and{' '}
        <code>boundsHeight</code>:
      </p>

      <CodeBlock
        code={`
const boundsWidth = width - MARGIN.right - MARGIN.left;
const boundsHeight = height - MARGIN.top - MARGIN.bottom;
      `.trim()}
      />

      <h3>🪄 The tricky part</h3>

      <p>Finally the svg is going to be rendered like this:</p>
      <CodeBlock
        code={`
<svg width={width} height={height}>
  <g
    width={boundsWidth}
    height={boundsHeight}
    transform={"translate(" + MARGIN.left + " , " + MARGIN.top].join(',')})"}
  >
    // ... all shapes go here
  </g>
</svg>
      `.trim()}
      />
      <p>What's going on here? 😱</p>
      <p>
        1️⃣ The SVG area is created as usual with the <code>svg</code> element,
        along with the specified <code>width</code> and <code>height</code>.
      </p>
      <p>
        2️⃣ The <code>g</code> element is used to group other SVG elements,
        similar to how a <code>div</code> works in HTML. This group represents
        the bounds, defined by its <code>boundsWidth</code> and{' '}
        <code>boundsHeight</code> dimensions!
      </p>
      <p>
        3️⃣ The <code>transform</code> property is used to translate the bounds
        slightly to the right and down, creating space for the left and top
        margins!
      </p>

      <h2>Exercices</h2>
      <p>TODO</p>

      <h2>Drawing the Axis</h2>
      <p>
        Now that we’ve created space for it, it’s time to <b>draw the axis</b>.
        Let’s build some reusable components for this!
      </p>
    </LayoutCourse>
  );
}