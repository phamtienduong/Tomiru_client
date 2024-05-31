import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Button, Input, Tabs, Image, Divider, QRCode, Space, Switch, Modal } from 'antd';
import {
    UserOutlined, SettingOutlined, LockOutlined, LogoutOutlined, CopyOutlined, ShareAltOutlined,
    EllipsisOutlined, QuestionCircleOutlined, EditOutlined, MoonOutlined
} from '@ant-design/icons';

const { TabPane } = Tabs;
const { Header, Content } = Layout;

export default function ProfileUser() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<QuestionCircleOutlined />}>
                Trợ giúp và hỗ trợ
            </Menu.Item>
            <Menu.Item key="2" icon={<LockOutlined />}>
                Đổi mật khẩu
            </Menu.Item>
            <Menu.Item onClick={showModal} key="3" icon={<EditOutlined />}>
                Sửa thông tin cá nhân
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />}>
                Đăng xuất
            </Menu.Item>
            <div className="flex justify-between content-center">
                <div>
                    <Menu.Item key="5" icon={<MoonOutlined />}>
                        Chế độ tối
                    </Menu.Item>
                </div>
                <div className="mt-1">
                    <Switch defaultChecked onChange={onChange} />
                </div>
            </div>
        </Menu>
    );
    const menu1 = (
        <Menu>
            <Menu.Item key="1" icon={<CopyOutlined />}>
                Huỷ theo dõi
            </Menu.Item>
            <Menu.Item key="2" icon={<ShareAltOutlined />}>
                Huỷ kết bạn
            </Menu.Item>
        </Menu>
    )

    return (
        <div>
            <Layout className="min-h-screen bg-gray-100">
                <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
                    <div className="flex items-center">
                        <img
                            src="../../../src/assets/img/logo-f88d9dda.png"
                            alt="Logo"
                            className="h-6 w-auto ml-7"
                        />
                        <div className="hidden sm:flex items-center ml-[150px] space-x-2">
                            <span className="text-sm font-medium">Trang chủ</span>
                            <span className="text-sm font-medium">{'>'}</span>
                            <span className="text-sm font-medium">Trang cá nhân</span>
                        </div>
                    </div>
                </div>
                <Content className="max-w-5xl mx-auto py-6">
                    <div className="relative">
                        <Image
                            src="https://s3-alpha-sig.figma.com/img/78a7/3cac/5dee8e64f192a9370addd776d13ad1a3?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=okDrQgT0~xCBlsyaq6Z5cuBakUiwcc4KEdf2XgSWgqaVpZiseSzcvqfwiBswrRUzMpncXWn6Q-NUBqvTgG1dEdAyOB1tUTxoa9VeNWDK-Hq8~mVtV2Piftx~4nM~~pf04vP-dS0bHQhLosKQ7CDghnd1aZCu1V9aX~fspTu0Di1v34wmNFkpi3bxaftHXgtHHIZ-0za08sX9JgJh1yW1yWiGj9nVSlO-9wgtgd~kZesjgihWSi0d~c8SGBZS2enKKnKkZwtUYnkF8KLjYbhNACPo67BEy1YgtNvcZDnReSsIhTTxu5qdjPeDMGeY2MrPrZelFZMPC-LWVXW1RRWDPg__"
                            alt="Cover"
                            className="w-[1240px] h-[401px] object-cover rounded"
                            preview={false}
                        />
                        <div className="absolute bottom-0 left-14 transform translate-y-1/2">
                            <Avatar
                                size={160}
                                src="../../../src/assets/img/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mt-9 pl-[250px] pr-4">
                        <div>
                            <h1 className="text-3xl font-bold">Tomiru</h1>
                            <p className="text-gray-600">@Tomiru_9x_VIP_pro</p>
                        </div>
                        <div className="flex space-x-2">
                            <Dropdown overlay={menu} placement="bottomRight">
                                <Button icon={<EllipsisOutlined />} />
                            </Dropdown>
                        </div>
                        <Modal
                            centered
                            className="w-full max-w-md"
                            title="Chỉnh sửa thông tin cá nhân"
                            visible={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <div>
                                    <div>
                                        <Button
                                            className="w-full h-12 bg-yellow-500 rounded-3xl"
                                            key="submit"
                                            onClick={handleOk}
                                        >
                                            Lưu
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            className="w-full h-12 mt-[16px] rounded-3xl"
                                            key="back"
                                            onClick={handleCancel}
                                        >
                                            Hủy
                                        </Button>
                                    </div>
                                </div>
                            ]}
                        >
                            <form>
                                <div className="flex justify-between space-x-4">
                                    <div className="mb-4 flex-1">
                                        <label className="block text-gray-700">Họ</label>
                                        <Input type="text" className="ant-input w-full h-12" name="ho" />
                                    </div>
                                    <div className="mb-4 flex-1">
                                        <label className="block text-gray-700">Tên</label>
                                        <Input type="text" className="ant-input w-full h-12" name="ten" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Giới tính</label>
                                    <div className="flex justify-between space-x-4">
                                        <Button className="flex-1 h-12">Nam</Button>
                                        <Button className="flex-1 h-12">Nữ</Button>
                                        <Button className="flex-1 h-12">Khác</Button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Số điện thoại</label>
                                    <Input type="text" className="ant-input w-full h-12" name="phone" />
                                </div>
                            </form>
                        </Modal>
                    </div>
                    <Divider className="my-4" />
                    <div className="flex flex-col items-center justify-center">
                        <Tabs defaultActiveKey="2" className="mt-6 w-full max-w-2xl mx-auto">
                            <TabPane tab="Bài viết" key="1">
                                {/* Nội dung bài viết */}
                            </TabPane>
                            <TabPane tab="Bạn bè" key="2">
                                <div className='w-[650px] h-auto border rounded-[11px] pt-[33px] pl-[24px] pr-[24px] pb-[33px]'>
                                    <div className="flex justify-between ">
                                        <div>
                                            <h3 className="text-xl font-medium">Bạn bè</h3>
                                        </div>
                                        <div className="">
                                            <Input.Search placeholder="Tìm kiếm" className="w-64" />
                                        </div>
                                    </div>
                                    <Tabs defaultActiveKey="1" className="mb-4">
                                        <TabPane tab="Tất cả bạn bè" key="1">
                                            <div className="grid grid-cols-2 gap-4">
                                                {Array(4)
                                                    .fill()
                                                    .map((_, i) => (
                                                        <div key={i} className="flex items-center space-x-4  w-[273px] h-[80px] ml-2 ">
                                                            <Avatar size={60} src="../../../src/assets/img/chan-vay/chan-vay-mini-gau-tua-rua-1.webp" />
                                                            <div className='w-[200px] flex justify-between'>
                                                                <div>
                                                                    <h3 className="text-lg font-medium">Lê Tuấn Anh</h3>
                                                                </div>
                                                                <div className="">
                                                                    <Dropdown overlay={menu1} placement="bottomRight">
                                                                        <Button icon={<EllipsisOutlined />} />
                                                                    </Dropdown>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </TabPane>
                                        <TabPane tab="Đã thêm gần đây" key="2">
                                            <div className="grid grid-cols-2 gap-4">
                                                {Array(2)
                                                    .fill()
                                                    .map((_, i) => (
                                                        <div key={i} className="flex items-center space-x-4">
                                                            <Avatar
                                                                size={60}
                                                                src="../../../src/assets/img/tolam.jpg"
                                                            />
                                                            <div>
                                                                <h3 className="text-lg font-medium">Tô Lâm</h3>
                                                                <Button
                                                                    type="primary"
                                                                    className="bg-yellow-500 border-none mt-2"
                                                                >
                                                                    Kết bạn
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </TabPane>
                                    </Tabs>
                                </div>

                            </TabPane>
                            <TabPane tab="Giới thiệu" key="3">
                                <div className="">
                                    <div className="flex flex-col justify-center w-[650px] h-auto border rounded-[16px] pt-3 pl-6 pr-6 pb-6">
                                        <div>
                                            <h2 className="text-[16px] font-bold">Giới thiệu về bản thân</h2>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <div>
                                                <p>
                                                    I’m a Designer......... Love yourself enough to set boundaries. Your time
                                                    and energy are precious. You get to choose how you use it. You teach people
                                                    how to treat you by deciding what you will and won't accept
                                                </p>
                                            </div>
                                            <div className="mr-3">
                                                <Button className="w-[30px] h-[30px] rounded-full bg-gray-200">
                                                    <i className="flex justify-center content-center fa-solid fa-pen"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Mã giới thiệu" key="4">
                                <Layout className="min-h-screen flex justify-center items-center  w-[650px] h-auto border rounded-[16px]">
                                    <Content className=" p-8 rounded-lg ">
                                        <div className=" mb-4">
                                            <h2 className="text-[16px] font-bold">Mã giới thiệu của bạn</h2>
                                        </div>
                                        <div className="mb-4 ">
                                            <p className="font-semibold ">Cách 1: gửi mã giới thiệu đến người dùng để họ nhập thủ công</p>
                                            <Input
                                                value="21989asdasdas"
                                                suffix={<Button icon={<CopyOutlined />} />}
                                                className="mb-2 mt-2 w-[320px] h-[44px]"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <p className="font-semibold">
                                                Cách 2: Gửi đường dẫn phía dưới để người dùng đăng ký trên mẫu đã có sẵn mã giới thiệu của bạn
                                            </p>
                                            <div className='flex '>
                                                <div>
                                                    <Input
                                                        value="Linkgialap.abc"
                                                        suffix={<Button icon={<CopyOutlined />} />}
                                                        className="mb-2 mt-2 mr-[13px] w-[320px] h-[44px]"
                                                    />
                                                </div>
                                                <div>
                                                    <Button
                                                        icon={<ShareAltOutlined />}
                                                        type="primary"
                                                        className="mt-2 bg-yellow-500 border-none w-[134px] h-11"
                                                    >
                                                        Chia sẻ
                                                    </Button>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="">
                                            <p className="font-semibold">
                                                Bạn cũng có thể quét mã QR code phía dưới để đến trang đăng ký
                                            </p>
                                            <QRCode value="https://ant.design/" size={150} className="mt-2" />
                                        </div>
                                    </Content>
                                </Layout>
                            </TabPane>
                        </Tabs>
                    </div>
                </Content>
            </Layout>
        </div>
    );
}
