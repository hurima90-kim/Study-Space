import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import Head from "next/head";

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Profile | Twitter</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
