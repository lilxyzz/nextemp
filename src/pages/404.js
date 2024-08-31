import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Awesome Portfolio Built with Nextjs | 404 Page </title>
      </Head>
      <TransitionEffect />
      <main className="h-[100vh] w-full dark:bg-dark ">
        <Layout className="relative !bg-transparent !pt-16 flex flex-col items-center justify-center">
          <AnimatedText text="404" className=" " />
          <AnimatedText text="Page Not Found." className=" !text-7xl " />
          <Link
            href="/"
            className="self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        "
          >
            Go To Home
          </Link>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
