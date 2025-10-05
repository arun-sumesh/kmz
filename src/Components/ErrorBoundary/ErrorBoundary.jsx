import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-20 text-center">
          <h2 className="text-xl font-semibold">Something went wrong.</h2>
          <p className="mt-2 text-sm text-gray-500">Please reload the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
