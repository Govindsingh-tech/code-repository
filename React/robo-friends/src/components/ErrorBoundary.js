import React, { Component } from 'react';

class ErrorBoundary extends Component {
   constructor(props) {
       super(props);
       this.state = {
           hasError: false
       }
   } 

   // New lifecycle method is React 16, componentDidCatch()
   componentDidCatch(error, info) {
       this.setState({ hasError: true })
   }

   render() {
    if (this.state.hasError) {
        return <h1> Oooops. That is not good. </h1>
    } 
    return this.props.children 
   }
}

export default ErrorBoundary;