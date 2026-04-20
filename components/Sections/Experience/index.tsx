import { Link } from 'components/Link'
import { SectionTitle } from 'components/SectionTitle'
import styles from './index.module.css'

type Kind = 'work' | 'education' | 'talk'

interface TimelineResource {
  href: string
  label: string
}

interface TimelineEntry {
  date: string
  kind: Kind
  role: string
  organization: string
  description: string
  resources?: TimelineResource[]
}

const entries: TimelineEntry[] = [
  {
    date: '2021 - now',
    kind: 'work',
    role: 'Director of Engineering',
    organization: 'ProntoPro',
    description:
      'Shaped the technology strategy across multiple squads, hired and grew the engineering organization, and led the transition to a modern platform stack.',
  },
  {
    date: '17/06/2020',
    kind: 'talk',
    role: 'React - Write once, run everywhere',
    organization: 'RomaJS community',
    description:
      'Explained how we managed a single codebase for multiple platforms at ProntoPro, including trade-offs and maintenance costs. The talk is in Italian and the slides are in English.',
    resources: [
      {
        href: 'https://www.meetup.com/en-AU/RomaJS/events/271172942/',
        label: 'Event',
      },
      {
        href: 'https://docs.google.com/presentation/d/185CijvlYu9Ia5ZT0pDnKhnzCQ96JS2zm3juGNYj2Qcw/',
        label: 'Slides',
      },
      {
        href: 'https://www.youtube.com/watch?v=bJujIiTK5PQ&t=579s',
        label: 'Video',
      },
    ],
  },
  {
    date: '2018 - 2021',
    kind: 'work',
    role: 'Technical Lead',
    organization: 'ProntoPro',
    description:
      "Owned the squad's architectural decisions, mentored engineers, and introduced practices that cut release cycle time in half.",
  },
  {
    date: '02/10/2018',
    kind: 'talk',
    role: 'React as a bridge between UX and development',
    organization: 'Intersection Conference',
    description:
      'Designers and developers tend to look at UI components differently. In this talk I shared how React helped ProntoPro align both perspectives.',
    resources: [
      {
        href: 'https://milano2018.intersection-conference.eu/react-ux-development',
        label: 'Event',
      },
      {
        href: 'https://www.youtube.com/watch?v=J74_lvROKqc',
        label: 'Video',
      },
    ],
  },
  {
    date: '2017 - 2021',
    kind: 'work',
    role: 'Frontend Lead',
    organization: 'ProntoPro',
    description:
      'Established frontend standards, bootstrapped the design system, and scaled the frontend team from 2 to 8 engineers.',
  },
  {
    date: '2016 - 2017',
    kind: 'work',
    role: 'Senior Software Engineer',
    organization: 'ProntoPro',
    description:
      'Designed and shipped core product features for web and mobile; introduced TypeScript and improved test coverage across the codebase.',
  },
  {
    date: '2015 - 2016',
    kind: 'work',
    role: 'Software Consultant',
    organization: 'The Hive CoWorking & Incubator',
    description:
      'Advised early-stage startups on technology strategy, architecture, and tooling; conducted workshops on agile development.',
  },
  {
    date: '2015 - 2016',
    kind: 'work',
    role: 'JavaScript Trainer',
    organization: 'ArToo Campus',
    description:
      'Designed and delivered a full JavaScript curriculum — from fundamentals to AngularJS — for cohorts of junior developers.',
  },
  {
    date: '2014 - 2016',
    kind: 'work',
    role: 'Software Consultant',
    organization: 'Sida Group Srl',
    description:
      'Built APIs, middlewares, and internal web applications; optimised legacy systems and hired junior engineers.',
  },
  {
    date: '2013 - 2016',
    kind: 'work',
    role: 'Technical Lead',
    organization: 'WeBox Studio',
    description:
      'Led a team building websites, desktop and web apps for clients; introduced Node.js and TypeScript to the stack.',
  },
  {
    date: '2012 - 2014',
    kind: 'work',
    role: 'Software Engineer',
    organization: 'Coworkingness Consulting',
    description:
      'Provided tech consulting for European startups and ran workshops on agile practices and digital product development.',
  },
  {
    date: '2011 - 2012',
    kind: 'work',
    role: 'Software Engineer',
    organization: 'CADIA - Center for Analysis and Design of Intelligent Agents',
    description:
      'Developed smart-home management platforms and interactive virtual environments at the Centre for Analysis and Design of Intelligent Agents.',
  },
  {
    date: '2010 - 2012',
    kind: 'education',
    role: "Master's Degree in Computer Science",
    organization: 'Háskólinn í Reykjavík — Grade: 9/10',
    description: 'Focused on machine learning, virtual environments, and human-computer interfaces.',
  },
  {
    date: '2010 - 2012',
    kind: 'education',
    role: "Master's Degree in Computer Science",
    organization: 'University of Camerino — Grade: 110/110 with honours',
    description: 'Focused on advanced software engineering, complex system design, and distributed calculus.',
  },
  {
    date: '2008',
    kind: 'work',
    role: 'Software Engineer Intern',
    organization: 'Computer Sistemi Srl',
    description:
      'Designed and developed enterprise management systems; performed business requirements analysis with stakeholders.',
  },
  {
    date: '2006 - 2010',
    kind: 'education',
    role: "Bachelor's Degree in Computer Science",
    organization: 'University of Urbino — Grade: 110/110',
    description: 'Covered programming languages, algorithms and data structures, network security, and databases.',
  },
]

export const Experience = () => (
  <>
    <SectionTitle>My Journey</SectionTitle>

    <ul className={styles.timeline}>
      {entries.map(({ date, kind, role, organization, description, resources }) => (
        <li
          key={`${kind}-${date}-${role}-${organization}`}
          className={`${styles.item} ${kind === 'education' ? styles.itemEducation : ''} ${kind === 'talk' ? styles.itemTalk : ''}`}
        >
          <div className={styles.dot} />
          <span className={styles.tag}>{kind === 'education' ? 'Education' : kind === 'talk' ? 'Talk' : 'Work'}</span>
          <p className={styles.date}>{date}</p>
          <h3 className={styles.role}>{role}</h3>
          <p className={styles.organization}>{organization}</p>
          <p className={styles.description}>{description}</p>
          {resources ? (
            <p className={styles.resources}>
              {resources.map((resource, index) => (
                <span key={resource.href}>
                  {index > 0 ? ' · ' : ''}
                  <Link href={resource.href} rel="nofollow" target="_blank">
                    {resource.label}
                  </Link>
                </span>
              ))}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  </>
)
