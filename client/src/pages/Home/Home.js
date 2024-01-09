import React from 'react';
import Banner from './Banner';
import Tools from './Tools';
import Summary from './Summary';
import Quotations from './Quotations';
import Reviews from './Reviews';
import Footer from '../../shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Quotations></Quotations>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;