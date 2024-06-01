import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>most recommanded jobs :</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/computereng.jpg'
              text='JOB: Computer engineer'
              label='1'
              path='/services'
            />
            <CardItem
              src='images/geni.png'
              text='JOB: Civil engineering'
              label='2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/R.jpeg'
              text='JOB: Flight attendant'
              label='3'
              path='/services'
            />
            <CardItem
              src='images/OIP.jpeg'
              text='JOB: Waiter'
              label='4'
              path='/products'
            />
            <CardItem
              src='images/d.jpeg'
              text='JOB: Chef'
              label='5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;