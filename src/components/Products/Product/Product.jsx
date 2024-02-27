import "./Product.scss";
import prod1 from "../../../assets/products/earbuds-prod-1.webp";
import prod2 from "../../../assets/products/earbuds-prod-2.webp";
import prod3 from "../../../assets/products/earbuds-prod-3.webp";
import prod4 from "../../../assets/products/earbuds-prod-4.webp";
import prod5 from "../../../assets/products/headphone-prod-1.webp";
import prod6 from "../../../assets/products/headphone-prod-2.webp";
import prod7 from "../../../assets/products/headphone-prod-3.webp";
import prod8 from "../../../assets/products/headphone-prod-4.webp";
import prod9 from "../../../assets/products/speaker-prod-1.webp";
import prod10 from "../../../assets/products/speaker-prod-2.webp";
import prod11 from "../../../assets/products/speaker-prod-3.webp";
import prod12 from "../../../assets/products/speaker-prod-4.webp";
import prod13 from "../../../assets/products/watch-prod-1.webp";
import prod14 from "../../../assets/products/watch-prod-2.webp";
import prod15 from "../../../assets/products/watch-prod-3.webp";
import prod16 from "../../../assets/products/watch-prod-4.webp";


const Product = () => {
    return (
        <>
            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod1} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Earbuds</span>
                    <span className="price">&#8377;1499</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod2} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Earbuds</span>
                    <span className="price">&#8377;1299</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod3} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Earbuds</span>
                    <span className="price">&#8377;1599</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod4} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Earbuds</span>
                    <span className="price">&#8377;2499</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod5} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Headphone</span>
                    <span className="price">&#8377;1799</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod6} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Headphone</span>
                    <span className="price">&#8377;2099</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod7} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Headphone</span>
                    <span className="price">&#8377;1599</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod8} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Headphone</span>
                    <span className="price">&#8377;1499</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod9} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Bluetooth Speaker</span>
                    <span className="price">&#8377;1599</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod10} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Bluetooth Speaker</span>
                    <span className="price">&#8377;2999</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod11} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Bluetooth Speaker</span>
                    <span className="price">&#8377;1699</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod12} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Bluetooth Speaker</span>
                    <span className="price">&#8377;5099</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod13} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Smart Watch</span>
                    <span className="price">&#8377;1299</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod14} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Smart Watch</span>
                    <span className="price">&#8377;4499</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod15} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Smart Watch</span>
                    <span className="price">&#8377;2499</span>
                </div>
            </div>

            <div className="product-card">
                <div className="thumbnail">
                    <img src={prod16} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Smart Watch</span>
                    <span className="price">&#8377;1299</span>
                </div>
            </div>


        </>
    );
};

export default Product;
