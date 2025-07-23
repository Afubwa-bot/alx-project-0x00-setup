import React from "react";
// import react explicitly for React.FC
// changing the named function to an arrow fucntion
const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4x1 font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <button className=" border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full ">Get Started</button>
    </main>
  );
};

// Export the components at the end of the file
export default Home;