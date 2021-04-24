import './heading.css';

export default function Heading(props) {
    const customProps = {
        style: {
            color: props.headingColor
        }
    }

    return (
        <h2 className='lp-heading' {...customProps}>
            {props.children}
        </h2>
    );
}
