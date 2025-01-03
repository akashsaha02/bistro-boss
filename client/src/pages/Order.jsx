import { useEffect, useState, useMemo } from 'react';
import shopImg from '../assets/shop/banner2.jpg';
import Cover from './../components/ui/Cover';
import useMenu from './../hooks/useMenu';
import * as Tabs from '@radix-ui/react-tabs';
import FoodCard from './../components/ui/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {
  const [menu] = useMenu();
  const { category: routeCategory } = useParams();
  const [activeTab, setActiveTab] = useState('tab1');

  // Filter out unique categories
  const uniqueCategories = useMemo(() => [...new Set(menu.map((item) => item.category))], [menu]);

  // Set the initial active tab based on the route parameter
  useEffect(() => {
    if (routeCategory && uniqueCategories.includes(routeCategory)) {
      const tabIndex = uniqueCategories.indexOf(routeCategory);
      setActiveTab(`tab${tabIndex + 1}`);
    } else {
      setActiveTab('tab1'); // Fallback to the first tab
    }
  }, [routeCategory, uniqueCategories]);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={shopImg} title="Our Shop" subTitle="Order your favourite food" />
      <div>
        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full max-w-7xl mx-auto px-4">
          <Tabs.List className="flex justify-center border-gray-300 my-8">
            {uniqueCategories.map((category, index) => (
              <Tabs.Trigger
                key={index}
                value={`tab${index + 1}`}
                className="px-4 py-2 text-gray-700 hover:text-yolo focus:text-yolo data-[state=active]:border-b-2 data-[state=active]:border-yolo data-[state=active]:text-yolo transition"
              >
                <span className="capitalize font-semibold">{category}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {uniqueCategories.map((category, index) => (
            <Tabs.Content
              key={index}
              value={`tab${index + 1}`}
              className="py-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menu.filter((item) => item.category === category).map((food, foodIndex) => (
                  <FoodCard key={foodIndex} food={food} />
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Order;
