import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Personal portfolio
      </SectionTitle>
      <SectionText>
        I offer solution on the various design, content-creating and website
        development to both individuals and also to firm who may need certain
        assistance in their website and softwares
      </SectionText>
      <Button onClick={() => (window.location = 'http://google.com')}>
        {' '}
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
