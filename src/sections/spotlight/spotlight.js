import './spotlight.css';

import SpotlightBlock from '../../components/spotlightBlock/spotlightBlock'

export default function Spotlight() {
    return (
        <div className='lp-spotlight-container'>
            <SpotlightBlock legendText='Europe' headingText='What Your Customers Really Think About Your Blog?' legendColor='#FFFFFF' legendBackgroundColor='#45A29E' headingColor='#FFFFFF'>2 HOURS AGO</SpotlightBlock>
            <SpotlightBlock legendText='Aisia' headingText='Top 10 Tips To Grow Your Blog' legendColor='#FFFFFF' legendBackgroundColor='#45A29E' headingColor='#FFFFFF'>5 HOURS AGO</SpotlightBlock>
            <SpotlightBlock legendText='Champion' headingText='How To Turn Your Blog From Zero To Hero' legendColor='#FFFFFF' legendBackgroundColor='#45A29E' headingColor='#FFFFFF'>9 HOURS AGO</SpotlightBlock>
            <SpotlightBlock legendText='Cup' headingText='Read This Controversial Article And Find Out More About Blog' legendColor='#FFFFFF' legendBackgroundColor='#45A29E' headingColor='#FFFFFF'>YESTERDAY</SpotlightBlock>
        </div>
    );
}
