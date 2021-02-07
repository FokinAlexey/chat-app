import React from "react";
import "../components/Contact.css";

// const online = true;

function Contact(params) {
    return (
        <div className="Contact">
            <img class="avatar"
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="Allan Palmer" />
            <div>
                <h4 class="name">
                    Allan Palmer
                </h4>
                <div class="status">
                    <div class="status-online"> </div>
                    <p class="status-text">online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;