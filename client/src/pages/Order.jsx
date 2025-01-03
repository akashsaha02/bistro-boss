import shopImg from '../assets/shop/banner2.jpg';
import Cover from './../components/ui/Cover';
import 'react-tabs/style/react-tabs.css';
import useMenu from './../hooks/useMenu';
import * as Tabs from '@radix-ui/react-tabs';
import FoodCard from './../components/ui/FoodCard';


const Order = () => {
  const [menu] = useMenu();

  // Filter out unique categories
  const uniqueCategories = [...new Set(menu.map(item => item.category))];

  return (
    <div>
      <Cover img={shopImg} title="Our Shop" subTitle="Order your favourite food" />
      <div>
        <Tabs.Root defaultValue="tab1" className="w-full max-w-7xl mx-auto px-4">
          <Tabs.List className="flex justify-center border-gray-300 my-8">
            {uniqueCategories.map((category, index) => (
              <Tabs.Trigger
                key={index}
                value={`tab${index + 1}`}
                className="px-4 py-2 text-gray-700 hover:text-yolo focus:text-yolo data-[state=active]:border-b-2 data-[state=active]:border-yolo data-[state=active]:text-yolo transition"
              >
                <span className="capitalize font-semibold">

                  {category}
                </span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {uniqueCategories.map((category, index) => (
            <Tabs.Content
              key={index}
              value={`tab${index + 1}`}
              className="py-6"
            >
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menu.filter(item => item.category === category).map((food, index) => (
                  <FoodCard key={index} food={food} />
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
