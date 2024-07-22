import React, { Component } from 'react';
 
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
 
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