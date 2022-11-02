import React from "react";
import "../App.css";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";

function AddContent() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }
    const [data, setData] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [img, setImg] = useState();

    async function postData(url = "", data = {}) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }

    const addContent = () => {
        postData(
            "http://localhost:8080/app/dog/addDog",
            {
                title,
                content,
                img,
            },
        ).then((data) => {
            setData(data.data);
            console.log(data.rspCode);
        });

    };
    return (

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
                        <a href="#">Các loại chó phổ biến ở Việt Nam</a>
                        <a href="#">Nhận nuôi chó</a>
                        <a href="#">Tìm kiếm chó lạc</a>
                        <a href="#">Diễn đàn</a>
                    </div>
                </div>

            </div>

            <div className="container">

                <div className="left-content"></div>
                <div className="add-content-container">
                    <p className="h1">Thêm mới content</p>
                    <div className="add-content">

                        <p className="text">Tiêu đề</p>
                        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
                        <p className="text">Nội dung</p>

                        <input type="text" placeholder="Content" value={content}
                               onChange={e => setContent(e.target.value)}/>
                        <p className="text">Ảnh</p>

                        <input type="text" placeholder="Url image" value={img} onChange={e => setImg(e.target.value)}/>


                    </div>
                    <button onClick={routeChange}>
                        Quay lại
                    </button>
                    <button onClick={addContent}>
                        Xác nhận
                    </button>
                  {checkStatus(data&&data?.rspCode)}
                </div>
                <div className="right-content"></div>
            </div>
            <div className="footer">
                <p className="text">Tungdt</p>
            </div>
        </div>


    );
    function checkStatus(response) {
        if (response == "00") {
            return <p className="text" >Thêm thẻ thành công </p>;
        } else {
            return <p className="text">Thêm thẻ thất bại </p>;
        }
    }
}

export default AddContent;