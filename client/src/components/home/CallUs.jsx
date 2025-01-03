import { FaPhoneAlt } from 'react-icons/fa'


const CallUs = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 my-20 bg-dark-2 text-white py-20'>
            <div className='flex items-center justify-center gap-4'>
                <span className="text-yolo">
                    <FaPhoneAlt size={30} />
                </span>
                <h1 className='text-3xl md:text-4xl font-medium flex items-center'>Call Us:

                    +880123456789</h1>
            </div>
        </div>
    )
}

export default CallUs
