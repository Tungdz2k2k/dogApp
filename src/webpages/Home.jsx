import React from "react";
import "../App.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation, Autoplay} from "swiper";
import {useContext, useEffect, useState} from "react";


function Home() {
    const [data, setData] = useState();

    async function getData(url = "") {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        // console.log(response.json());
        return response.json();
    }


    useEffect(() => {
        getData(
            "http://localhost:8080/app/dog/getDog"
        ).then((data) => {
            setData(data.data);
            console.log(data);
        });
    }, []);
    return (

        <html>
        <div className="App">
            <header className="header">
                <div className="header-container">
                    <div className="logo">
                        <a href="#">
                            <img src="/doge.png">
                            </img>
                        </a>
                    </div>
                    <div className="header-content">
                        Nhận nuôi chó
                    </div>
                </div>
            </header>

            <div className="navbar">

                <div className="dropdown">
                    <button className="dropbtn">Danh mục
                        <i className="fa fa-caret-down"></i>
                    </button>

                    <div className="dropdown-content">
                        <a href="#">Nhận nuôi chó</a>
                        <a href="#">Tìm kiếm chó lạc</a>
                        <a href="#">Đăng bài</a>
                        <a href="#">Diễn đàn</a>
                    </div>
                </div>
                <a href="AddContent">Thêm mới data</a>

            </div>
            <div className="height">

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src="/slide.jpg"/></SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide><img src="/slide.jpg"/></SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>

                </Swiper>

            </div>

            <div className="container">
                <div className="left-content"></div>
                <div className="content">
                    {data&&data.map(e => <div>
                        <div className="card">
                            <div className="zoom">
                                <a href="/doge.png">
                                    <img src={e.img}>
                                    </img>
                                </a>
                            </div>
                        </div>
                        <a href="#" className="text"> {e.title} </a>
                    </div>)}
                </div>
                <div className="right-content"></div>
            </div>
            <div className="footer">
                <p className="text">Tungdt</p>
            </div>
        </div>
        </html>


    );
}

export default Home;