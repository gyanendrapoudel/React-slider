
import list from '../data'
import { useEffect, useState } from "react"
import { FaQuoteRight } from 'react-icons/fa6'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'


const People = ({  }) => {
  const [people , setPeople] = useState(list)
  const [index, setIndex] = useState(0)
  const handlePrevSlide = () => {
   setIndex((oldIndex)=>{
    const result = (oldIndex-1+people.length)%people.length;
    return result
   })
  }
  const handleNextSlide = (id) => {
  setIndex((oldIndex) => {
    const result = (oldIndex + 1 ) % people.length
    return result
})
  
  }
  useEffect(() => {
   const slideId = setInterval(() => {
      handleNextSlide()
    }, 2000);
    return ()=>{
      clearInterval(slideId)
    }
  }, [index])
 
  return (
    <>
           <div className="container">
          {people.map((person, personIndex) => {
            const { id, name, title, image, quote } = person
            return (
              <article
                className="person-details"
                key={person.id}
                style={{
                  transform: `translateX(${100 * (personIndex-index)}%)`,
                  opacity: index === personIndex ? 1 : 0,
                  visibility: index === personIndex ? 'visible' : 'hidden',
                }}
              >
                <img
                  src={image}
                  alt="PP"
    
                  className="image"
                />
                <div className="name">{name}</div>
                <div className="title">{title}</div>
                <div className="quote">{quote}</div>
                <div className=" icons-quote">
                  <FaQuoteRight />
                </div>
              </article>
            )
          })}
       
        <div className="icons iconPrev">
          <GrPrevious onClick={() => handlePrevSlide()} />
        </div>
        <div className="icons iconNext">
          <GrNext onClick={() => handleNextSlide()} />
        </div>
      </div>
    </>
  )
}
export default People