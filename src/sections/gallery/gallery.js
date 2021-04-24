import './gallery.css';

import Heading from '../../components/heading/heading'
import Legend from '../../components/legend/legend'

export default function Gallery(props) {
    return (
        <div className='lp-gallery'>
            <div className='lp-gallery-block'>
                <Heading headingColor='#1F2833'>PHOTO GALLERY</Heading>
                <Legend legendColor='#FFFFFF' legendBackgroundColor='#45A29E'>All Galleries</Legend>
            </div>
            <div className='lp-gallery-block'>
                <div className='lp-gallery-block-image' />
                <div className='lp-gallery-block-data-block'>
                    <Legend legendColor='#FFFFFF' legendBackgroundColor='#45A29E'>Photo</Legend>
                    <Heading headingColor='#1F2833'>The A - Z Guide Of Photo</Heading>
                    <span className='lp-gallery-block-data'>2 HOURS AGO</span>
                </div>
            </div>
            <div className='lp-gallery-block'>
                <div className='lp-gallery-block-image' />
                <div className='lp-gallery-block-data-block'>
                    <Legend legendColor='#FFFFFF' legendBackgroundColor='#45A29E'>Photo</Legend>
                    <Heading headingColor='#1F2833'>How To Use Photo To Desire</Heading>
                    <span className='lp-gallery-block-data'>2 HOURS AGO</span>
                </div>
            </div>
            <div className='lp-gallery-block'>
                <div className='lp-gallery-block-image' />
                <div className='lp-gallery-block-data-block'>
                    <Legend legendColor='#FFFFFF' legendBackgroundColor='#45A29E'>Photo</Legend>
                    <Heading headingColor='#1F2833'>Photp? It's Easy If You Do It Smart</Heading>
                    <span className='lp-gallery-block-data'>2 HOURS AGO</span>
                </div>
            </div>
        </div>
    );
}
