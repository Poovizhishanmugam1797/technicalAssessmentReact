import React from 'react';
import forward from "../assets/forward.png";
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
							
							<button className="genre" onClick={(e) => {
						e.preventDefault();
						window.location.href = selected.link;
					}}>
						<img className="share" src={forward} />&nbsp;&nbsp;  Share
					</button>			
					</p>				
					<p className="synopsis">{selected.synopsis && selected.synopsis.substr(0, 350)}</p>		
			</div>
		</>
	)
}
export default PopUpDetails;