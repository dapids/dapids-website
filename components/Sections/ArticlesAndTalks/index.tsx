import { faCalendarAlt, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as LinkBase } from 'components/Link'
import { SectionBlock } from 'components/SectionBlock'
import { SectionTitle } from 'components/SectionTitle'
import { Body } from 'components/Typography/Body'
import styled from 'styled-components'

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

const Video = styled.div`
  overflow: hidden;
  position: relative;
  width:100%;

  ::after {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export const ArticlesAndTalks = () => (
  <>
    <SectionTitle>Articles &amp; talks</SectionTitle>

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

        <Video>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            height="315"
            src="https://www.youtube.com/embed/bJujIiTK5PQ?start=579"
            width="560"
          ></iframe>
        </Video>
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

        <Video>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            height="315"
            src="https://www.youtube.com/embed/J74_lvROKqc"
            width="560"
          ></iframe>
        </Video>
      </>
    </SectionBlock>
  </>
)
