import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div class="topbar">
        <img id="logo" src="http://pngimg.com/uploads/chrome_logo/chrome_logo_PNG3.png" />
        <input placeholder="Тебе чего нужно сделать?" type="text" />
        <button>
            Создать задание
        </button>
      </div>
      <div class="content">
        <div>
          <img class="checkbox" src="https://d29fhpw069ctt2.cloudfront.net/clipart/89484/preview/checkbox_unchecked_preview_48d2.png" />
          <a href="#3">Задание 1</a>
        </div>
        <div>
          <img class="checkbox" src="https://d29fhpw069ctt2.cloudfront.net/clipart/89484/preview/checkbox_unchecked_preview_48d2.png" />
          <a href="#2">Задание 2</a>
        </div>
        <div>
          <img class="checkbox" src="https://d29fhpw069ctt2.cloudfront.net/clipart/89484/preview/checkbox_unchecked_preview_48d2.png" />
          <a href="#1">Задание 3</a>
        </div>
      </div>
    </div>
  );
}

export default App;
