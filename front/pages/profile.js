import React from "react";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import Head from "next/head";

const Profile = () => {
  const followerList = [
    { nickname: "김은태" },
    { nickname: "홍길동" },
    { nickname: "제이슨" },
  ];
  const followingList = [
    { nickname: "김은태" },
    { nickname: "홍길동" },
    { nickname: "제이슨" },
  ];

  return (
    <>
      <Head>
        <title>Profile | Twitter</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
