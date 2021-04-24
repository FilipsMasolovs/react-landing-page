import './spotlightBlock.css'

import Legend from '../legend/legend'
import Heading from '../heading/heading'

export default function SpotlightBlock(props) {
    return (
        <div className='lp-spotlight-block'>
            <Legend legendColor={props.legendColor} legendBackgroundColor={props.legendBackgroundColor}>{props.legendText}</Legend>
            <Heading headingColor={props.headingColor}>{props.headingText}</Heading>
            <span className='lp-spotlight-data'>{props.children}</span>
        </div>
    );
}
