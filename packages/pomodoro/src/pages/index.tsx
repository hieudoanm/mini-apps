import Button from '@mui/material/Button';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { appName } from '../configs';
import addZero from '../utils/add-zero';

enum Mode {
  REST = 'REST',
  WORK = 'WORK',
}

enum ModeTime {
  REST = 5,
  WORK = 25,
}

enum ModeColor {
  REST = 'bg-blue-500',
  WORK = 'bg-gray-500',
  IDLE = 'bg-white',
}

type Left = { seconds: number; display: string };

const Home: NextPage = () => {
  const seconds = 1000;

  const [left, setLeft] = useState<Left>({
    seconds: ModeTime.WORK * 60,
    display: `${addZero(ModeTime.WORK)}:00`,
  });
  const [status, setStatus] = useState<boolean>(false);
  const [mode, setMode] = useState<Mode>(Mode.WORK);
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);

  const start = () => {
    setStatus(true);
    const timer = setInterval(() => {
      setLeft((previous: Left) => {
        const secondsLeft = previous.seconds - 1;
        const minutes = addZero(Math.floor(secondsLeft / 60));
        const seconds = addZero(secondsLeft % 60);
        return { display: `${minutes}:${seconds}`, seconds: secondsLeft };
      });
      if (left.seconds === 0) {
        setMode((previous: Mode) => {
          const newMode = previous === Mode.WORK ? Mode.REST : Mode.WORK;
          setLeft({
            seconds: ModeTime.WORK * 60,
            display: `${addZero(ModeTime.WORK)}:00`,
          });
          return newMode;
        });
      }
    }, seconds);
    setTimer(timer);
  };

  const pause = () => {
    setStatus(false);
    clearInterval(timer);
  };

  const reset = () => {
    setStatus(false);
    setMode(Mode.WORK);
    setLeft({
      seconds: ModeTime.WORK * 60,
      display: `${addZero(ModeTime.WORK)}:00`,
    });
    clearInterval(timer);
  };

  useEffect(() => {
    if (left.seconds === 0) {
      setMode((previous: Mode) => {
        const newMode = previous === Mode.WORK ? Mode.REST : Mode.WORK;
        setLeft({
          seconds: ModeTime[newMode] * 60,
          display: `${addZero(ModeTime[newMode])}:00`,
        });
        return newMode;
      });
    }
  }, [left, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  const bgColor = status ? ModeColor[mode] : ModeColor.IDLE;
  const title = status ? `${appName} - ${mode}` : `${appName} - IDLE`;
  return (
    <div className={`w-screen h-screen ${bgColor}`}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container h-full mx-auto p-8">
        <div className="w-full h-full flex items-center justify-center">
          <div className="rounded p-8 border shadow-2xl bg-white">
            <h1 className="text-center text-4xl sm:text-5xl uppercase">
              {appName}
            </h1>
            <div className="py-8">
              <p className="text-center text-8xl sm:text-9xl">{left.display}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <Button
                  onClick={status ? pause : start}
                  variant="outlined"
                  className="w-full uppercase"
                >
                  {status
                    ? `${
                        mode === Mode.WORK ? `${Mode.WORK}` : `${Mode.REST}`
                      }ING`
                    : `Start`}
                </Button>
              </div>
              <div>
                <Button
                  onClick={reset}
                  variant="outlined"
                  className="w-full uppercase"
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
