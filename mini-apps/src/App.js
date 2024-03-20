import { useState, useCallback, useRef } from "react";
import Calculator from "./components/Calculator/Calculator";
import Timer from "./components/TimerApp/Timer";
import InfiniteScroll from "./components/infinte-scroll/InfiniteScroll";


function App() {

  const [query, setQuery] = useState('')
  const [data, setData] = useState([]);

  const controllerRef = useRef(null);

  const handleInput = useCallback((e) => {
    setQuery(e.target.value)
  }, [])

  const renderItem = useCallback(({title}, key, ref) => <div ref={ref} key={key}>{title}</div>)


  const getData = useCallback((query, pageNumber) => {
    return new Promise(async (resolve, reject) => {
      try{
        if(controllerRef.current) controllerRef.current.abort()
        controllerRef.current = new AbortController()

        const promise = await fetch('https://openlibrary.org/search.json?' + new URLSearchParams({
          q: query,
          page : pageNumber
        }), {signal: controllerRef.current.signal})

        const data = await promise.json();
        console.log(data);
        resolve()
        if(data) setData([...data, ...data.docs])

      }catch(e) {
        // reject()
      }
    })
  }, [])
  return (
    <div className="App">
      {/* <Timer/> */}
      {/* <Calculator/> */}
      <InfiniteScroll />
    </div>
  );
}

export default App;
