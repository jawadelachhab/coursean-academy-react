
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import Course from "../components/Course";
import { useCoursesContext } from '../context/coursesContext';
import { Helmet } from 'react-helmet';

const CoursesPage = () => {
  const { category } = useParams();
  const { courses } = useCoursesContext();

  return (
    <CoursesPageWrapper>
      <Helmet>
        <title>{`Coursean – ${category} Courses`}</title>
        <meta name="title" content={`Coursean – ${category} Courses`} />
        <meta name="description" content={`Explore a curated list of top ${category} courses on Coursean. Find the best courses in ${category} to enhance your skills and knowledge.`} />
        <meta name="keywords" content={`${category} courses, Coursean, online learning, ${category} education`} />
      </Helmet>

      <div className='container'>
        <div className='category-based-list'>
          {
            courses.filter(course => course.category === category).map((course) => (
              <Course key={course.id} {...course} />
            ))
          }
        </div>
      </div>
    </CoursesPageWrapper>
  )
}

const CoursesPageWrapper = styled.div`
  .category-based-list{
    margin-top: 32px;
  }
  @media screen and (min-width: 600px){
    .category-based-list{
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 992px){
    .category-based-list{
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1400px){
    .category-based-list{
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default CoursesPage