import { Helmet } from 'react-helmet';
import Cover from '../components/ui/Cover';
import menuImg from '../assets/menu/banner3.jpg';
import desertImg from '../assets/menu/dessert-bg.jpeg';
import saladImg from '../assets/menu/salad-bg.jpg';
import pizzaImg from '../assets/menu/pizza-bg.jpg';
import soupImg from '../assets/menu/soup-bg.jpg';
import SectiontTitle from '../components/ui/SectiontTitle';
import MenuCover from '../components/menu/MenuCover';
import PopularMenu from '../components/home/PopularMenu';
import MenuSections from './../components/menu/MenuSections';
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"
        subTitle="Would you like to try a dish ?"
      />
      <SectiontTitle heading="Todays Offer" subHeading="don't miss" />
      <MenuSections category="popular"/>
      <MenuCover img={desertImg} title="Desserts" subTitle="Indulge in a sweet treat" />
      <MenuSections category="dessert"/>
      <MenuCover img={pizzaImg} title="Pizzas" subTitle="Indulge in a sweet treat" />
      <MenuSections category="pizza"/>
      <MenuCover img={saladImg} title="Salad" subTitle="Indulge in a sweet treat" />
      <MenuSections category="salad"/>
      <MenuCover img={soupImg} title="Soups" subTitle="Indulge in a sweet treat" />
      <MenuSections category="soup"/>
    </div>
  )
}

export default Menu
