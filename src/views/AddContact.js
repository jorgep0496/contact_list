import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		agenda_slug: store.agenda,
		address: "",
		phone: ""
	});

	let history = useHistory();

	useEffect(() => { }, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		actions.addContact(contact, history);
		setContact({
			full_name: "",
			email: "",
			agenda_slug: store.agenda,
			address: "",
			phone: ""
		});
	}
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" name="full_name" className="form-control" placeholder="Full Name" value={contact.full_name} onChange={handleChange} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" name="email" className="form-control" placeholder="Enter email" value={contact.email} onChange={handleChange} />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" name="phone" className="form-control" placeholder="Enter phone" value={contact.phone} onChange={handleChange} />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" name="address" className="form-control" placeholder="Enter address" value={contact.adress} onChange={handleChange} />
					</div>
					<button
						type="submit"
						className="btn btn-primary form-control"
					>
						Save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};