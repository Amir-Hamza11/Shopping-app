import React from 'react'
import MainPageLayout from '../components/MainPageLayout'
import categories from '../categories.json'
import DisplayCategory from '../components/DisplayCategory';
import { Col, Panel } from 'rsuite';

const Home = () => {

  return (
    <MainPageLayout>
      <Col sm={24} md={24} lg={24} >
        <Panel>
          {
            categories.map((item) => {
              return (
                <DisplayCategory
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                />

              )
            })
          }
        </Panel>
      </Col>
    </MainPageLayout>
  )
}

export default Home