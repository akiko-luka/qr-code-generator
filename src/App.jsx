import Header from "./components/Header";

import QRCode from "qrcode";
import { useState } from "react";

const btnStyle =
  "mt-5 w-full border-2 border-gray-800 bg-gray-600 px-4 py-3 font-bold text-light hover:bg-gray-700 active:bg-black/50";

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
        <div className="align-center m-auto flex flex-col justify-center gap-8 p-10 md:max-w-5xl md:flex-row">
          <div className="mr-24 w-full md:w-1/2">
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
              <button className={btnStyle} onClick={handleGenerate}>
                Generate
              </button>
            </form>
          </div>

          {/* QR Code image */}
          <div className="flex flex-col items-center">
            <div className="flex h-[250px] w-[250px] items-center justify-center border-4 border-black bg-gray-200 md:h-[450px] md:w-[450px]">
              <img src={code} className="block w-[250px] md:w-[400px]" />
            </div>
            <div className="flex gap-4">
              <button className={btnStyle}>
                <a href={code} download={"qrcode.png"}>
                  Download
                </a>
              </button>
              <button
                onClick={() => {
                  setUrl("");
                  setCode("");
                }}
                className={btnStyle}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
