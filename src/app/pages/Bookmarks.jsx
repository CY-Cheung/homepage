import CardIcon from './CardIcon.jsx'

export default function Bookmarks() {
    return (
		<main className="container col-lg-10 col-9">
            <div className="HeaderHeight"></div>
            <div className="container">
                <h1>Bookmarks</h1>
                <CardIcon />
            </div>
            <div className="HeaderHeight"></div>
            <div className="container">
                <h1>YouTube - Music</h1>
                <div className="card" style={{'width': '100%'}}>
                    <div className="card-header text-center h4">
                        <p className="invisible">Invisible Text</p>
                    </div>
                    <ul className="container">
                        <iframe width="100%" height="500"
                            src="https://www.youtube-nocookie.com/embed/videoseries?list=PLDlClwMje8VxCaM2MNBWsvX6Gqf16ao4B" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                            >
                        </iframe>
                    </ul>
                    <div className="card-footer">
                        <p className="invisible">Invisible Text</p>
                    </div>
                </div>
            </div>
        </main>
    );
}