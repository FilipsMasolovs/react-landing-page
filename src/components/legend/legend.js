import './legend.css';

export default function Legend(props) {
    const customProps = {
        style: {
            color: props.legendColor,
            backgroundColor: props.legendBackgroundColor
        }
    }

    return (
        <span className='lp-legend' {...customProps}>
            {props.children}
        </span>
    );
}
