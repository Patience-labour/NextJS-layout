"use client"

const Button = () => {
  return (
    <button
      onClick={() => alert('here we go!')}
      className="btn btn-ghost">
      Click me (client event)
    </button>);
}

export default Button;