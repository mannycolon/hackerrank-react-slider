import React from 'react';

function Slides({
  slides,
  onNext,
  onPrev,
  onRestart,
  slideIndex,
  currentSlide,
}) {
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={onRestart}
          disabled={slideIndex === 0}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={onPrev}
          disabled={slideIndex === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={onNext}
          disabled={slides.length === slideIndex + 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>
      </div>
    </div>
  );
}

export default Slides;
