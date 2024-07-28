"use client";

import { casesData } from "@/utils/data/casesData";
import { useRouter } from "next/navigation";

const Case = ({ params }) => {
  // const router = useRouter();
  const { id } = params;
  const caseData = casesData.find((e) => e.id === id);

  console.log("id", typeof id);
  console.log("casesData", casesData);

  // if (!id) {
  //   return <p>Case not found</p>;
  // }

  return (
    <div>
      <h1>Hello</h1>
      <p>{caseData.id}</p>
      <p>{caseData.description}</p>
    </div>
  );
};

export default Case;
