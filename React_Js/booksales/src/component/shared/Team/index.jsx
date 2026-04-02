export default function Team() {
    return (
        <>
            <section className="py-5 bg-light" id="team">
                <div className="container">
                    <h2 className="text-center mb-5">Our Team</h2>
                    <div className="row text-center">

                        <div className="col-md-4">
                            <img src="https://picsum.photos/150" className="rounded-circle mb-3" />
                            <h5>John Doe</h5>
                            <p>Frontend Developer</p>
                        </div>

                        <div className="col-md-4">
                            <img src="https://picsum.photos/151" className="rounded-circle mb-3" />
                            <h5>Jane Smith</h5>
                            <p>Backend Developer</p>
                        </div>

                        <div className="col-md-4">
                            <img src="https://picsum.photos/152" className="rounded-circle mb-3" />
                            <h5>Michael Lee</h5>
                            <p>UI/UX Designer</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}