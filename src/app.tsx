import React from 'react';

import atLast from './assets/atLast.mp3';
import { QuestionText } from './components/questionText';
import { TomGif } from './components/tomGif';

export function App() {
  const [hasAccepted, setHasAccepted] = React.useState(false);

  return (
    <main className="flex flex-1 flex-col items-center justify-center h-svh gap-8 p-4">
      <TomGif hasAccepted={hasAccepted} />

      {!hasAccepted ? (
        <>
          <QuestionText />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="bg-rose-700 text-rose-50 font-bold p-4 rounded-full uppercase min-w-40 w-full transition-all hover:shadow-2xl hover:shadow-rose-500/60 hover:scale-150"
              onClick={() => setHasAccepted(true)}
              type="button"
            >
              Yes
            </button>
            <button
              className="text-rose-400 text-xs p-4 rounded-full lowercase min-w-40 cursor-not-allowed"
              disabled
              type="button"
            >
              No
            </button>
          </div>
        </>
      ) : (
        <>
          <audio
            autoPlay
            className="sr-only"
            controls={false}
            loop
            src={atLast}
          />
          <h1 className="font-display text-rose-700 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all">
            <span className="animate-pulse">❤️🎉❤️</span> Yeeeaaahhh!!!{' '}
            <span className="animate-pulse">❤️🎉❤️</span>
          </h1>
        </>
      )}
    </main>
  );
}
