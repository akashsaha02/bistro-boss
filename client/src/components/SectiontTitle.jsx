
import PropTypes from 'prop-types';

const SectiontTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center my-6 max-w-sm mx-auto'>
            <p className="text-sm md:text-md italic pb-2 text-yolo capitalize">--- {subHeading} ---</p>
            <h2 className="text-2xl md:text-3xl font-semibold uppercase py-4 border-y-2 cinzel text-dark-2">{heading}</h2>
        </div>
    )
}
SectiontTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
};

export default SectiontTitle

