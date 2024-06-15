import Header from "./components/Header";

import QRCode from "qrcode";
import { useState } from "react";

const App = () => {
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();
    QRCode.toDataURL(url, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      setCode(data);
    });
  };

  return (
    <div>
      <Header />

      <main>
        <div className="align-center m-auto flex flex-col-reverse justify-center p-10 md:max-w-4xl md:flex-row">
          <div className="mr-24 w-full md:w-2/3">
            <p>Enter your URL below to generate a QR-Code and download it.</p>
            <form id="form-gen" className="mt-4">
              <input
                id="url"
                type="url"
                placeholder="Enter a URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-gray-dark mb-5 mr-2 w-full border-2 border-gray-200 bg-light p-3 text-black focus:outline-none"
                required
              />
              <button className="mt-5 w-full border-2 border-gray-800 bg-gray-600 px-4 py-3 font-bold text-light hover:bg-black"
              onClick={handleGenerate}
              >
                Generate
              </button>
            </form>
          </div>
         
        </div>
      </main>
    </div>
  );
};

export default App;
