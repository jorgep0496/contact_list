import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";
import { Modal } from "../components/Modal";


export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
    });
    
    const {id, name} = useParams();

    useEffect(() => {
        console.log(id)
        console.log(name)
    }, [])

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<ContactCard onDelete={() => setState({ showModal: true })} />
						<ContactCard />
						<ContactCard />
						<ContactCard />
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};