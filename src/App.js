import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getImage, postImage } from "./axioshelper";

function App() {
  const [form, setForm] = useState();
  const [files, setfiles] = useState();
  const [result, setResult] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:8000/image-upload",
      method: "GET",
    })
      .then((res) => setResult(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    !result.length && fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await getImage();
    setResult(data);
  };
  console.log(result);

  const handleOnImageSelect = (e) => {
    const files = e.target.files;
    setfiles(files);
  };
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("images", files);
    formData.append("label", form.label);

    await postImage(formData);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  return (
    <div className="app">
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
        {result.map((item, i) => {
          return (
            <div className="preview_card">
              <div className="card-title">
                <h1>Your Photography</h1>
                <p className="label">{item.label}</p>
              </div>
              <div className="card-body">
                {item.images.length > 1 ? (
                  <div className="image-container">
                    <img
                      width="100%"
                      src={"http://localhost:8000/" + item.images[1].substr(6)}
                      alt=""
                    />
                    <img
                      width="100%"
                      src={"http://localhost:8000/" + item.images[2].substr(6)}
                      alt=""
                    />
                    <img
                      width="100%"
                      src={"http://localhost:8000/" + item.images[0].substr(6)}
                      alt=""
                    />
                    <img
                      width="100%"
                      src={"http://localhost:8000/" + item.images[0].substr(6)}
                      alt=""
                    />
                    <img
                      width="100%"
                      src={"http://localhost:8000/" + item.images[0].substr(6)}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="image-container">
                    <img
                      width="100%"
                      src={"http://localhost:8000/" + item.images[0].substr(6)}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
