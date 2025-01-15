import { useEffect, useState, useMemo } from 'react';
import shopImg from '../assets/shop/banner2.jpg';
import Cover from './../components/ui/Cover';
import useMenu from './../hooks/useMenu';
import TabsComponent from '../components/order/TabsComponent';
import MenuList from '../components/order/MenuList';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Loader from '../components/ui/Loader';

const ITEMS_PER_PAGE = 9;

const Order = () => {
  const [menu, loading] = useMenu();
  const { category: routeCategory } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  // Include "All" tab and filter unique categories
  const uniqueCategories = useMemo(
    () => ['all', ...new Set(menu.map((item) => item.category.toLowerCase()))],
    [menu]
  );

  // Set the initial active tab based on the route parameter
  useEffect(() => {
    if (routeCategory && uniqueCategories.includes(routeCategory)) {
      setActiveTab(routeCategory);
    } else if (uniqueCategories.length > 0) {
      setActiveTab('all'); // Default to "All"
    }
  }, [routeCategory, uniqueCategories]);

  // Reset current page when activeTab changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab]);

  // Update location pathname when the tab changes
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    navigate(`/order/${newTab}`); // Update the URL to reflect the active tab
  };

  // Handle pagination
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (loading) return <Loader />;

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={shopImg} title="Our Shop" subTitle="Order your favourite food" />
      <div className="max-w-7xl mx-auto px-4">
        <TabsComponent
          uniqueCategories={uniqueCategories}
          activeTab={activeTab}
          setActiveTab={handleTabChange} // Use the custom function
        />
        {uniqueCategories.map((category, index) => {
          // Filter menu items based on the active tab
          const filteredMenu =
            category === 'all'
              ? menu // All items
              : menu.filter((item) => item.category.toLowerCase() === category.toLowerCase());

          return (
            <div key={index} className={activeTab === category ? '' : 'hidden'}>
              <MenuList
                filteredMenu={filteredMenu}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                ITEMS_PER_PAGE={ITEMS_PER_PAGE}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
