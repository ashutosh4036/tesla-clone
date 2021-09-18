import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import bg from '../images/model-y.jpg'
import bs from'../images/model-s.jpg'
import bx from '../images/model-3.jpg'
import by from '../images/model-x.jpg'
import sp from '../images/solar-panel.jpg'
import sr from '../images/solar-roof.jpg'
import acc from '../images/accessories.jpg'
function Home() {
    return (
        <Container>
          <div style={ {backgroundImage: `url(${bs})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Section
              title="Model S"
              description="Order Online for Touchless Delivery"
              backgroundImg="model-s.img"
              leftBtnText="Custom Order"
              rightBtnText="Existing inventory"
            
            />
            </div>
            <div style={ {backgroundImage: `url(${bg})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Section 
             title="Model Y"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-y.img"
             leftBtnText="Custom Order"
             rightBtnText="Existing inventory"
            />
            </div>
            <div style={ {backgroundImage: `url(${bx})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Section 
             title="Model 3"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-3.img"
             leftBtnText="Custom Order"
             rightBtnText="Existing inventory"
            />
            </div>
            <div style={ {backgroundImage: `url(${by})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Section 
             title="Model X"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-x.img"
             leftBtnText="Custom Order"
             rightBtnText="Existing inventory"
            />
            </div>
            <div style={ {backgroundImage: `url(${sp})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Section
               title="Lowest Cost Solar Pannels"
               description="Money-back gurantee"
               backgroundImg="solar-pannel.jpg"
               leftBtnText="Order-now"
               rightBtnText="Learn more"
               />
            </div>
            <div style={ {backgroundImage: `url(${sr})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Section
               title="Solar for New Roofs"
               description="Solar Roof Costs Less Than New Roof Plus Solar Panels"
               backgroundImg="solar-pannel.jpg"
               leftBtnText="Order-now"
               rightBtnText="Learn more"
               />
            </div>
            <div style={ {backgroundImage: `url(${acc})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Section
               title="Accessories"
               backgroundImg="accessories.jpg"
               leftBtnText="Shop now"
               
               />
            </div>


        </Container>
    )
}

export default Home

const Container = styled.div`
  height: 100vh;
  @media (max-width: 768px){
      display: flex;
  }


`;
