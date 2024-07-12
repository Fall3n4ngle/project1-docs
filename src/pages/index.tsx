import React from "react";
import Layout from "@theme/Layout";
import {
  HomePageHero,
  HomePageFeatures,
  HomePageGuides,
  HomePageSupport,
} from "../components/HomePage";

const LandingPage = () => {
  return (
    <Layout>
      <main>
        <HomePageHero />
        <HomePageFeatures />
        <HomePageGuides />
        <HomePageSupport />
      </main>
    </Layout>
  );
};

export default LandingPage;
