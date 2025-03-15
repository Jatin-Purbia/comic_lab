import { useState } from "react";

const Home = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="text-center px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-olive">COMICS STUDIES LAB @ IITJ</h2>
      <p className="mt-6 text-lg text-olive-dark">
        Where creativity meets imagination! Dive into the world of comics, storytelling, and innovation.
      </p>
      {/* <button className="mt-8 px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition text-lg"
        onClick={() => setCount(count + 1)}>
        Click Me {count}
      </button> */}
    </div>
  );
};

export default Home;
