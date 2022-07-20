import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="uploadSection">
        <h1>Upload Pictures with label.</h1>
        <form>
          <input
            type="text"
            className="label"
            placeholder="Album Name"
            name="albumName"
          />
          <input className="file-input" type="file" name="images" />

          <button type="submit">Upload</button>
        </form>
      </div>
      <div className="previewSection">
        <div className="preview-header">
          <h1>Images</h1>
        </div>
        <hr />
        <div className="preview_card">
          <div className="card-title">
            <p className="our-photography">Your Photography</p>
            <p className="label">Cities</p>
          </div>
          <div className="card-body">
            <div className="image-container">
              <img
                src="https://images.freeimages.com/images/small-previews/e4e/circulate-abstract-1562332.jpg"
                alt=""
              />
            </div>
            <div className="image-container">
              <img
                src="https://images.freeimages.com/images/small-previews/e4e/circulate-abstract-1562332.jpg"
                alt=""
              />
            </div>
            <div className="image-container">
              <img
                src="https://images.freeimages.com/images/small-previews/e4e/circulate-abstract-1562332.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
