import React from "react";
import PropTypes from "prop-types";
import "../components/Contact.css";

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.image} alt={props.character} />
            <div>
                <h4 className="name">{props.character}</h4>
                <div className="status">
                    <div className={props.online ? "status-online" : "status-offline"} />
                    <p className="status-text">{props.online ? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool
};

export default Contact;
