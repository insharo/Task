import React from "react";

interface DetailCardProps {
  title: string;
  fields: { label: string; value: string | JSX.Element }[];
  onEdit?: () => void;
}

const CardLayout: React.FC<DetailCardProps> = ({ title, fields, onEdit }) => (
  <div className="bg-white shadow-custom rounded-3xl w-full p-6">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      {onEdit && (
        <button
          className="text-white px-[38.5px] py-[8px] rounded-md bg-[#0058A9]"
          onClick={onEdit}
        >
          Edit
        </button>
      )}
    </div>
    <div className="grid grid-cols-3 gap-6 mt-6">
      {fields.map((field, index) => (
        <div key={index}>
          <p className="text-sm text-gray-500">{field.label}</p>
          <p className="font-medium">{field.value || "-"}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CardLayout;
