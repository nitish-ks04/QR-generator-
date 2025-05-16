import QRCode from 'react-qr-code';
import { useState } from 'react';
import axios from '../api/axios';
import "../css/input.css";

function Input() {
  const [value, setValue] = useState("https://google.com");

  const handleSubmit = async () => {
    try {
      await axios.post("/urlqr", {
        url: value,
        qrdata: value, 
      });
      alert("stored")
    } catch (error) {
      alert("Error saving URL QR data:", error.response?.data || error.message);
    }
  };

  return (
    <div className='input-home'>
      <div className="fir-lay">
        <h1>Hello there</h1>
        <p>Generate QR Code</p>
      </div>
      <div className="sec-lay">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSubmit}className='url-but
        '>Save QR</button>
      </div>
      <div className="thir-lay">
        <QRCode value={value} />
      </div>
    </div>
  );
}

export default Input;
