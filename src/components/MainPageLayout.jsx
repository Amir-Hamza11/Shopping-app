import { Container, Grid, Row } from 'rsuite'
import React from 'react'
import Title from './Title'
import Navigation from './Navigation'

const MainPageLayout = ({ children }) => {
  return (
    <Container >

      <Grid >
        <Row>
          <div className='text-center padded' >
            <Title />
          </div>
          <div className='mt-2' >
            <Navigation />
          </div>
          {children}
        </Row>
      </Grid>
    </Container>


  )
}

export default MainPageLayout