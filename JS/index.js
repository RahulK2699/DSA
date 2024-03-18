import React from 'react'

const MyComp = (props) => {

  const withLogging = (MyComp) => {

    const WithLogging = (props) => {
      const extraProps = {
        prop1 : "value1",
        prop2 : "value2"
      }

      return <MyComp {...props} {...extraProps}/>
    }

    return WithLogging
  }
  const MyCompWithLogging = withLogging(MyComp);

  return (
    <div>MyComp {props.name}
        <MyCompWithLogging  {...props}/>
    </div>
  )
}

export default MyComp