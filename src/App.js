import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title has-text-centered'>Personal Digital Assistants</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns is-centered'>
                        <div className='column is-3'>
                            <ProfileCard title="Alexa" handle="@alexa99" img={AlexaImage} altText="Alexa logo" description="Alexa is Amazon's cloud-based voice service." />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard title="Cortana" handle="@cortana32" img={CortanaImage} altText="Cortana logo" description="Cortana is Microsoft's personal productivity assistant."/>
                        </div>
                        <div className='column is-3'>
                            <ProfileCard title="Siri" handle="@siri01" img={SiriImage} altText="Siri logo" description="Siri is a voice recognition application created by Apple." />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;