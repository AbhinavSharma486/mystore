import "./Search.scss";
import { MdClose } from "react-icons/md";
import ProdImg from "../../../assets/products/earbuds-prod-1.webp";


const Search = ({ setShowSearch }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Search for Products"
                />
                <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-results-content">
                <div className="start-msg">
                    Start typing to see products you are looking for.
                </div>
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="image-container">
                            <img src={ProdImg} alt="product" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Product Name</span>
                            <span className="desc">Product Description</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
