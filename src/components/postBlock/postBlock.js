import './postBlock.css'

import Legend from '../legend/legend'
import Heading from '../heading/heading'

export default function PostBlock() {
    return (
        <div className='lp-post-block-container'>
            <div className='lp-post-block-main'>
                <div className='lp-post'>
                    <h3 className='lp-post-block-description'>How To Make More World By Doing Less</h3>
                    <span className='lp-post-block-data'>2 HOURS AGO</span>
                </div>
                <div className='lp-post'>
                    <h3 className='lp-post-block-description'>The Untold Secret To Blog In Less Than Ten Minutes</h3>
                    <span className='lp-post-block-data'>2 HOURS AGO</span>
                </div>
                <div className='lp-post'>
                    <h3 className='lp-post-block-description'>How To Make More World By Doing Less</h3>
                    <span className='lp-post-block-data'>2 HOURS AGO</span>
                </div>

            </div>
            <div className='lp-post-block-main-feature'>
                <Legend legendColor='#FFFFFF' legendBackgroundColor='#45A29E'>Machine</Legend>
                <Heading headingColor='#FFFFFF'>Answered: Your Most Burning Questions About World</Heading>
                <span className='lp-post-block-main-feature-data'>2 HOURS AGO</span>
            </div>
            
        </div>
    )
}
