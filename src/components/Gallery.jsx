function Gallery() {
    return (
        <div className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Gallery</h2>
                <div className="row g-4">

                    <div className="col-md-4">
                        <img src="https://i.pinimg.com/474x/f2/53/43/f253438604294c88db8c6a54626cd98f.jpg" alt="galleryImage" className="galleryImage rounded shadow" />
                    </div>

                    <div className="col-md-4">
                        <img src="https://i.pinimg.com/474x/8d/17/5d/8d175dd9f2c6fd7acd2f630ee5c36a9d.jpg" alt="galleryImage" className="galleryImage rounded shadow" />
                    </div>

                    <div className="col-md-4">
                        <img src="https://i.pinimg.com/736x/f8/32/cb/f832cbbe1a009e0c11b9442b183d386a.jpg" alt="galleryImage" className="galleryImage rounded shadow" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Gallery;