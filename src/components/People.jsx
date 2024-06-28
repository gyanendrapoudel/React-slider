
import list from '../data'
import { useState } from "react"
import { FaQuoteRight } from 'react-icons/fa6'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'


const People = ({  }) => {
  const [people , setPeople] = useState(list)
  const [index, setIndex] = useState(0)
  const handlePrevSlide = (id) => {
    const currentPerson = people.find((person) => person.id === id)
    const newIndex = people.indexOf(currentPerson)
    console.log(currentPerson)
    console.log(newIndex)
    if (newIndex === 0) {
      setIndex(people.length - 1)
      console.log(index)
      return
    }
    setIndex(newIndex - 1)
  }
  const handleNextSlide = (id) => {

    const currentPerson = people.find((person) => person.id === id)
    const index = people.indexOf(currentPerson)
    if (index === people.length-1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  
  }


 
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
          <GrPrevious onClick={() => handlePrevSlide(id)} />
        </div>
        <div className="icons iconNext">
          <GrNext onClick={() => handleNextSlide(id)} />
        </div>
      </div>
    </>
  )
}
export default People