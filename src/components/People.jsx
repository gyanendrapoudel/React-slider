import Person from "./Person"
import people from '../data'
const index =1
const man = people[index]
const People = () => {
  return (
    <>
    {/* {People.map((p)=>
        <Person key={p.id}  {...p} index={index} />
    )} */}
    <Person {...man} />
     
    </>
  )
}
export default People