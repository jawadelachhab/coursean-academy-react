import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import { Helmet } from 'react-helmet'

const HomePage = () => {
  return (
    <div className='holder'>
      <Helmet>
        <title>Coursean – Discover and Shop Online Courses Anytime, Anywhere</title>
        <meta name="title" content="Coursean – Discover and Shop Online Courses Anytime, Anywhere" />
        <meta name="description" content="Coursean offers a wide range of online courses in various fields, empowering you to learn and shop for the best courses anytime, anywhere. Explore endless learning opportunities!" />
        <meta name="keywords" content="Coursean, online courses, e-learning, shop courses, education, learning, discover courses" />
      </Helmet>
      <Hero />
      <CoursesList />
      <CategoriesList />
    </div>
  )
}

export default HomePage