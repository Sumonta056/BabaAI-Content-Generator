import React from "react";
import { Check } from "lucide-react";
const PlanCard = ({
  title,
  description,
  price,
  features,
  buttonText,
  href,
}: any) => (
  <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 bg-white">
    <div className="p-6">
      <h2 className="text-xl leading-6 font-bold text-slate-900">{title}</h2>
      <p className="mt-2 text-base text-slate-700 leading-tight">
        {description}
      </p>
      <p className="mt-8">
        <span className="text-4xl font-bold text-slate-900 tracking-tighter">
          {price}
        </span>
        <span className="text-base font-medium text-slate-500">/monthly</span>
      </p>
      <a
        href={href}
        className="mt-8 block w-full bg-rose-600 rounded-md py-2 text-sm font-semibold text-white text-center"
      >
        {buttonText}
      </a>
    </div>
    <div className="pt-6 pb-8 px-6">
      <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
        What's included
      </h3>
      <ul role="list" className="mt-4 space-y-3">
        {features.map((feature: any, index: any) => (
          <li key={index} className="flex space-x-3">
            <Check className="flex-shrink-0 h-5 w-5 text-green-400" />
            <span className="text-base text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default PlanCard;
