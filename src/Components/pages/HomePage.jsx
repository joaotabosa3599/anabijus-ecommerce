import React from "react";
import ExclusiveSection from "../ExclusiveSection";
import TestemunhasList from "../TestemunhasList";
import Header from "../Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <ExclusiveSection />
      <TestemunhasList />
    </>
  );
}
