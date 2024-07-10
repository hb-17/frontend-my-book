import image1 from './../../Images/BooksImages/book-luv2code-1000.png'

export const ReturnBook = () => {
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                <img
                    src={image1}
                    width='151'
                    height='233'
                    alt="book"
                />
                <h6 className='mt-2'>Book1</h6>
                <p>CyberLib</p>
                <a className='btn main-color text-white' href="#">Reverse</a>
            </div>
        </div>
    )
}