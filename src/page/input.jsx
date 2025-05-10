import { QRCode } from 'react-qr-code';
import { useState } from 'react';
import "../css/input.css"
    function Input() {
    const [value, setvalue] = useState("https://google.com");
    return(
        <div className='input-home'>
            <div className="fir-lay">
                <h1>Hello there</h1>
                <p>Generate QR Code</p>
            </div>
            <div className="sec-lay">
                <input type="text" value={value} onChange={(e)=> setvalue(e.target.value)} />
            </div>
            <div className="thir-lay">
                <QRCode value={value} />
            </div>
        </div>
    )
}

export default Input