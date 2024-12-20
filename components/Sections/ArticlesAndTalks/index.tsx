import { faCalendarAlt, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { YouTubeEmbed } from '@next/third-parties/google'
import styled from 'styled-components'
import { Link as LinkBase } from 'components/Link'
import { SectionBlock } from 'components/SectionBlock'
import { SectionTitle } from 'components/SectionTitle'
import { Body } from 'components/Typography/Body'

const Paragraph = styled(Body).attrs({
  weight: '400',
})`
  margin-bottom: 32px;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`

const Image = styled.img`
  display: block;
  max-width: 100%;
`

const Link = styled(LinkBase)`
  text-decoration: underline;
`

const VideoContainer = styled.div`
  width: 100%;
`

export const ArticlesAndTalks = () => (
  <>
    <SectionTitle>Articles &amp; talks</SectionTitle>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 17/11/2024</span>
      }
      secondaryInformation={
        <Link href="https://medium.com/@dapids17/demystifying-deadlines-the-balancing-act-between-perfect-and-done-5d6e159c9b27" target="_blank">
          <Icon icon={faLink} /> Link to the article
        </Link>
      }
      subtitle="Medium"
      title="Demystifying deadlines: the balancing act between perfect and done"
    >
      <>
        <Paragraph>
          How deadlines have helped me balance perfection and progress in software engineering, driving focus, prioritization, and delivery.
        </Paragraph>

        <Link href="https://medium.com/@dapids17/demystifying-deadlines-the-balancing-act-between-perfect-and-done-5d6e159c9b27" target="_blank">
          <Image alt="A person standing on one leg and trying to balance." src="./article-demystifying-deadlines-the-balancing-act-between-perfect-and-done.webp" />
        </Link>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 02/11/2024</span>
      }
      secondaryInformation={
        <Link href="https://medium.com/@dapids17/building-a-user-behavior-tracking-and-analytics-platform-c1b14453bf34" target="_blank">
          <Icon icon={faLink} /> Link to the article
        </Link>
      }
      subtitle="Medium"
      title="Building a user-behavior tracking and analytics platform: key components and insights"
    >
      <>
        <Paragraph>
          A journey through key building blocks for setting up a user behavior tracking and analytics platform, adaptable to any tech stack and best practices.
        </Paragraph>

        <Link href="https://medium.com/@dapids17/building-a-user-behavior-tracking-and-analytics-platform-c1b14453bf34" target="_blank">
          <Image alt="A person working on a user behavior analysis." src="./article-building-a-user-behavior-tracking-and-analytics-platform.jpg" />
        </Link>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 23/10/2024</span>
      }
      secondaryInformation={
        <Link href="https://medium.com/@dapids17/codemotion-2024-a-journey-of-inspiration-insights-and-community-b2451f340d8f" target="_blank">
          <Icon icon={faLink} /> Link to the article
        </Link>
      }
      subtitle="Medium"
      title="Codemotion 2024: a journey of inspiration, insights, and community"
    >
      <>
        <Paragraph>
          My notes about the October 2024 Codemotion conference in Milan.
        </Paragraph>

        <Link href="https://medium.com/@dapids17/codemotion-2024-a-journey-of-inspiration-insights-and-community-b2451f340d8f" target="_blank">
          <Image alt="People working on improving their motivation" src="./article-codemotion-2024.webp" />
        </Link>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 21/06/2024</span>
      }
      secondaryInformation={
        <Link href="https://medium.com/@dapids17/sorting-motivators-a-powerful-management-tool-ae7ac4194e7d" target="_blank">
          <Icon icon={faLink} /> Link to the article
        </Link>
      }
      subtitle="Medium"
      title="Sorting Motivators: a powerful management tool"
    >
      <>
        <Paragraph>
          A management tool that helps understand what intrinsically motivates our talents, improving communication, increasing engagement, and lower ing burnout.
        </Paragraph>

        <Link href="https://medium.com/@dapids17/sorting-motivators-a-powerful-management-tool-ae7ac4194e7d" target="_blank">
          <Image alt="People working on improving their motivation" src="./article-sorting-motivators.jpg" />
        </Link>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 23/03/2024</span>
      }
      secondaryInformation={
        <Link href="https://medium.com/@dapids17/1-1-meetings-best-practices-for-talents-and-managers-bb90c68139f0" target="_blank">
          <Icon icon={faLink} /> Link to the article
        </Link>
      }
      subtitle="Medium"
      title="1:1 meetings best practices for talents and managers"
    >
      <>
        <Paragraph>
          Best practices about 1:1 meetings. In the article, I try to reverse the usual point of view on this topic, focusing on talents as the main audience.
        </Paragraph>

        <Link href="https://medium.com/@dapids17/1-1-meetings-best-practices-for-talents-and-managers-bb90c68139f0" target="_blank">
          <Image alt="Two people having a 1:1 meeting" src="./article-1-1-meetings-best-practices-for-talents-and-managers.webp" />
        </Link>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 10/05/2023</span>
      }
      secondaryInformation={
        <Link href="https://medium.com/@dapids17/the-importance-of-being-a-good-communicator-65a6737fa071" target="_blank">
          <Icon icon={faLink} /> Link to the article
        </Link>
      }
      subtitle="Medium"
      title="Communication 101"
    >
      <>
        <Paragraph>
          Some basic knowledge and best practices that helped me become a better communicator.
        </Paragraph>

        <Link href="https://medium.com/@dapids17/the-importance-of-being-a-good-communicator-65a6737fa071" target="_blank">
          <Image alt="Two people having a conversation" src="./article-communication-101.jpg" />
        </Link>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 11/03/2023</span>
      }
      secondaryInformation={
        <Link href="https://medium.com/@dapids17/situational-leadership-101-4591e76e65a5" target="_blank">
          <Icon icon={faLink} /> Link to the article
        </Link>
      }
      subtitle="Medium"
      title="Situational leadership 101"
    >
      <>
        <Paragraph>
          What is situational leadership? Why is it important? How could we exploit it to make a positive impact in our organizations and communities?
        </Paragraph>

        <Link href="https://medium.com/@dapids17/situational-leadership-101-4591e76e65a5" target="_blank">
          <Image alt="Supportive and directive behavior in different leadership styles" src="./article-situational-leadership-chart.webp" />
        </Link>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 21/07/2021</span>
      }
      secondaryInformation={
        <Link href="https://prontopro.engineering/blog/autonomous-decision-making-in-software-engineering" target="_blank">
          <Icon icon={faLink} /> Link to the article
        </Link>
      }
      subtitle="ProntoPro Engineering blog"
      title="Autonomous decision-making in Software Engineering"
    >
      <>
        <Paragraph>
          How we foster autonomous decision-making in ProntoPro.
        </Paragraph>

        <Link href="https://prontopro.engineering/blog/autonomous-decision-making-in-software-engineering" target="_blank">
          <Image alt="Decision-making flowchart" src="./article-decision-making-flowchart.jpg" />
        </Link>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 03/07/2021</span>
      }
      secondaryInformation={
        <Link href="https://prontopro.engineering/blog/talent-pipeline-for-engineers" target="_blank">
          <Icon icon={faLink} /> Link to the article
        </Link>
      }
      subtitle="ProntoPro Engineering blog"
      title="Talent pipeline for Engineers"
    >
      <>
        <Paragraph>
          How we recruit talented Engineers in ProntoPro.
        </Paragraph>

        <Link href="https://prontopro.engineering/blog/talent-pipeline-for-engineers" target="_blank">
          <Image alt="Talent pipeline for Engineers" src="./article-talent-pipeline.jpg" />
        </Link>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 17/02/2021</span>
      }
      secondaryInformation={
        <Link href="https://prontopro.engineering/blog/software-engineer-growth-framework" target="_blank">
          <Icon icon={faLink} /> Link to the article
        </Link>
      }
      subtitle="ProntoPro Engineering blog"
      title="Software Engineers Growth framework"
    >
      <>
        <Paragraph>
          Some details about the launch of a new Growth framework for Software Engineers in ProntoPro.
        </Paragraph>

        <Link href="https://prontopro.engineering/blog/software-engineer-growth-framework" target="_blank">
          <Image alt="Software Engineers Growth framework" src="./article-growth-framework-software-engineers.png" />
        </Link>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 17/06/2020</span>
      }
      secondaryInformation={
        <Link href="https://www.meetup.com/en-AU/RomaJS/events/271172942/" target="_blank">
          <Icon icon={faLink} /> Link to the event
        </Link>
      }
      subtitle="RomaJS community"
      title="React - Write once, run everywhere"
    >
      <>
        <Paragraph>
          In this talk I explain how in ProntoPro we managed to have one codebase for multiple platforms and what are the advantages and disadvantages of setting up and maintaining such a solution.
          The talk is in Italian. <Link href="https://docs.google.com/presentation/d/185CijvlYu9Ia5ZT0pDnKhnzCQ96JS2zm3juGNYj2Qcw/" target="_blank">Slides</Link> are in English.
        </Paragraph>

        <VideoContainer>
          <YouTubeEmbed videoid="bJujIiTK5PQ" params="controls=0&start=579" />
        </VideoContainer>
      </>
    </SectionBlock>

    <SectionBlock
      last
      primaryInformation={
        <span><Icon icon={faCalendarAlt} /> 02/10/2018</span>
      }
      secondaryInformation={
        <Link href="https://milano2018.intersection-conference.eu/react-ux-development" target="_blank">
          <Icon icon={faLink} /> Link to the event
        </Link>
      }
      subtitle="Intersection Conference"
      title="React as a bridge between UX and development"
    >
      <>
        <Paragraph>
          Designers and developers tend to look at UI components with different eyes. In this talk I share the role React had in ProntoPro in aligning their points of view.
        </Paragraph>

        <VideoContainer>
          <YouTubeEmbed videoid="J74_lvROKqc" params="controls=0" />
        </VideoContainer>
      </>
    </SectionBlock>
  </>
)
