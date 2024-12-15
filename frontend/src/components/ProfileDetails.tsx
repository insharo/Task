import CardLayout from "./CardLayout";
import EditableCard from "./EditableCard";

const contactInformation = [
  { label: "Personal Email", value: "john.smith@gmail.com" },
  { label: "Mobile", value: "011223344556" },
];

const emergencyContacts = [
  { label: "Emergency Contact Person Name", value: "John John" },
  { label: "Emergency Relation", value: "Father" },
  { label: "Emergency Phone", value: "011224477885" },
];

const addressDetails = [
  { label: "Country", value: "Egypt" },
  { label: "City", value: "Cairo" },
  { label: "Postal Code", value: "11728" },
  { label: "Building", value: "7" },
  { label: "Street", value: "Street 127" },
  { label: "Floor No.", value: "7" },
  { label: "Apartment", value: "72" },
];

const drivingLicenseDetails = [
  { label: "Driving License", value: "Yes" },
  { label: "Driving License Type", value: "C1E" },
  { label: "Driving License expiry date", value: "01 / 04 / 2025" },
];

const militaryStatus = [
  { label: "Require Travel Permit", value: "Yes" },
  { label: "Military Status", value: "Exempted" },
  {
    label: "Document",
    value: (
      <a
        href="/filename1.docx"
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        filename1.docx
      </a>
    ),
  },
];
const ProfileDetails = ({ user, refetch }: { user: any; refetch: any }) => (
  <div className="flex flex-col gap-4 w-full">
    <EditableCard
      user={user}
      // onEdit={() => console.log("Edit button clicked")}
      refetch={refetch}
    />

    <CardLayout
      onEdit={() => {}}
      title="Contact Information"
      fields={contactInformation}
    />
    <CardLayout
      onEdit={() => {}}
      title="Emergency Contacts"
      fields={emergencyContacts}
    />
    <CardLayout
      onEdit={() => {}}
      title="Address Details"
      fields={addressDetails}
    />
    <CardLayout
      onEdit={() => {}}
      title="Driving License Details"
      fields={drivingLicenseDetails}
    />
    <CardLayout
      onEdit={() => {}}
      title="Military Status"
      fields={militaryStatus}
    />
  </div>
);

export default ProfileDetails;
