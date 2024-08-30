import React from "react";
import { Copy } from "lucide-react";
import templateData from "@/app/(data)/Templates"; // Import the template data

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const limitWords = (text: string, wordLimit: number) => {
  return text.split(" ").slice(0, wordLimit).join(" ") + "...";
};

const OutputTable = ({ filteredData }: { filteredData: any[] }) => {
  return (
    <div>
      <Table className="min-w-full bg-white border border-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Template</TableHead>
            <TableHead className="text-center">AI Response</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">Timestamp</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((item: any) => {
            const template = templateData.find(
              (t) => t.slug === item.templateSlug
            );
            const name = template ? template.name : "Unknown";
            const icon = template ? template.icon : "";
            const category = template ? template.category : "Unknown";

            return (
              <TableRow key={item.id}>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src={icon}
                      alt={name}
                      style={{
                        width: "17px",
                        height: "17px",
                        marginRight: "5px",
                      }}
                    />
                    <h1>{name}</h1>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {limitWords(item.aiResponse, 11)}
                </TableCell>
                <TableCell className="text-center">{category}</TableCell>
                <TableCell className="text-center">{item.createdAT}</TableCell>
                <TableCell align="center">
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(item.aiResponse)
                    }
                  >
                    <Copy color="red" />
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default OutputTable;
