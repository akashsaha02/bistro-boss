import Banner from "../components/Banner"
import Category from "../components/Category"
import ChefRecommendations from "../components/ChefRecommendations"
import ChefService from "../components/ChefService"
import Featured from "../components/Featured"
import PopularMenu from "../components/PopularMenu"

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
      <ChefRecommendations />
      <Featured/>
    </div>
  )
}

export default Home
