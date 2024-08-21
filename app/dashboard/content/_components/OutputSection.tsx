import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import fontSize from "tui-editor-plugin-font-size";
import "tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import fontSizePlugin from "tui-editor-plugin-font-size";

interface PROPS {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: PROPS) => {
  const editorRef: any = useRef();
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-1 items-center justify-center bg-rose-600">
          <Copy size={20} /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will be displayed here!"
        initialEditType="wysiwyg"
        height="550px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
        plugins={[[fontSizePlugin]]} // Set default font size to 16px
      />
    </div>
  );
};

export default OutputSection;
