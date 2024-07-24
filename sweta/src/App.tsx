
import './App.css'
function Person(props) {
  return(
    <>
    <h1>name:{props.name}</h1>
    <h2>lastname:{props.lastname}</h2>
    <h3>age:{props.age}</h3>
    </>
  )
}
function App(){
  return(
    <>
    <Person name='Fedinand' lastname='Wandera' age='21'/>
    <Person name='Tim' lastname='Tonison' age='41'/>
    <Person name='Selrum' lastname='Aption' age='19'/>
    </>
  )
}





export default App
