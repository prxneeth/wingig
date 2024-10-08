import React, { useState } from 'react'
import RadialProgressBar from './statusbar';
import './userProfile.css'

const UserProfile = () => {
    const [progress, setProgress] = useState(75);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    // Function to open the modal
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent("");
    };


    return (
        <div>  <div className='userPmain'>
            <div className='profileBar'>
                <RadialProgressBar
                    progress={progress}
                    imageSrc="/Frame2.png" />
            </div >
            <div className='userDetails'>
                <h2>WINGIG</h2>
                <hr className='userpfphr' />
                <li className='useritems'>
                    <ul><i class="fa-solid fa-location-dot"></i> Hyderabad, India</ul>
                    <ul> <i class="fa-regular fa-calendar"></i>  4 years</ul>
                    <ul><i class="fa-solid fa-indian-rupee-sign"></i> 10 lakhs</ul>

                    <ul><i class="fa-solid fa-phone"></i> +91 9842 843 439</ul>
                    <ul><i class="fa-regular fa-envelope"></i> mail@gmail.com</ul>
                    <ul><i class="fa-solid fa-suitcase" ></i>  Available to work</ul>
                </li>
            </div>
            <div className='otherDetails'>

                <li className='otherDetailsLi'>
                    <ul><i class="fa-solid fa-language"></i> Add Languages</ul>
                    <ul><i class="fa-regular fa-image"></i> Add Photo</ul>
                    <ul><i class="fa-regular fa-building"></i> Add Company Name & Designation</ul>
                </li>
                <button>Add missing details</button>
            </div>
        </div>
            <div className='userpfDiv'>
                <div className='userpfLinks'>
                    <h3>Quicks Links</h3>
                    <li className='userpfLinksLi'>
                        <ul>Resume </ul>
                        <ul>Key Skills </ul>
                        <ul>Employment </ul>
                        <ul>Education </ul>
                        <ul>IT Skills </ul>
                        <ul>Projects </ul>
                        <ul>Profile Summary </ul>
                        <ul>Accomplishments </ul>
                        <ul>Career Profile </ul>
                        <ul>Personal Details </ul>
                    </li>
                </div>

                <div className='userDetailsForm'>




                    <div className="profile-form">
                        <div className="section">
                            <h3>Resume</h3>
                            <input type="file" />

                            <p>Supported Formats: Doc, Docx, Rtf, Pdf, Up To 2 MB</p>
                        </div>
                        <div className="section" onClick={() => openModal("Resume Headline")}>
                            <h3>Resume Headline</h3>
                            <p className='addDetailsButton'>Add Details</p>
                            <p>Click here to add your Resume Headline</p>
                        </div>

                        <div className="section" onClick={() => openModal("Key Skills")}>
                            <h3>Key Skills</h3>
                            <p className='addDetailsButton'>Add Details</p>
                            <p>Click here to add your Key Skills</p>
                        </div>

                        <div className="section" onClick={() => openModal("Employment")}>
                            <h3>Employment</h3>
                            <p className='addDetailsButton'>Add Details</p>
                            <p>Click here to add your Employment Details</p>
                        </div>

                        <div className="section" onClick={() => openModal("Education")}>
                            <h3>Education</h3>
                            <p className='addDetailsButton'>Add Details</p>
                            <p>Click here to add your Education Details</p>
                        </div>
                        <div className="section" onClick={() => openModal("It Skills")}>
                            <h3>IT Skills</h3>
                            <p className='addDetailsButton'>Add Details</p>
                            <p>Show us your technical expertise by mentioning the softwares and skills you know</p>
                        </div>
                        <div className="section" onClick={() => openModal("Projects")}>
                            <h3>Projects</h3>
                            <p className='addDetailsButton'>Add Details</p>
                            <p>Stand out to Employeers by adding details about the projects that you have done so far</p>
                        </div>
                        <div className="section" onClick={() => openModal("Profile Summary")}>
                            <h3>Profile Summary</h3>
                            <p className='addDetailsButton'>Add Details</p>
                            <p>Highlight your key career achievememts to help Employeers know your potential</p>
                        </div>

                        {/* Modal Popup */}
                        {isModalOpen && (
                            <div className="modal">
                                <div className="modal-content">
                                    <h2>{modalContent}</h2>
                                    <form>
                                        <div>
                                            <label>Enter details for {modalContent}:</label>
                                            <textarea placeholder={`Enter ${modalContent}`} />
                                        </div>
                                        <button type="submit">Save</button>
                                        <button type="button" onClick={closeModal}>
                                            Close
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>



    )
}

export default UserProfile