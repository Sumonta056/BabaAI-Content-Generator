"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AIModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/Schema";
import moment from "moment";
import { useUser } from "@clerk/nextjs";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const { user } = useUser();
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (template) => template.slug === props.params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const [showAlert, setShowAlert] = useState(false);

  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 10000) {
      setShowAlert(true);
    }
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);
    setAiOutput(result?.response.text());
    await SaveInDb(formData, selectedTemplate?.slug, result?.response.text());
    setLoading(false);
  };

  const SaveInDb = async (formData: any, slug: any, aiOutpu: string) => {
    // Save in db
    const result = await db.insert(AIOutput).values({
      formData: formData,
      aiResponse: aiOutpu,
      templateSlug: slug,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAT: moment().format("DD-MM-YYYY"),
    });

    console.log(result);
  };

  if (showAlert) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">Credit Limit Exceeded</h2>
          <p className="mb-4">
            Your credit limit is over. Please upgrade your plan to continue
            using our services.
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => {
              router.push("/dashboard/billing");
            }}
          >
            Upgrade Plan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-7">
      <Link href={"/dashboard"}>
        <Button className="bg-rose-600 flex gap-1">
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(data: any) => GenerateAIContent(data)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
