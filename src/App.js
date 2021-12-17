import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = 'Slideshow App';

function App({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const currentSlide = slides[slideIndex];

  const onRestart = () => setSlideIndex(0);

  const onPrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const onNext = () => {
    if (slides.length !== slideIndex + 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <Slides
          slides={slides}
          currentSlide={currentSlide}
          onRestart={onRestart}
          onPrev={onPrev}
          onNext={onNext}
          slideIndex={slideIndex}
        />
      </div>
    </div>
  );
}

export default App;
