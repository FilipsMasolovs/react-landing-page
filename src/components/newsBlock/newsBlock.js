import './newsBlock.css';

import Heading from '../heading/heading'

export default function NewsBlock() {
    return (
        <div className='lp-news-container'>
            <h2 className='lp-news-title'>News</h2>
            <div className='lp-news-article-container'>
                <div className='lp-news-article'>
                    <span className='lp-news-article-time'>17:48</span>
                    <Heading headingColor='#1F2833'>How To Learn World</Heading>
                    <p className='lp-news-article-paragraph'>But I must explain to you how all this mistaken idea of debouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                </div>
                <div className='lp-news-article'>
                    <span className='lp-news-article-time'>17:48</span>
                    <Heading headingColor='#1F2833'>How To Learn World</Heading>
                    <p className='lp-news-article-paragraph'>But I must explain to you how all this mistaken idea of debouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                </div>
                <div className='lp-news-article'>
                    <span className='lp-news-article-time'>17:48</span>
                    <Heading headingColor='#1F2833'>How To Learn World</Heading>
                    <p className='lp-news-article-paragraph'>But I must explain to you how all this mistaken idea of debouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                </div>
            </div>
            <a className='lp-news-all-news'>All news</a>
        </div>
    );
}
