import React from 'react';
import cross from "../assets/close.png";

function PopUpDetails({ selected, openPopup, isOpen }) {
	return (
		<>
			<img className={`close ${isOpen === true ? 'active' : ''}`} onClick={openPopup} src={cross} />
			<div className="sd-header">
				<h5 className="popUpTitle">{selected.title}</h5>
			</div>
			<div className="sd-body row">
				<img className="sidebarimg" src={selected.imageUrl}
				/>
				<p className="details">Rating :&nbsp;&nbsp;  {selected.rank}/5
					<p className="genreHeading">Genre : &nbsp;&nbsp;
						<button className="genre">
							{selected.genre}
						</button></p>

				</p>
				<p className="synopsis">{selected.synopsis && selected.synopsis.substr(0, 350)}</p>
			</div>
		</>
	)
}
export default PopUpDetails;