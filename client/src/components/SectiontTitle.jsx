
import PropTypes from 'prop-types';

const SectiontTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center my-6 w-4/12 mx-auto'>
            <p className="italic pb-2">--- {subHeading} ---</p>
            <h2 className="text-3xl uppercase py-4 border-y-2">{heading}</h2>
        </div>
    )
}
SectiontTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
};

export default SectiontTitle

