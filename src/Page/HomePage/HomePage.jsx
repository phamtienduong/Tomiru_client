import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Button, Divider, Layout, Card, Row, Col, Badge, Rate } from 'antd';
import { AppstoreOutlined, DownOutlined, ClockCircleOutlined } from '@ant-design/icons';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Meta } = Card;
const { Content } = Layout;

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <a href="#">Galaxy S24 Ultra</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">iPhone 15</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">iPhone 15 Pro Max</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">Galaxy S23 Ultra</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">iPhone 14</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">iPhone 13</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">iPhone 12</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">iPhone 11</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">Xiaomi Giá Rẻ</a>
            </Menu.Item>
        </Menu>
    );

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timezoneOffset = 7; // GMT+7
        const endDate = new Date("2025-04-15T00:00:00");
        endDate.setHours(endDate.getHours() + timezoneOffset);

        const interval = setInterval(() => {
            const now = new Date();
            now.setHours(now.getHours() + timezoneOffset);

            const distance = endDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            } else {
                setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
                setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
                setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const products = [
        {
            title: 'iPhone 15 Pro Max 256GB (VN/A)',
            oldPrice: '34,999,000 đ',
            newPrice: '27,999,000 đ',
            image: '../../../src/assets/img/iphone/vn_iphone_15_pro_blue_titanium_pdp_image_position-1b_blue_titanium_color.webp',
            discount: 'Giảm 20%',
            rating: 4,
            installment: 'Trả trước 8,399,700 đ',
            remaining: 'Còn 27/50 suất'
        },
        {
            title: 'iPhone 15 Pro 1TB (VN/A)',
            oldPrice: '43,999,000 đ',
            newPrice: '34,999,000 đ',
            image: '../../../src/assets/img/iphone/iphone15-pro-max-titan-den.webp',
            discount: 'Giảm 20%',
            rating: 5,
            installment: 'Trả trước 10,499,700 đ',
            remaining: 'Còn 30/50 suất'
        },
        {
            title: 'iPhone 15 128GB (VN/A)',
            oldPrice: '20,000,000 đ',
            newPrice: '18,799,000 đ',
            image: '../../../src/assets/img/samsung/samsung-galaxy-z-flip5-tim-2_2.webp',
            discount: 'Giảm 10%',
            rating: 3,
            installment: 'Trả trước 5,639,700 đ',
            remaining: 'Còn 30/50 suất'
        },
        {
            title: 'iPhone 14 Pro Max 256GB (Cũ 99%)',
            oldPrice: '24,899,000 đ',
            newPrice: '20,499,000 đ',
            image: '../../../src/assets/img/OPPO/oppo-find-n3.webp',
            discount: 'Giảm 10%',
            rating: 4,
            installment: 'Trả trước 6,149,700 đ',
            remaining: 'Còn 32/50 suất'
        },
        {
            title: 'iPhone 14 Plus 128GB (Cũ 99%)',
            oldPrice: '16,999,000 đ',
            newPrice: '13,699,000 đ',
            image: '../../../src/assets/img/OPPO/oppo-reno-11-f-xanh-den-1.webp',
            discount: '0',
            rating: 5,
            installment: 'Trả trước 4,109,700 đ',
            remaining: 'Còn 17/50 suất'
        }
    ];
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return (
        <div>
            <div className="bg-red-500 text-white flex justify-between items-center p-2  ">
                <div className="flex justify-between content-center items-center w-[1230px] h-[40px] m-auto">
                    <div className="flex items-center space-x-4">
                        <Dropdown overlay={menu} placement="bottomLeft" arrow>
                            <Button className="bg-red-700 text-white border-none flex items-center">
                                <AppstoreOutlined className="mr-1" />
                                Danh mục sản phẩm
                                <DownOutlined className="ml-1" />
                            </Button>
                        </Dropdown>
                    </div>
                    <div className="flex justify-between items-center space-x-2 text-black text-[13px] w-[984px] h-[40px] bg-white pl-3 pr-3 rounded-md">
                        <span className="font-bold">SẢN PHẨM HOT:</span>
                        <a href="#" className="hover:text-gray-600">Galaxy S24 Ultra</a>
                        <Divider type="vertical" />
                        <a href="#" className="hover:text-gray-600">iPhone 15</a>
                        <Divider type="vertical" />
                        <a href="#" className="hover:text-gray-600">iPhone 15 Pro Max</a>
                        <Divider type="vertical" />
                        <a href="#" className="hover:text-gray-600">Galaxy S23 Ultra</a>
                        <Divider type="vertical" />
                        <a href="#" className="hover:text-gray-600">iPhone 14</a>
                        <Divider type="vertical" />
                        <a href="#" className="hover:text-gray-600">iPhone 13</a>
                        <Divider type="vertical" />
                        <a href="#" className="hover:text-gray-600">iPhone 12</a>
                        <Divider type="vertical" />
                        <a href="#" className="hover:text-gray-600">iPhone 11</a>
                        <Divider type="vertical" />
                        <a href="#" className="hover:text-gray-600">Xiaomi Giá Rẻ</a>
                    </div>
                </div>
            </div>

            <div className='' >
                <Layout className="min-h-screen flex items-center">
                    <div className="flex w-[1230px] ">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{ width: '20%', borderRight: 0 }}
                            className="bg-white text-[14px] font-bold"
                        >
                            <Menu.Item key="1" className='hover:bg-red-500 hover:text-white'>Apple chính hãng</Menu.Item>
                            <Menu.Item key="2" className='hover:bg-red-500 hover:text-white'>iPhone</Menu.Item>
                            <Menu.Item key="3" className='hover:bg-red-500 hover:text-white'>Samsung</Menu.Item>
                            <Menu.Item key="4" className='hover:bg-red-500 hover:text-white'>Điện thoại khác</Menu.Item>
                            <Menu.Item key="9" className='hover:bg-red-500 hover:text-white'>Khuyến mãi</Menu.Item>
                            <Menu.Item key="10" className='hover:bg-red-500 hover:text-white'>Tin công nghệ</Menu.Item>
                            <Menu.Item key="11" className='hover:bg-red-500 hover:text-white'>Thu cũ đổi mới</Menu.Item>
                        </Menu>
                        <Content style={{ width: '80%' }}>
                            <div className="p-6">
                                <Slider {...settings}>
                                    <div>
                                        <img
                                            src="../../../src/assets/img/web-bigbang-sale.webp"
                                            alt="Slider Image"
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="../../../src/assets/img/s22ultra-23-5.webp"
                                            alt="Slider Image"
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="../../../src/assets/img/ip14_2.webp"
                                            alt="Slider Image"
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </Content>
                    </div>
                </Layout>
            </div>

            {/* Flash Sale */}
            <div className="flash-sale bg-orange-500 text-white p-6 w-[1230px] m-auto rounded-xl mt-[-380px]">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <h1 className="text-4xl font-bold">FLASH SALE</h1>
                            <span className="ml-4">Đang diễn ra</span>
                            <span className="ml-4">08:00 - 21:00</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="text-xl">{days} : {hours} : {minutes} : {seconds}</div>
                            <span>Kết thúc trong</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Slider {...sliderSettings}>
                            {products.map((product, index) => (
                                <div key={index} className="px-2">
                                    <Card
                                        hoverable
                                        cover={<img alt={product.title} src={product.image} />}
                                        className="relative"
                                    >
                                        <Badge.Ribbon text={product.discount} color="red" />
                                        <Meta title={product.title} />
                                        <div className="text-lg font-bold text-red-600 mt-2">{product.newPrice}</div>
                                        <div className="line-through text-gray-500">{product.oldPrice}</div>
                                        <div className="text-gray-700">{product.installment}</div>
                                        <div className="text-gray-700">{product.remaining}</div>
                                        <Rate disabled defaultValue={product.rating} />
                                    </Card>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="flex justify-end mt-6">
                        <Button className="bg-red-600 text-white">
                            Xem tất cả <DownOutlined />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="ml-6 mr-6 lg:col-span-3">
                <Row className=' flex justify-center ' gutter={[20, 20]}>
                    {products.splice(0, 8).map((product, index) => (
                        <Col onClick={() => handleClickProduct(product.product_id)} key={index} className='text-center m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 '>
                            <div className="relative z-10">
                                {product.discount == 0 ? <></> : (
                                    <div className="absolute top-0 left-0 w-12 h-12 bg-red-500 text-white text-center font-bold animate-pulse flex items-center justify-center rounded-sm">
                                        <span className="text-xs sm:text-sm md:text-base"> {product.discount }</span>
                                    </div>
                                )}
                            </div>
                            <Card
                                hoverable
                                className='border-3'
                                cover={<img alt={product.title} src={product.image} />}
                            >
                                <Card.Meta
                                    title={product.title}
                                    description={
                                        <div>
                                            {
                                                product.discount > 0 ? (
                                                    <div className='flex'>
                                                        <p className="text-lg  font-medium text-gray-900 line-through ">{} </p>
                                                        <p className="text-lg ml-2 font-medium text-red-600">
                                                           {product.newPrice}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <p className="text-lg  font-medium text-gray-900 ">{product.oldPrice} </p>

                                                )
                                            }
                                            <p className="mt-1 text-lg font-medium text-gray-900 text-center">
                                                <Rate disabled value={product.rating} className='text-sm' />
                                            </p>
                                        </div>

                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="mt-7 flex justify-center content-center items-center">
                <button
                    onClick={() => customNavigate(navigate, "/products")}
                    className="w-[234px] h-[56px] text-[16px] bg-red-600 text-white rounded-sm">
                   
                </button>
            </div>
        </div>
    );
}
