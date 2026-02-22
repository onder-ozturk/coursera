import React from "react";
import InstructorContent from "./InstructorContent";

// Generate static params for static export
export function generateStaticParams() {
  return [{ id: "~110976035" }];
}

type Params = Promise<{ id: string }>;

export default async function InstructorPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  return <InstructorContent id={id} />;
}
