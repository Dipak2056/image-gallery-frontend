import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({});
  const [images, setImages] = useState([]);
  const [result, setResult] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/image-upload")
      .then((res) => setResult(res))
      .catch((err) => console.log(err));
    console.log(result.data.data);
  }, []);

  const handleOnImageSelect = (e) => {
    const { files } = e.target;
    setImages(files);
  };
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }
    console.log(formData);
  };

  return (
    <div className="App">
      <div className="uploadSection">
        <h1>Upload Pictures with label.</h1>
        <form onSubmit={handleOnSubmit} encType="multipart/form-data">
          <input
            type="text"
            className="label"
            placeholder="Album Name"
            name="label"
            onChange={handleOnChange}
          />
          <input
            className="file-input"
            type="file"
            multiple={true}
            accept="image/*"
            name="images"
            onChange={handleOnImageSelect}
          />

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
