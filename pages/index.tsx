import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [minutes, setMinutes] = useState(30);

  const timey = () => {
    setCurrentTime(currentTime + 1000);

    if (currentTime / 1000 === minutes * 60) {
      setCurrentTime(0);
      window.open(
        `https://www.twitch.tv/seaofthieves`,
        '_blank',
        'height=600, width=1200'
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (started) {
        timey();
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault;
    if (!started) {
      window.open(
        `https://www.twitch.tv/seaofthieves`,
        '_blank',
        'height=600, width=1200'
      );
    }
    setCurrentTime(0);
    setStarted(!started);
  };

  const updateMins = (e: React.FormEvent<HTMLInputElement>) => {
    const mins = parseInt(e.currentTarget.value);
    setMinutes(mins);
  };

  return (
    <>
      <Head>
        <title>Seas of Thieves Orb Helper</title>
        <meta name='description' content='Praise the Orb!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='icon' href='/orb.png' />
      </Head>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Seas of Thieves Orb Helper</h1>
          <img src='/orb.png' alt='The orb' />
        </div>

        <form className={styles.form}>
          <button onClick={handleClick} className={styles.button} type='button'>
            {started ? 'Stop Orbing' : 'Open Orb Stream'}
          </button>
          <label>
            Minutes to open the stream again:
            <input
              type='number'
              min='1'
              max='180'
              value={minutes}
              onChange={updateMins}
              className={styles.input}
            ></input>
          </label>
          <progress
            id='file'
            max={minutes * 60}
            value={currentTime / 1000}
          ></progress>
        </form>

        <div className={styles.intro}>
          <div>
            <p>
              Use this site to periodically re-open the{' '}
              <a
                href='https://www.twitch.tv/seaofthieves'
                target='_blank'
                rel='noopener noreferrer'
              >
                Orb Stream
              </a>{' '}
              to get raided into the next drops target.
            </p>
            <p>
              You can choose how often to open the Orb Stream - no one knows
              when it will raid again!
            </p>
            <p>
              <span>You must enable pop-ups for this to work.</span> You can see
              how to do this in your browser here:
            </p>
            <ul>
              <li>
                <a
                  href='https://support.google.com/chrome/answer/95472?hl=en-GB&co=GENIE.Platform%3DDesktop#zippy=%2Callow-pop-ups-and-redirects-from-a-site'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Chrome
                </a>
              </li>
              <li>
                <a
                  href='https://www.howtogeek.com/732439/how-to-allow-pop-ups-in-microsoft-edge/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Edge
                </a>
              </li>
              <li>
                <a
                  href='https://support.apple.com/en-gb/guide/safari/sfri40696/mac#:~:text=In%20the%20Safari%20app%20on,the%20bottom%20of%20the%20list.'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href='https://support.mozilla.org/en-US/kb/pop-blocker-settings-exceptions-troubleshooting'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Firefox
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2>Tips</h2>
          <ul>
            <li>
              Make sure you`&apos;`re signed in to Twitch in this browser.
            </li>
            <li>
              Keep this window open in the foreground. If the tab goes to sleep
              the timer will stop counting down to the next stream opening.
            </li>
            <li>
              Don&apos;t forget to{' '}
              <a
                href='https://www.twitch.tv/drops/inventory'
                target='_blank'
                rel='noopener noreferrer'
              >
                claim the drops
              </a>{' '}
              afterwards!
            </li>
          </ul>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          Made by{' '}
          <a
            href='https://bsky.app/profile/nikomus.bsky.social'
            target='_blank'
            rel='noopener noreferrer'
          >
            @nikomus
          </a>
        </p>
      </footer>
    </>
  );
}
