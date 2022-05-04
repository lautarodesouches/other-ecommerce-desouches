const CheckoutForm = ({createOrder}) => {
    return(
        <form className="col-12 col-md-4 bg-white rounded p-4" onSubmit={(e) => {createOrder(e)}}>
            <div className="mb-3 text-start">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" aria-describedby="name" required />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="email" required />
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="tel" className="form-control" id="phone" aria-describedby="phone" required />
            </div>
            <button type="submit" className="btn btn-primary mt-4 w-25">Submit</button>
        </form>
    );
}

export default CheckoutForm;