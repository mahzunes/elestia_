"use client";
import ContactForm from "@/components/ContactForm";
import Content from "@/components/Content";
import Contenttree from "@/components/Contenttree";
import Contenttwo from "@/components/Contenttwo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reference from "@/components/Reference";
import WorkContent from "@/components/WorkContent";

import React from "react";

const Home = () => {
  return (
    <>
      <Content></Content>
      <Reference></Reference>
      <WorkContent></WorkContent>
      <Contenttwo></Contenttwo>
      <Contenttree></Contenttree>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
};

export default Home;
