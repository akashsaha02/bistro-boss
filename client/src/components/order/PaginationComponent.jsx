import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const PaginationComponent = ({ pageCount, handlePageChange }) => {
    return (
        <div className="mt-6 flex justify-center">
            <ReactPaginate
                previousLabel={<IoIosArrowBack />}
                nextLabel={<IoIosArrowForward />}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName="flex items-center space-x-2"
                pageClassName="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-yellow-100 cursor-pointer"
                activeClassName="bg-yellow-500 text-white border-yellow-500"
                previousClassName="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-yellow-100 cursor-pointer"
                nextClassName="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-yellow-100 cursor-pointer"
                breakClassName="w-8 h-8 flex items-center justify-center text-gray-500"
                disabledClassName="opacity-50 cursor-not-allowed"
            />
        </div>
    );
};

export default PaginationComponent;
