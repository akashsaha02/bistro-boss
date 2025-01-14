import Banner from "../components/home/Banner"
import CallUs from "../components/home/CallUs"
import Category from "../components/home/Category"
import ChefRecommendations from "../components/home/ChefRecommendations"
import ChefService from "../components/home/ChefService"
import Featured from "../components/home/Featured"
import PopularMenu from "../components/home/PopularMenu"
import Testimoneal from "../components/home/Testimoneal"

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
      <CallUs/>
      <ChefRecommendations />
      <Featured />
      <Testimoneal />
    </div>
  )
}

export default Home
