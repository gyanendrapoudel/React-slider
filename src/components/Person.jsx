import { FaQuoteRight } from 'react-icons/fa6'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
const Person = ({ id, image, name, title, quote, index }) => {
  return (
    <div className="container">
      <div className="icons">
        <GrPrevious />
      </div>
      <div className="person-details">
        <img
          src={image}
          alt="PP"
          style={{ width: '200px', height: '200px' }}
          className="image"
        />
        <div className="name">{name}</div>
        <div className="title">{title}</div>
        <div className="quote">{quote}</div>
        <div className=" icons-quote">
          <FaQuoteRight />
        </div>
      </div>
      <div className="icons">
        <GrNext />
      </div>
    </div>
  )
}
export default Person
