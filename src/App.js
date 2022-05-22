import './App.css';

let header, hr, l;
let vsecoder_big = `
                                _
  __   _____  ___  ___ ___   __| | ___ _ __
  \\ \\ / / __|/ _ \\/ __/ _ \\ / _\` |/ _ \\ '__|
   \\ V /\\__ \\  __/ (_| (_) | (_| |  __/ |
    \\_/ |___/\\___|\\___\\___/ \\__,_|\\___|_|     
`

let vsecoder_small = '<h1>vsecoder</h1>'

function App() {
  if (window.innerWidth >= 400) {
    header = vsecoder_big
    hr = '-'.repeat(window.innerWidth/30)
    l = ' '.repeat(35)
  } else {
    header = vsecoder_small
    hr = '-'.repeat(window.innerWidth/15)
    l = ''
  }

  return (
    <page>
      <header>
        <pre><h>{header}</h> {l} <b>resume</b></pre> 
        <p><b id="online">Only you read this page(</b></p>
        <p>[<a href="https://t.me/vsecoder">Telegram</a>]   [<a href="https://github.com/vsecoder">Github</a>]</p>
      </header>
      <p className='line'>{hr}</p>
      <main>
        <b>Web design, JavaScript, Python</b>
        <p>Hello, I'm a developer! I have been developing since an early age, and I fell in love with coding.</p>
        <p>My resume contains a bunch of different rubbish that I'm too lazy to list, it's better to look at Github for yourself)))</p>
        <p>P.S. this whole page is written for the sake of interest without any special styles on React.js and Socket.io!</p>
      </main>
      <p className='line'>{hr}</p>
      <footer>
        <p> More links:<br />
          [<a href="https://github.com/vsecoder/resume">PAGE SOURCES</a>]
          [<a href="https://t.me/vsecoder_bio">BIO</a>]
          [<a href="https://wakatime.com/@vsecoder">WAKATIME</a>]
          [<a href="https://t.me/C0deWizard">CHANNEL</a>]
        </p>
      </footer>
      <p className='line'>{hr}</p>
      <footer>
        <p>Made with ❤️ by vsecoder</p>
      </footer>
    </page>
  );
}

export default App;
