import CardLayout from "../components/CardLayout";

const FinancialInformation = () => {
  const bankInformation = [
    { label: "Bank Name", value: "CIB" },
    { label: "IBAN", value: "12346546413216446" },
  ];

  return (
    <div className="p-4">
      <CardLayout
        title="Bank Information"
        fields={bankInformation}
        onEdit={() => console.log("Edit Bank Information")}
      />
    </div>
  );
};

export default FinancialInformation;
