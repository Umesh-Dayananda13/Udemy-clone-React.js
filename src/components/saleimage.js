import udemy2 from '../assets/images/udemy2.jpg';
function Sale(){
    return(
        <div class="sale-image">
            <img src={udemy2}></img>
            <div class="sale-image__offer">
                <h2>Udemy Flash Sale! 24 hours to save.</h2>
                <p>Get the top Courses for just 499. Just one day to save but a 
                    lifetime to learn
                </p>
            </div>
        </div>
    )
}

export default Sale;