```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <h1>Home</h1>
      <Routes>
        <Route path="home/section1" element={<Section1 />} />
        <Route path="home/section2" element={<Section2 />} />
      </Routes>
    </div>
  );
}

function About() {
  return <div>About</div>;
}

function Section1() {
  return <div>Section 1</div>;
}

function Section2() {
  return <div>Section 2</div>;
}
```