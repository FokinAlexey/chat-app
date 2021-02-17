import React from "react";
import Contact from "../components/Contact";

const users = [
    {
        name: "Robert Reyes",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg",
        online: false
    },
    {
        name: "Nellie Caldwell",
        avatar: "https://randomuser.me/api/portraits/women/17.jpg",
        online: true
    },
    {
        name: "Vernon Mason",
        avatar: "https://randomuser.me/api/portraits/men/84.jpg",
        online: true
    },
    {
        name: "Erica Hunt",
        avatar: "https://randomuser.me/api/portraits/women/87.jpg",
        online: false
    },
    {
        name: "Juanita Phillips",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        online: true
    }
];

function ContactList() {
    return (
        <div>
            {users.map((item) => (
                <Contact
                    online={item.online}
                    image={item.avatar}
                    character={item.name}
                />
            ))}
        </div>
    );
}

export default ContactList;
