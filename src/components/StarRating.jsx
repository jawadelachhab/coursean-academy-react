import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StarRating = ({ rating_star }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <Star key={idx}>
        {
          rating_star >= idx + 1 ? (<BsStarFill />) : rating_star >= val ? (<BsStarHalf />) : (<BsStar />)
        }
      </Star>
    )
  })

  return (
    <div>{stars}</div>
  )
}

const Star = styled.span`
  color: #e59819;
  margin-right: 2px;
  font-size: 13px;
  margin-bottom: -5px!important;
`;


StarRating.propTypes = {
  rating_star: PropTypes.number
};

export default StarRating