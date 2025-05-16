import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import "../css/history.css"
import QRCode from 'react-qr-code';

function History() {
  const [textQRs, setTextQRs] = useState([]);
  const [urlQRs, setUrlQRs] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get("/history");
        setTextQRs(res.data.text);
        setUrlQRs(res.data.url);
      } catch (err) {
        console.error("Failed to fetch history:", err);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="history-container">
      <h2 className="history-title">Your QR Code History</h2>

      {/* Text QR Table */}
      <div className="table-wrapper mb-large">
        <h3 className="table-title">Text QR Codes</h3>
        <div className="table-scrollable">
          <table className="history-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>LinkedIn</th>
                <th>GitHub</th>
                <th>QRcode</th>
              </tr>
            </thead>
            <tbody>
              {textQRs.map((item, index) => (
                <tr key={`text-${index}`}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.linkdin}</td>
                  <td>{item.git}</td>
                  <td>
                    <QRCode value={item.qrdata}size={80}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* URL QR Table */}
      <div className="table-wrapper">
        <h3 className="table-title">URL QR Codes</h3>
        <div className="table-scrollable">
          <table className="history-table">
            <thead>
              <tr>
                <th>URL</th>
                <th>QRcode</th>
              </tr>
            </thead>
            <tbody>
              {urlQRs.map((item, index) => (
                <tr key={`url-${index}`}>
                  <td>{item.url}</td>
                  <td>
                    <QRCode value={item.qrdata}size={80}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default History;