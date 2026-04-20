import { List } from 'components/List'
import { SectionBlock } from 'components/SectionBlock'
import { SectionTitle } from 'components/SectionTitle'
import { Mark } from 'components/Typography/Mark'

export const Education = () => (
  <>
    <SectionTitle>Education</SectionTitle>

    <SectionBlock
      primaryInformation="2010 – 2012"
      secondaryInformation="Grade: 9/10"
      subtitle="Master's Degree in Computer Science"
      title="Háskólinn í Reykjavík"
    >
      <>
        In my Master's Degree study path I mainly focused on the following subjects:
        <List>
          <li>
            <Mark>Machine learning</Mark>
          </li>
          <li>Virtual environments</li>
          <li>Human-Computer Interfaces</li>
        </List>
      </>
    </SectionBlock>

    <SectionBlock
      primaryInformation="2010 – 2012"
      secondaryInformation="Grade: 110/110 and honors"
      subtitle="Master's Degree in Computer Science"
      title="University of Camerino"
    >
      <>
        In my Master's Degree study path I mainly focused on the following subjects:
        <List>
          <li>
            <Mark>Advanced Software Engineering</Mark>
          </li>
          <li>Complex System Design</li>
          <li>Distributed Calculus and Coordination</li>
        </List>
      </>
    </SectionBlock>

    <SectionBlock
      last
      primaryInformation="2006 – 2010"
      secondaryInformation="Grade: 110/110"
      subtitle="Bachelor's Degree in Computer Science"
      title="University of Urbino"
    >
      <>
        In my Bachelor's Degree study path I mainly focused on the following subjects:
        <List>
          <li>Programming Languages and Compilers</li>
          <li>
            <Mark>Algorithms and Data Structures</Mark>
          </li>
          <li>Networks / Internet security</li>
          <li>Databases</li>
        </List>
      </>
    </SectionBlock>
  </>
)
