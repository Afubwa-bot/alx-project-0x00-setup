import Card from "@/components/Card"
import Button  from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight text-center" > Landing Page</h1> <Card/>
        </div>
    );
}

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Button Showcase</h1>

      {/* Small Buttons */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Small Buttons</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
          <Button title="Small Rounded-md" styles="text-sm rounded-md" />
          <Button title="Small Rounded-full" styles="text-sm rounded-full" />
        </div>
      </div>

      {/* Medium Buttons */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Medium Buttons</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button title="Medium Rounded-sm" styles="text-base rounded-sm" />
          <Button title="Medium Rounded-md" styles="text-base rounded-md" />
          <Button title="Medium Rounded-full" styles="text-base rounded-full" />
        </div>
      </div>

      {/* Large Buttons */}
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Large Buttons</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button title="Large Rounded-sm" styles="text-lg rounded-sm" />
          <Button title="Large Rounded-md" styles="text-lg rounded-md" />
          <Button title="Large Rounded-full" styles="text-lg rounded-full" />
        </div>
      </div>
    </div>
  );
};

// App.tsx (Main component)
const App: React.FC = () => {
  return (
    <div className="font-inter">
      <LandingPage />
    </div>
  );
};

export default App;
