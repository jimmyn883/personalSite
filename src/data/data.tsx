import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import testimonialImage1 from '../images/testimonial-1.jpg';
import testimonialImage2 from '../images/testimonial-2.jpg';
import testimonialImage3 from '../images/testimonial-3.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jimmy Njuguna',
  description: 'A site showcasing my work and skills as a software engineer.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jimmy Njuguna.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Denver based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">SimpleSUB Water</strong> managing the web application to support water
        conservation and sustainable infrastructure.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me playing basketball, researching new technology, or playing video games.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};
/**
 * Calculate age from birthdate
 * @param birthDate - Date of birth
 * @returns Age in years
 */
const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) age--;

  return age;
};
const age = calculateAge(new Date('2001-02-01'));

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a full-stack software engineer with a Computer Science degree from the University of Virginia 
  and two years of professional experience at Amazon, where I focused on full-stack architecture across supply chain, 
  sustainability, and collaboration tools. Today, I manage the web application at SimpleSUB Water, a mission-driven 
  startup building tools to support water conservation and sustainable infrastructure. My background as a military kid 
  and global traveler—having lived or spent time across North America, Europe, Africa, Asia, and Australia—shapes how 
  I think, build, and collaborate. I bring a global mindset, a strong sense of inclusion, and a drive to take initiative 
  on every project I take on. Outside of code, I’ve led peer mentoring groups, taught programming as a Head Teaching Assistant, and 
  built communities as a resident advisor. Whether it's building scalable platforms, leading UI redesigns, or just shipping 
  clean code that makes someone's day easier, I’m here to solve meaningful problems with creativity, empathy, and impact.`,
  aboutItems: [
    {label: 'Location', text: 'Denver, CO', Icon: MapIcon},
    {label: 'Age', text: age.toString(), Icon: CalendarIcon},
    {label: 'Nationality', text: 'African American / Latino', Icon: FlagIcon},
    {label: 'Interests', text: 'Technology, Basketball, Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Virginia', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'SimpleSUB Water', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Nezuko Drawing',
    description:
      'A procedural Python illustration of Nezuko Kamado from Demon Slayer, drawn using basic commands in the Python Imaging Library (PIL).',
    url: 'https://github.com/jimmyn883/nezuko_drawing',
    image: porfolioImage1,
  },
  {
    title: 'Duper Brawler Siblings',
    description:
      'A multiplayer platform fighter where you can knock your friend all over the screen with punches, kicks and specials!',
    url: 'https://uvacs.games/',
    image: porfolioImage2,
  },
  {
    title: 'Louis T. Rader Teaching Award 2022',
    description:
      'Louis T. Rader Undergraduate Chairperson Awards: These awards go to undergraduate students based on: (1) academic ability, (2) ability to get along with people, and (3) demonstrated ability to work hard. Students can be nominated for their research, or other achievements and contributions including teaching and service to the CS department.',
    url: 'https://engineering.virginia.edu/department/computer-science/blogs/2021-2022-cs-department-end-year-awards',
    image: porfolioImage3,
  },
  {
    title: 'Louis T. Rader Teaching Award 2023',
    description:
      'Louis T. Rader Undergraduate Chairperson Awards: These awards go to undergraduate students based on: (1) academic ability, (2) ability to get along with people, and (3) demonstrated ability to work hard. Students can be nominated for their research, or other achievements and contributions including teaching and service to the CS department.',
    url: 'https://engineering.virginia.edu/department/computer-science/blogs/cs-department-end-year-award-recipients-2022-2023',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2023',
    location: 'University of Virginia',
    title: 'Bachelor of Science in Computer Science',
    content: (
      <p>
        Graduated with a B.S. in Computer Science, where I built a strong foundation in full-stack development,
        algorithms, and systems programming. I served as a teaching assistant for introductory programming courses and
        mentored peers through the CS department and Math Honor Society. My coursework and hands-on projects emphasized
        writing clean, efficient code and approaching problems from multiple angles — a mindset I carry into every team
        and tech stack I work with.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2025 - Present',
    location: 'SimpleSUB Water',
    title: 'Full Stack Software Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'July 2023 - October 2024',
    location: 'Amazon Web Services',
    title: 'Software Development Engineer',
    content: (
      <>
        <p>
          AWS Supply Chain (Sustainability): Led front-end development to visualize emissions and sustainability metrics
          for customers.
        </p>
        <p>
          AWS Supply Chain (Collaboration): Delivered full-stack features enabling collaboration between suppliers and
          manufacturers.
        </p>
        <p>
          AWS Air & Science: Enhanced a global file system for Protective Caps Configurations by introducing
          network-specific configs and optimizing data access across regions.
        </p>
      </>
    ),
  },
  {
    date: 'May 2022 - August 2022',
    location: 'Amazon',
    title: 'Software Development Engineer Intern',
    content: (
      <>
        <p>Streamlined Amazon Pharmacy’s signup flow, increasing customer conversion.</p>
        <p>Built the new signup experience using TypeScript, React, and HTML, reaching millions of users.</p>
      </>
    ),
  },
  {
    date: 'June 2021 - August 2021',
    location: 'Amazon',
    title: 'Software Development Engineer Intern',
    content: (
      <>
        <p>Designed and prototyped a search service using ElasticSearch to unify Amazon’s COVID-19 test result data.</p>
        <p>Authored and iterated on a team-reviewed design document.</p>
        <p>Delivered a functional demo to both technical and non-technical stakeholders, highlighting key use cases.</p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Tyler Belfield',
      text: 'This dude can code.',
      image: testimonialImage1,
    },
    {
      name: 'Njuguna Macaria',
      text: "That's my offspring.",
      image: testimonialImage2,
    },
    {
      name: 'Anjesa Terstena',
      text: 'We did a project together, and he made it lit.',
      image: testimonialImage3,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Whether you’re building something impactful, looking for a creative collaborator, or just want to chat tech, design, or sustainability—I’m always open to a good conversation. Reach out and let’s talk.',
  items: [
    {
      type: ContactType.Email,
      text: 'jimmyn883@gmail.com',
      href: 'mailto:jimmyn883@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Denver, CO',
      href: 'https://www.google.ca/maps/place/Denver,+CO/@39.7598878,-104.9667918,11.55z/data=!4m6!3m5!1s0x876b80aa231f17cf:0x118ef4f8278a36d6!8m2!3d39.7392358!4d-104.990251!16zL20vMDJjbDE?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@jimmyn883',
      href: 'https://www.instagram.com/jimmyn883/',
    },
    {
      type: ContactType.Github,
      text: 'jimmyn883',
      href: 'https://github.com/jimmyn883',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jimmyn883'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jimmynjuguna/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jimmyn883/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
