function ProfileCard({ title, handle, img, altText, description }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={img} alt={altText} />
                </figure>    
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <br></br>
                <div className="content">{description}</div>
            </div>
        </div>
    );
}

export default ProfileCard;