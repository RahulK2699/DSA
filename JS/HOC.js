
/*
HOC is a component which takes a component as a argument and resturn a new component with enahanced functionality or by adding additional props to the component
*/
import React from 'react';

function MyComp (props) {

  const {extraProps } = props;
  console.log(extraProps.prop1);
  console.log(extraProps.prop2);

  const withLogging = (MyComp) => {

    const WithLogging = (props) => {
      const extraProps = {
        prop1 : "value1",
        prop2 : "value2"
      }
      return <MyComp {...props} {...extraProps}/>
    }
    return WithLogging;
  }

  const WithLoggingComp = withLogging(MyComp);

  return (
    <WithLoggingComp name={props.name} sname={props.sname} />
  )
}

function App () {
  return (
    <MyComp name = {"Rahul"} sname = {"Kharche"}/>
  )
}

export default App;