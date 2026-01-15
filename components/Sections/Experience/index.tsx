import { List } from 'components/List'
import { SectionBlock } from 'components/SectionBlock'
import { SectionTitle } from 'components/SectionTitle'
import { Mark } from 'components/Typography/Mark'
import styled from 'styled-components'

type ParagraphProps = {
  first?: boolean
}

const Paragraph = styled.div<ParagraphProps>`
  margin-bottom: 0;
  margin-top: ${({ first }) => (first ? '0' : '16px')};
`

export const Experience = () => (
  <>
    <SectionTitle>Experience</SectionTitle>

    <SectionBlock
      primaryInformation="2021 - now"
      secondaryInformation="Rome, Italy"
      subtitle="ProntoPro"
      title="Director of Engineering"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Shape the technology strategy</li>
            <li>
              <Mark>Attract and mentor talented Software Engineers</Mark>
            </li>
            <li>Supervise architectural decisions</li>
            <li>Improve and innovate the product development workflow</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>TypeScript, Go</li>
            <li>React, React Native, Next.js, Snowplow</li>
            <li>PostgreSQL, Snowflake</li>
            <li>Docker, AWS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2018 - 2021"
      secondaryInformation="Rome, Italy"
      subtitle="ProntoPro"
      title="Technical Lead"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Foster team success and growth</Mark>
            </li>
            <li>Supervise the Squad's architectural decisions</li>
            <li>Defend and enhance the Squad's product development workflow</li>
            <li>Design and develop product features for web and native applications</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>React, Next.js, NodeJS, ExpressJS, Symfony, Twig</li>
            <li>Docker, Kubernetes, Helm</li>
            <li>TypeScript, PHP, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2017 - 2021"
      secondaryInformation="Milan, Italy"
      subtitle="ProntoPro"
      title="Frontend Lead"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Hire and train</li>
            <li>
              <Mark>Supervise Frontend architectural decisions</Mark>
            </li>
            <li>Improve the Frontend technical standards</li>
            <li>Foster technological innovation in the Frontend team</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>React, Redux, Reselect, ImmutableJS, io-ts, fp-ts</li>
            <li>Next.js, NodeJS, ExpressJS</li>
            <li>JavaScript, TypeScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2016 – 2017"
      secondaryInformation="Milan, Italy"
      subtitle="ProntoPro"
      title="Senior Software Engineer"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Design and develop product features for web and native applications</Mark>
            </li>
            <li>Write unit and integration tests</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>React, Redux, Reselect, ImmutableJS, jQuery</li>
            <li>NodeJS, ExpressJS, Symfony, Twig</li>
            <li>JavaScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2015 - 2016"
      secondaryInformation="Ancona, Italy"
      subtitle="The Hive CoWorking &amp; Incubator"
      title="Software Consultant"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Provide tech consulting on website and app development for startups</li>
            <li><Mark>Advise on technology strategy, architecture, and tool selection to support growth</Mark></li>
            <li>Conduct workshops on agile development and best practices for digital products</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS, Meteor</li>
            <li>NodeJS, ExpressJS, MongoDB</li>
            <li>JavaScript, TypeScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2015 - 2016"
      secondaryInformation="Ancona, Italy"
      subtitle="ArToo Campus"
      title="JavaScript Trainer"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Prepare teaching materials</li>
            <li>
              <Mark>Deliver lectures and seminars</Mark>
            </li>
            <li>Check and assess students work</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS</li>
            <li>NodeJS, ExpressJS, MongoDB</li>
            <li>JavaScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2014 - 2016"
      secondaryInformation="Ancona, Italy"
      subtitle="Sida Group Srl"
      title="Software Consultant"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Design and develop APIs, middlewares, web applications</Mark>
            </li>
            <li>Optimize existing software</li>
            <li>Hire and train</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS, NodeJS, ExpressJS</li>
            <li>JavaScript, TypeScript, Python</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2013 - 2016"
      secondaryInformation="Ancona, Italy"
      subtitle="WeBox Studio"
      title="Technical Lead"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Design and develop websites, desktop and web applications, APIs, middlewares</Mark>
            </li>
            <li>Foster team success and growth</li>
            <li>Hire and train</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS, jQuery, Meteor</li>
            <li>NodeJS, ExpressJS, MongoDB, MySQL, Elasticsearch</li>
            <li>JavaScript, TypeScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2012 - 2014"
      secondaryInformation="Poznań, Poland"
      subtitle="Coworkingness Consulting"
      title="Software Engineer"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
          <List>
            <li><Mark>Provide tech consulting on website and app development for startups</Mark></li>
            <li>Conduct workshops on agile development and best practices for digital products</li>
          </List>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>AngularJS</li>
            <li>NodeJS, MongoDB</li>
            <li>JavaScript, HTML, CSS/SASS</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2011 - 2012"
      secondaryInformation="Reykjavik, Iceland"
      subtitle="CADIA"
      title="Software Engineer"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>
              <Mark>Design and develop smart home management platforms</Mark>
            </li>
            <li>Design and develop virtual environments</li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>JavaScript, Python, Panda 3D</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>

    <SectionBlock
      last
      primaryInformation="2008"
      secondaryInformation="Fano, Italy"
      subtitle="Computer Sistemi Group"
      title="Software Engineer"
    >
      <>
        <Paragraph first>
          Responsibilities:
          <List>
            <li>Design and develop management systems</li>
            <li>
              <Mark>Perform business requirements analysis</Mark>
            </li>
          </List>
        </Paragraph>
        <Paragraph>
          Technology:
          <List>
            <li>Java EE, C#</li>
          </List>
        </Paragraph>
      </>
    </SectionBlock>
  </>
)
