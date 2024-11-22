import React from 'react'
import { Container, Wrapper, Title, CardContainer } from './ServiceStyle'
import ServiceCard from '../Cards/ServiceCards'
import { Services } from '../../data/constants'


const NexzapServices = ({openModal,setOpenModal}) => {
  return (
    <Container id="services">
      <Wrapper>
        <Title>Services</Title>
        <CardContainer>
          {Services
            .map((project) => (
              <ServiceCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}

        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default NexzapServices