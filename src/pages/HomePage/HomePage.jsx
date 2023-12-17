import React from 'react'
import CategorySection from '../CategorySection/CategorySection'
import PostSection from '../PostsSection/Posts/PostSection'
import Slider from '../Home/Slider/Slider';

const HomePage = () => {
  return (
   <>
   <Slider />
   <CategorySection />
   <PostSection />
   </>
  )
}

export default HomePage
