import React from "react";

const Banner = () => {
    return (
        <div className="container__banner">
            <div className="banner">
                <div className="banner__icon-smartphone">
                    <img src="https://content.app-sources.com/s/86011651013289591/uploads/Gifs_Aumenta2/Celular_1-2498524.gif" id= "icon-smartphone" alt="" />               
                </div>
                <div className="banner__icon-study">
                    <img src="https://cdn.dribbble.com/users/6696029/screenshots/15187188/media/554833e162874fab364047f6495aaa4f.gif" id= "icon-study" alt="" />
                </div>
                <div className="banner__text">
                    <h2>
                        Hola como estas, esta es la mejor manera para estudiar a distancia 
                    </h2>
                    
                    <a href="#">Leer mas</a>

                </div>

            </div>
        </div>
    );
};

export default Banner;
