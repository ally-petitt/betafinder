import React, { useState } from 'react'
import "./home.css"
import EmailForm from '../../modals/emailForm/EmailForm';
import MoreInfo from './MoreInfo';

function Home() {
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [showEmailForm, setShowEmailForm] = useState(false);
    

    return (
        <div className="home">
            <div className="div" maxWidth={1200}>
                <section className="section">
                <div className="p">
                    <h1 className="title">βetaFinder</h1>
                    <p className="subtitle">Beta testing made easy</p>
                    <p className="description">coming soon</p>
                </div>

                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#emailSignUpModal" onClick={() => setShowEmailForm(!showEmailForm)}>
                    Sign Up For Updates
                </button>
                {/* modal */}
                <EmailForm />

                <button type="button" className="btn btn-light" onClick={() => setShowMoreInfo(!showMoreInfo)}>
                    {showMoreInfo ? <>Show Less</> : <>Learn More</>}
                </button>

                <MoreInfo show={showMoreInfo} />

                

                </section>
            </div>
        </div>
    )
}

export default Home
