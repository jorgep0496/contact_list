import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { ContactCard } from "../components/ContactCard";
import { Modal } from "../components/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

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
						{!!store.contacts &&
							store.contacts.map((contact, index) => {
								return (
									<ContactCard
										onDelete={() => setState({ showModal: true, contactId: contact.id })}
										key={index}
										contact={contact}
									/>
								);
							})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false, contactId: null })} contactId={state.contactId} />
		</div>
	);
};