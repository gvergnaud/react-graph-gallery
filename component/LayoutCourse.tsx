import Navbar from './Navbar';
import Footer from './Footer';
import { HeadSeo } from './HeadSeo';
import Contact from './Contact';
import Link from 'next/link';
import { Lesson } from '@/util/lessonList';

// The Layout component
// - adds the top navBar
// - adds the footer
// - adds the head: everything needed for SEO and social media sharing

type LayoutCourseProps = {
  children: React.ReactNode;
  title: string;
  seoDescription: string;
  nextTocItem?: Lesson;
  previousTocItem?: Lesson;
};

export const LayoutCourse = ({
  children,
  title,
  seoDescription,
  previousTocItem,
  nextTocItem,
}: LayoutCourseProps) => {
  return (
    <>
      <HeadSeo title={title} seoDescription={seoDescription} />

      <Navbar />

      <div className="wrapper">{children}</div>

      <div className="flex justify-center items-center space-x-6 my-12 py-12 border-y border-black">
        {previousTocItem ? (
          <Link
            href={previousTocItem.link}
            className="text-gray-500 no-underline flex flex-col justify-center items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted "
          >
            <span className="uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text">
              &larr; Previous
            </span>
            <span>{previousTocItem.name}</span>
          </Link>
        ) : (
          <div className="w-96" />
        )}

        {nextTocItem && (
          <Link
            href={nextTocItem.link}
            className="text-gray-500 no-underline flex flex-col justify-center w-96 h-32 border-l border-black  p-8 hover:bg-muted "
          >
            <span className="uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text">
              Next &rarr;
            </span>
            <span>{nextTocItem.name}</span>
          </Link>
        )}
      </div>

      <Contact />

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
};
