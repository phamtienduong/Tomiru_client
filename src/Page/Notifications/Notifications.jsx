// src/App.js
import React, { useState } from 'react';
import { Layout, Menu, Avatar, Button, Badge, Dropdown, Tabs, Modal, Space, Switch } from 'antd';
import {
    HomeOutlined,
    BellOutlined,
    MessageOutlined,
    UserOutlined,
    ShareAltOutlined,
    ShopOutlined,
    EnvironmentOutlined,
    SearchOutlined,
    ProfileOutlined,
    EyeOutlined,
    EyeInvisibleOutlined,
    SendOutlined,
    DownloadOutlined,
    EllipsisOutlined,
    CheckOutlined,
    SettingOutlined,
    DeleteOutlined,
    DollarOutlined,
    CommentOutlined
} from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';


const { Sider, Content } = Layout;
const { TabPane } = Tabs;

const notifications = [
    {
        id: 1,
        avatar: 'https://i.pravatar.cc/150?img=1',
        message: 'Tomiru đã nhắc đến bạn và những người khác ở bình luận của họ.',
        time: '1 giờ trước',
    },
    {
        id: 2,
        avatar: 'https://i.pravatar.cc/150?img=2',
        message: 'Tomiru đã chuyển đến bạn 1.000 Tomxu và lời nhắn của anh ấy.',
        time: '1 giờ trước',
    },
    {
        id: 3,
        avatar: 'https://i.pravatar.cc/150?img=3',
        message: 'Tomtomm đã chấp nhận lời mời kết bạn của bạn.',
        time: '3 giờ trước',
    },
    {
        id: 4,
        avatar: 'https://i.pravatar.cc/150?img=4',
        message: 'Totorooo và 10 người khác đã yêu thích bài viết của bạn.',
        time: '4 giờ trước',
    },
];

function App() {
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
    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<CheckOutlined />}>
                Đánh dấu tất cả đã đọc
            </Menu.Item>
            <Menu.Item onClick={showModal} key="2" icon={<SettingOutlined />}>
                Cài đặt thông báo
            </Menu.Item>
        </Menu>
    );
    const menu1 = (
        <Menu>
            <Menu.Item key="1" icon={<CheckOutlined />}>
                Đánh dấu là đã đọc
            </Menu.Item>
            <Menu.Item key="2" icon={<DeleteOutlined />}>
                Xoá thông báo này
            </Menu.Item>
        </Menu>
    )
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0" style={{ backgroundColor: '#fff' }}>
                <div className="logo p-4 text-center text-xl font-bold">
                    TOMIRU
                </div>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        Trang chủ
                    </Menu.Item>
                    <Menu.Item key="2" icon={<Badge count={10}><BellOutlined /></Badge>}>
                        Thông báo
                    </Menu.Item>
                    <Menu.Item key="3" icon={<MessageOutlined />}>
                        Tin nhắn
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                        Gói thành viên
                    </Menu.Item>
                    <Menu.Item key="5" icon={<ShareAltOutlined />}>
                        Mạng lưới
                    </Menu.Item>
                    <Menu.Item key="6" icon={<ShopOutlined />}>
                        Cửa hàng
                    </Menu.Item>
                    <Menu.Item key="7" icon={<EnvironmentOutlined />}>
                        Bản đồ
                    </Menu.Item>
                    <Menu.Item key="8" icon={<SearchOutlined />}>
                        Tìm kiếm
                    </Menu.Item>
                    <Menu.Item key="9" icon={<ProfileOutlined />}>
                        Trang cá nhân
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '16px', backgroundColor: '#fff' }}>
                    <div className="p-4 rounded shadow-lg bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Thông báo</h2>
                            <Dropdown overlay={menu} placement="bottomRight">
                                <Button icon={<EllipsisOutlined />} />
                            </Dropdown>
                        </div>
                        <Modal
                            centered
                            className="w-full max-w-md"
                            title="Cài đặt thông báo"
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
                            <div>
                                <div className="mb-4">
                                    <div className='flex'>
                                        <div>
                                            <Space>
                                                <DollarOutlined />
                                            </Space>
                                        </div>
                                        <div className='ml-2'>
                                            <p>Nhận thông báo TOMXU</p>
                                        </div>
                                        <div className='ml-6'>
                                            <Switch defaultChecked onChange={onChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className='flex'>
                                        <div>
                                            <Space>
                                                <CommentOutlined />
                                            </Space>
                                        </div>
                                        <div className='ml-2'>
                                            <p>Nhận thông báo tương tác</p>
                                        </div>
                                        <div className='ml-6'>
                                            <Switch defaultChecked onChange={onChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <Tabs defaultActiveKey="2" className="w-full">
                                <TabPane tab="Tất cả" key="1">
                                    <p>Nội dung của tab Tất cả</p>
                                </TabPane>
                                <TabPane tab="TOMXU" key="2">
                                    <p>Nội dung của tab TOMXU</p>
                                </TabPane>
                                <TabPane tab="Tương tác" key="3">
                                    <p>Nội dung của tab Tương tác</p>
                                </TabPane>
                                <TabPane tab="Tài khoản" key="4">
                                    <p>Nội dung của tab Tài khoản</p>
                                </TabPane>
                            </Tabs>
                        </div>
                        {notifications.map((notification) => (
                            <div key={notification.id} className="flex items-center mb-4 p-4 bg-gray-100 rounded shadow">
                                <Avatar src={notification.avatar} size="large" />
                                <div className='w-full'>
                                    <div className="ml-4 flex justify-between">
                                        <div>
                                            <p>{notification.message}</p>
                                        </div>
                                        <div>
                                            <Dropdown overlay={menu1} placement="bottomRight">
                                                <Button icon={<EllipsisOutlined />} />
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <span className="text-gray-500">{notification.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Content>
                <Sider width={300} style={{ backgroundColor: '#fff', padding: '16px' }} className="rounded shadow-lg">
                    <div className="text-center mb-4">
                        <h3 className="text-xl font-bold">TOMXU</h3>
                        <div className="text-2xl font-bold">1,123.12</div>
                        <Button icon={<EyeOutlined />} type="text" />
                    </div>
                    <div className="text-center mb-4">
                        <h3 className="text-xl font-bold">pTOMXU (Chi tiết)</h3>
                        <div className="text-2xl font-bold">1,123.12</div>
                        <Button icon={<EyeInvisibleOutlined />} type="text" />
                    </div>
                    <div className="flex justify-between mb-4">
                        <Button className='w-[118px] h-[36px] rounded-[50px] text-yellow-500 bg-black' type="default" icon={<SendOutlined />}>Chuyển</Button>
                        <Button className='w-[118px] h-[36px] rounded-[50px] text-yellow-500 bg-black' type="default" icon={<DownloadOutlined />}>Nhận</Button>
                    </div>
                    <Button block className="mb-2">Lịch sử giao dịch</Button>
                    <Button block>Đại lý</Button>
                </Sider>
            </Layout>
        </Layout>
    );
}

export default App;
