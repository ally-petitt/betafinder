import React from 'react'
import Iframe from '../../pages/home/Iframe'
import ExitButton from "../../images/exit-button.svg"
import "./emailForm.css"

function EmailForm() {
    const iframe = `<iframe width="540" height="auto" src="https://68ca2cf2.sibforms.com/serve/MUIEADo7rK4qGjKtywWHPnILStIS5mhbqrL8rPzjmgbA4M_CgdB9pNja6-UKfHqkegYXRRNZGa7xFpbdaClJsf7VFlmym0FDOtnd389SKd6AW8cguGCnyMDE8Onbi4a_Nc15qEcjEQvf_AnsJp7hmidPHDV0j9WQ4rEZCshVtZiMcwSajQ2619gWCk68xvL9_enHDLDdF7vljcLE" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>`

    return (
        <div class="modal fade" id="emailSignUpModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Sign-Up</h5>
                    
                    <img src={ExitButton} alt="exit" data-bs-dismiss="modal" className="exit-btn"></img>

                </div>
                <div class="modal-body">
                    <Iframe id="emailIframe" iframe={iframe} />
                </div>
                </div>
            </div>
        </div> 
    )

}

export default EmailForm
