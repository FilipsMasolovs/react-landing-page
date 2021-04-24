import './featureBlock.css'

import Legend from '../legend/legend'
import Heading from '../heading/heading'

export default function FeatureBlock() {
    return (
        <div className='lp-feature-block-container'>
            <div className='lp-feature-block-main'>
                <Legend legendColor='#FFFFFF' legendBackgroundColor='#45A29E'>Machine</Legend>
                <span className='lp-feature-block-description'>The Hidden Mystery Behind machine</span>
                <div>
                    <Heading headingColor='#FFFFFF'>Your Key To Success:</Heading>
                    <Heading headingColor='#FFFFFF'>Machine</Heading>
                </div>
                <span className='lp-feature-block-data'>5 HOURS AGO</span>
            </div>
            <div className='lp-feature-block-main-features'>
                <div className='lp-feature-block-main-feature'>
                    <Legend legendColor='#FFFFFF' legendBackgroundColor='#45A29E'>Machine</Legend>
                    <Heading headingColor='#FFFFFF'>Answered: Your Most Burning Questions About World</Heading>
                    <span className='lp-feature-block-main-feature-data'>2 HOURS AGO</span>
                </div>
                <div className='lp-feature-block-main-feature'>
                    <Legend legendColor='#FFFFFF' legendBackgroundColor='#45A29E'>Machine</Legend>
                    <Heading headingColor='#1F2833'>Winning Tactics For World</Heading>
                    <span className='lp-feature-block-main-feature-data'>5 HOURS AGO</span>
                </div>
            </div>
        </div>
    )
}
