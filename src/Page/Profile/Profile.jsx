import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Layout, Avatar, Button, Tabs, Input, Image, Divider, Modal, Menu, Dropdown, Space, QRCode } from 'antd';
import { CopyOutlined, LockOutlined, ShareAltOutlined, UserDeleteOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { TabPane } = Tabs;

export default function Profile() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [isFriend, setIsFriend] = useState(false)
    const [isAddingFriend, setIsAddingFriend] = useState(false);


    const handleFollowToggle = () => {
        setIsFollowing(!isFollowing);
    };

    const handleAddFriend = () => {
        setIsAddingFriend(true);
        setIsFriend(true);
    };
    const handleCancelFriend = () => {
        Modal.confirm({
            title: 'Bạn có chắc chắn muốn huỷ kết bạn?',
            onOk: () => {
                setIsFriend(false);
                setIsAddingFriend(false);
            },
            okText: 'Huỷ kết bạn',
            cancelText: 'Không',
            okButtonProps: { style: { backgroundColor: 'red', borderColor: 'red', color: 'white' } },
            cancelButtonProps: { style: { backgroundColor: 'gray', borderColor: 'gray', color: 'white' } },
        });
    };
    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<UserDeleteOutlined />} onClick={handleCancelFriend}>
                Huỷ kết bạn
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout className="min-h-screen bg-gray-100">
            <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
                <div className="flex items-center">
                    <img src="../../../src/assets/img/logo-f88d9dda.png" alt="Logo" className="h-6 w-auto ml-7" />
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
                        src="https://s3-alpha-sig.figma.com/img/81e0/0e97/923240dc8e6914eef791a1821f574e74?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCFLFCm~RvdkpD767ZpgqL8szCwWrdHUXeTxzfH9kAaBGDcO4ANWA3aA5VJ~XcakUNbBvOp-pJJW-gLLfQC7zRg0FKnuiOJN8GYByEhjEJGrqtnaeMEotUcao~NNyKgEC~eKsWzHWBmV1-uu8v2yYgoHLj-077UEwhqZ~AKYgy-pvsq~CRwVrb9QippwJcncBfTuZxQzeeJ0F~4y9VCrWvfjKhZzVvFEiljJSYt84wCrYrhDTqOgOkiNhVk53GVtYadJGHYheEGXbhMDoxSjDmpQQ28Mv5naFRuoJ2MktwSpSkX6~gytAdtWuw4f-uwrwPaRrVhGcmVAa4vc67u9Sg__"
                        alt="Cover"
                        className="w-[1240px] h-[401px] object-cover rounded"
                        preview={false}
                    />
                    <div className="absolute bottom-0 left-14 transform translate-y-1/2">
                        <Avatar size={160} src="https://s3-alpha-sig.figma.com/img/0356/b109/e71c7ec12ed57f1583c27d4a47ae3ab9?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RAUs8xhCEwK9pTZeUTRTG3qfpwKQ4JzZjyMS3~EXdeyb6~HZFAKADisP4RfE7yE8CsRrBAWd7j5GMDqULi~0VhxfBD0~qX0bvzJ77jIelS3MarPVoSRE6kD9sYRaVDOOKoAecOBKw~lP1sPrd7si~SVmcfyR0Krp1kZINc9ISNTe0aZP7i3wBkJ6UWeXDOgnu~XTOzY2B7TQvQWIQVO8wMAtLjWTZJs2q1Og9keL8Iv3nfTQqwoYVojR-2t2opB9~s67UzVPwr9mtCiaq3-xM1LIebiC-2RKXYaARq~-HoG06blHhlRapBQmouR8V2AvzsCklUc9tUZPA6UGlTyivQ__" />
                    </div>
                </div>
                <div className="flex justify-between mt-9 pl-[250px] pr-4">
                    <div>
                        <h1 className="text-3xl font-bold">Nguyen Ngoc</h1>
                        <p className="text-gray-600">@Ngoc_9x_VIP</p>
                    </div>
                    <div className="flex space-x-2">
                        {isFriend ? (
                            <>
                                <Button type="primary" className="bg-yellow-500 border-none text-black">
                                    <i className="fa-solid fa-message"></i>
                                    <span className="ml-2">Nhắn tin</span>
                                </Button>
                                <Dropdown overlay={menu} placement="bottomRight">
                                    <Button className="border-gray-300">
                                        <i className="fa-solid fa-user-check"></i>
                                        <span className="ml-2">Bạn bè</span>
                                    </Button>
                                </Dropdown>


                            </>
                        ) : isAddingFriend ? (
                            <Button type="primary" className="bg-yellow-500 border-none text-black">
                                <i className="fa-solid fa-user-plus"></i>
                                <span className="ml-2">Đang chờ xác nhận</span>
                            </Button>
                        ) : (
                            <Button type="primary" className="bg-yellow-500 border-none text-black" onClick={handleAddFriend}>
                                <i className="fa-solid fa-user-plus"></i>
                                <span className="ml-2">Thêm bạn bè</span>
                            </Button>
                        )}
                        {!isAddingFriend && (
                            <Button className="border-gray-300" onClick={handleFollowToggle} style={{ display: isFriend ? 'none' : 'inline-block' }}>
                                <i className={`fa-solid ${isFollowing ? 'fa-user-minus' : 'fa-folder-plus'}`}></i>
                                <span className="ml-2">
                                    {isFollowing ? 'Đang theo dõi' : 'Theo dõi'}
                                </span>
                            </Button>
                        )}
                    </div>
                </div>
                <Divider
                    className="my-4"
                />
                <div className='flex flex-col items-center justify-center'>
                    <Tabs defaultActiveKey="2" className="mt-6 w-full max-w-2xl mx-auto">
                        <TabPane tab="Bài viết" key="1">
                            {/* Nội dung bài viết */}
                        </TabPane>
                        <TabPane tab="Bạn bè" key="2">
                            <div className='w-[650px] h-auto border rounded-[11px] pt-[33px] pl-[24px] pr-[24px] pb-[33px]'>
                                <div className='flex justify-between'>
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
                                            {Array(4).fill().map((_, i) => (
                                                <div key={i} className="flex items-center space-x-4">
                                                    <Avatar shape="square" size={70} src="https://s3-alpha-sig.figma.com/img/07bc/9e85/91f8f1e93a89063f7339a6afce27c875?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jn2GmxIqrshOCXdpYoMN9bLDm6AAG2079QwFeD6o0HXMCE4CKXOJ9TTXweOVUnBnD6YP5NSx2KyI6cOLQ91NbZrLuFaTTD2mguP~9v56kwWPfQazkuMKQYx9H0x2n2alpWkJajPqEN-8HsqVAudztBTheTe612UzSy3vNF1a7tLUmC81URvRAsfaZsxJrAKg7RoUkT0fZStRGef47W63M2CeafhJzDgBN6oM1f1mk8FYP~QWZ8oFnuaMRTlSFCHj6kgwT04jnu4Ph3eoIVqAXITlzc2MMUZeKH~48i9UcIZIcRjx1ZHA~Iud9ISQZ-NLNkTTHYKl6AlnAXfsJsPGFA__" />
                                                    <div>
                                                        <h3 className="text-lg font-medium">Lê Tuấn Anh</h3>
                                                        <Button type="primary" className="bg-yellow-500 border-none mt-2">
                                                            <i class="fa-solid fa-user-plus"></i>
                                                            <span className="ml-2">Kết bạn</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Bạn chung" key="2">
                                        <div className="grid grid-cols-2 gap-4">
                                            {Array(4).fill().map((_, i) => (
                                                <div key={i} className="flex items-center space-x-4">
                                                    <Avatar size={60} src="https://via.placeholder.com/60" />
                                                    <div>
                                                        <h3 className="text-lg font-medium">Lê Tuấn Anh</h3>
                                                        <Button type="primary" className="bg-yellow-500 border-none mt-2">Kết bạn</Button>
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
    );
}
