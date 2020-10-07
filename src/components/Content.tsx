import React from 'react';
import './Content.scss';

function Content() {
  return (
    <section className="content">
        <p className="content__title">
            Start your Business with us
        </p>
        <p className="content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo 
            viverra maecenas accumsan lacus vel facilisis. 
        </p>
        <button className="content__button">GET STARTED</button>
    </section>
  );
}

export default Content;