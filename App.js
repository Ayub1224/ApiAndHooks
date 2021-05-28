import React, { useEffect, useRef, useState } from 'react'
import { UseFetch } from './useFetch';
import './Style.css'
import FUnctConstCompt from './toggleButton'

export const ThemeContext = React.createContext()
export const ThemetoggleUpdate = React.createContext()

function App() {
  const [data, dispatch, FetchData] = UseFetch()

  const renderRef = useRef(null)

  useEffect(() => {
    FetchData();
  }, [])

  const [darkTheme, setDarkTheme] = useState(true)
  function ToggleTheme() {
    setDarkTheme(theme => !theme)
    console.log(darkTheme);
  }

  const RenderData = data.data?.map((data) => {
    return (<div className="container" ref={renderRef} key={data.id}>
      <p className="p">{data.id}</p>
      <h3 className="head">Heading</h3>
      <p className="p">{data.title}</p><br />
      <h5 className="head">Body</h5><br />
      <p className="p">{data.body}</p>
      <button className="btn" onClick={() => dispatch({ type: 'Delete', payload: { id: data.id } })} >DELETE</button>
    </div>)
  })
  return (<>
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <ThemetoggleUpdate.Provider value={ToggleTheme}>
          <FUnctConstCompt>
            {RenderData}
            </FUnctConstCompt>
        </ThemetoggleUpdate.Provider>
      </ThemeContext.Provider>
    </div>
  </>)
}

export default App;
