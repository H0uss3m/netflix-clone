import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
// import requests from '../Request'
import { Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { rowOptions, alertOptions } from '../services'

const HomeScreen = () => {
  return (
    <Provider template={AlertTemplate} {...alertOptions}>
      <div className='homeScreen'>
        <Nav />
        <Banner />
        {rowOptions.map((row) =>
          row.title === 'Trending Now' ? (
            <Row
              key={row.id}
              title={row.title}
              fetchUrl={row.fetchUrl}
              isLargeRow
            />
          ) : (
            <Row key={row.id} title={row.title} fetchUrl={row.fetchUrl} />
          )
        )}
      </div>
    </Provider>
  )
}

export default HomeScreen
