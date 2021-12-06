import React from 'react'

export default function MoreInfo({ show }) {
    return (
        <>
            <div className={`more-info fade ${show ? "show" : ""} bg-light py-3 px-3 mt-4 rounded text-dark fs-6 fw-normal`} style={{maxWidth: "500px"}}>
            <p>
                BetaFinder is a platform that unites beta testers and developers. It takes the guesswork out of finding the people you are looking for.
                    <br/><br/>
                When created BetaFinder will provide you with a place to find and recieve feedback on your software projects before they are released to the public. Until then, <span className="text-success join-btn" data-bs-toggle="modal" data-bs-target="#emailSignUpModal">please join our email list</span> for updates on this app. Thank you very much.
                </p>
            </div>
        </>
    )
}
