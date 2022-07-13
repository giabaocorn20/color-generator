import React, { Fragment, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [isError, setIsError] = useState(false)
  const [list, setList] = useState([])

  const submitHandler = (e) => { 
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setIsError(false)
    } catch(error) {
      setIsError(true)
    }
  }

  const inputChangeHandler = (e) => {
    setColor(e.target.value)
  }
  return (
    <Fragment>
      <section className='container'>

        <h3>Color Generator</h3>

        <form onSubmit={submitHandler}>

          <input 
          type ="text" 
          value = {color} 
          onChange = {inputChangeHandler}
          placeholder = '#f15025'
          className={`${ isError ? 'error' : null }`}
          />

          <button 
          className='btn'
          type = 'submit'>
            submit
          </button>

        </form>

      </section>
      <section className='color'>
        {list.map((color, index) => { 
          return <SingleColor key = {index} {...color} index = {index} />
        })}
      </section>
    </Fragment>
  )
}

export default App
