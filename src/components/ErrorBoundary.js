<<<<<<< HEAD
import React, { Component } from 'react';
 
class ErrorBoundary extends Component {
=======
import React from 'react';

class ErrorBoundary extends React.Component {
>>>>>>> a0acc62ca4ce896654f87a2ccfc9bffbbe340971
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
 
  static getDerivedStateFromError(error) {
    // Update state so the next render will show nothing.
    return { hasError: true };
  }
 
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }
 
  render() {
    if (this.state.hasError) {
      // Render nothing
      return null;
    }
 
    return this.props.children; 
  }
}
 
export default ErrorBoundary;
=======

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Erreur capturée par ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Une erreur s'est produite.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
>>>>>>> a0acc62ca4ce896654f87a2ccfc9bffbbe340971
