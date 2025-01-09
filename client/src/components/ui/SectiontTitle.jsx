import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading, color='text-black' }) => {
    return (
        <div className='text-center my-6 max-w-sm mx-auto'>
            <p className="text-sm md:text-md italic pb-2 text-yolo capitalize">--- {subHeading} ---</p>
            <h2
                className={`${color} text-2xl md:text-3xl font-semibold uppercase py-4 border-y-2 cinzel`}
            >
                {heading}
            </h2>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
    color: PropTypes.string, // Color prop for the heading
};


export default SectionTitle;