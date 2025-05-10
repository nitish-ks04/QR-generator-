import { useNavigate } from "react-router-dom";
import "../css/home.css"

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="home-1-lay">
                <h1>welcome</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam porro accusantium vitae, ipsam modi nemo voluptate, dolorem cumque omnis error. Voluptates, omnis! Beatae, reprehenderit.</p>
            </div>
            <div className="home-2-lay">
                <h2>Get QR Generate here</h2>
                <p>How do u want your QR</p>
                <div className="home-2-but">
                    <button onClick={() => navigate("/text-input")}>
                        <div>
                            <strong>Text</strong>
                            <div>Input some text here</div>
                        </div>
                    </button>
                    <button onClick={() => navigate("/input")}>
                        <div>
                            <strong>URL</strong>
                            <div>Input your URL here</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home