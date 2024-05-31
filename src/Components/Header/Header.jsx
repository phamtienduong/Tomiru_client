import { Input, Button, Image } from 'antd';
import { ShoppingCartOutlined, DownOutlined, PhoneOutlined } from '@ant-design/icons';
import React from 'react'
import Search from 'antd/es/input/Search';

export default function Header() {
    return (
        <div className="bg-red-500 text-white flex justify-between items-center h-[60px]">
            <div className='flex justify-center content-center items-center w-[1200px] h-full m-auto  '>
                <div className="flex items-center space-x-12">
                    <div className="text-xl font-bold">
                        <Image src="https://cdn.xtmobile.vn/vnt_upload/weblink/logoxt-01-01_1_copy.png" 
                         alt="logo"
                         preview={false}
                         className="w-[163px] h-[25.77px]"
                         />
                    </div>
                    <div className="flex items-center space-x-3">
                        <div>
                            <PhoneOutlined />
                        </div>
                        <div>
                            <span className='text-[17px]'>1800.6229</span> <br></br>
                            <span className="text-[13px]">Tổng đài miễn phí</span>
                        </div>
                    </div>
                </div>
                <div className="flex-grow mx-12">
                    <Search
                        placeholder="Bạn muốn tìm gì?"
                        allowClear
                        className="w-[441px] h-[40px]"
                    />
                </div>
                <div className="flex items-center space-x-11">
                    <div type="link" className=" pl-2 text-white rounded-md flex-col items-center w-[130px] h-[39px] bg-red-900">
                        <div className='text-[12px]'>
                            <span>Hệ thống</span>
                        </div>
                        <Button type="link" className='ml-[-16px] 14px text-white mt-[-10px] '>
                            <span className="">10 cửa hàng</span>
                            <DownOutlined className="ml-1" />
                        </Button>
                    </div>
                    <Button type="link" className="text-white flex items-center justify-center relative w-[105px] h-[39px] bg-red-900">
                        <ShoppingCartOutlined className="text-2xl" />
                        <span className="ml-1">Giỏ hàng</span>
                        <span className="absolute top-0 right-0 bg-white text-red-600 rounded-full text-xs px-1">0</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
