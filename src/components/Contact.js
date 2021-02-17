import React, { Component } from "react";
import PropTypes from "prop-types";
import "../components/Contact.css";


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        }
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.image} alt={this.props.character} />
                <div>
                    <h4 className="name">{this.props.character}</h4>
                    <div onClick={
                        event => {
                            const isOnline = !this.state.online;
                            this.setState({ online: isOnline });
                        }
                    }
                        className="status">
                        <div className={this.state.online ? "status-online" : "status-offline"} />
                        <p className="status-text">{this.state.online ? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
        )

    }
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool
};

export default Contact;
