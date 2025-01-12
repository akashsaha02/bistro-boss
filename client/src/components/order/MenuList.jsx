import FoodCard from '../ui/FoodCard';
import PaginationComponent from './PaginationComponent';


const MenuList = ({ filteredMenu, currentPage, handlePageChange, ITEMS_PER_PAGE }) => {
  
  
 

  const paginatedMenu = filteredMenu.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  

  const pageCount = Math.ceil(filteredMenu.length / ITEMS_PER_PAGE);

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedMenu.map((food, index) => (
          <FoodCard key={index} food={food}   />
        ))}
      </div>
      {pageCount > 1 && <PaginationComponent pageCount={pageCount} handlePageChange={handlePageChange} />}
    </div>
  );
};

export default MenuList;
