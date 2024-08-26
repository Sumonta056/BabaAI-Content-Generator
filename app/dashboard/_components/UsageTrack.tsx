"use client";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const router = useRouter();
  const GetData = async () => {
    const result = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    GetTotalUsage(result);
  };

  const GetTotalUsage = (result: any) => {
    let totalUsage: number = 0;
    result.forEach((element: any) => {
      totalUsage += Number(element.aiResponse?.length);
    });
    setTotalUsage(totalUsage);
  };

  useEffect(() => {
    user && GetData();
  }, [user]);

  return (
    <div className="m-5">
      <div className="bg-rose-600 text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits </h2>
        <div className="h-2 bg-red-400 w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: (totalUsage / 10000) * 100 + "%" }}
          ></div>
        </div>
        <h2 className="text-sm mt-2">{totalUsage}/10,000 Credit Used</h2>
      </div>
      <Button
        className="w-full my-3 bg-rose-600"
        onClick={() => {
          router.push("/dashboard/billing");
        }}
      >
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
