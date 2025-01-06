import * as Tabs from '@radix-ui/react-tabs';

const TabsComponent = ({ uniqueCategories, activeTab, setActiveTab }) => {
  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-7xl mx-auto px-4"
    >
      <Tabs.List className="flex justify-center border-gray-300 my-8">
        {uniqueCategories.map((category, index) => (
          <Tabs.Trigger
            key={index}
            value={`tab${index + 1}`}
            className="px-4 py-2 text-gray-700 hover:text-yellow-500 focus:text-yellow-500 data-[state=active]:border-b-2 data-[state=active]:border-yellow-500 data-[state=active]:text-yellow-500 transition font-semibold capitalize"
          >
            {category}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default TabsComponent;
