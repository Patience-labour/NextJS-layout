"use client"

async function getMessageFromAPI() {
  const res = await fetch('http://localhost:3000/api/hello');
  return res.json();
}

const ButtonGetReq = () => {

  const clickHandler = async() => {
    const {message} = await getMessageFromAPI();
    alert(message);
  }

  return (
    <button
      onClick={clickHandler}
      className="btn btn-ghost">
      Click me
    </button>
  );
}

export default ButtonGetReq;