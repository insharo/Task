import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../graphql/queries";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../../Types";

interface EditableCardProps {
  user: User;
  refetch: () => void;
}

const EditableCard: React.FC<EditableCardProps> = ({ user, refetch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER);
  // console.log(user);
  const handleEdit = () => {
    setValue("title", user.title);
    setValue("firstName", user.firstName);
    setValue("fatherName", user.fatherName);
    setValue("grandfatherName", user.grandfatherName);
    setValue("familyName", user.familyName);
    setValue("localizedFirstName", user.localizedName?.firstName);
    setValue("localizedFatherName", user.localizedName?.fatherName);
    setValue("localizedGrandFatherName", user.localizedName?.grandfatherName);
    setValue("localizedFamilyName", user.localizedName?.familyName);
    setValue("dateOfBirth", user.dateOfBirth);
    setValue("gender", user.gender);
    setValue("dependants", user.dependants);
    setValue("nationality", user.nationalities?.[0]?.country?.name || "");
    setValue(
      "additionalNationality",
      user.nationalities?.[1]?.country?.name || ""
    );
    setValue("nationalIdNumber", user.nationalId?.idNumber);
    setValue("nationalIdExpiry", user.nationalId?.expiryDate);
    setIsEditing(true);
  };

  const onSubmit: SubmitHandler<any> = async (formData) => {
    try {
      const variables = {
        userId: 1,
        input: {
          title: formData.title,
          firstName: formData.firstName,
          fatherName: formData.fatherName,
          grandfatherName: formData.grandfatherName,
          familyName: formData.familyName,
          dateOfBirth: formData.dateOfBirth,
          gender: formData.gender,
          dependants: parseInt(formData.dependants, 10),
          nationalId: {
            idNumber: formData.nationalIdNumber,
            expiryDate: formData.nationalIdExpiry,
          },
          localizedName: {
            firstName: formData.localizedFirstName,
            fatherName: formData.localizedFatherName,
            grandfatherName: formData.localizedGrandFatherName,
            familyName: formData.localizedFamilyName,
          },
          nationalities: [
            formData.nationalityId1
              ? {
                  country: {
                    id: formData.nationalityId1.toLocaleLowerCase(),
                    name: formData.nationalityId1,
                  },
                  countryId: parseInt(formData.nationalityId1, 10) || 10,
                }
              : null,
            formData.nationalityId2
              ? {
                  country: {
                    id: formData.nationalityId2.toLocaleLowerCase(),
                    name: formData.nationalityId2,
                  },
                  countryId: parseInt(formData.nationalityId2, 10) || 11,
                }
              : null,
          ].filter(Boolean),
        },
      };
      // console.log(variables);

      await updateUser({ variables });
      refetch();
      setIsEditing(false);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className="bg-white rounded-3xl w-full p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Basic Information</h2>
        {!isEditing && (
          <button
            className="text-white px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-700"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 grid grid-cols-3 gap-6"
        >
          <div>
            <label className="text-sm text-gray-500">National ID Number</label>
            <input
              className="w-full p-2 border rounded"
              {...register("nationalIdNumber")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">National ID Expiry</label>
            <input
              className="w-full p-2 border rounded"
              {...register("nationalIdExpiry")}
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Title</label>
            <input
              className="w-full p-2 border rounded"
              {...register("title")}
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">First Name</label>
            <input
              className="w-full p-2 border rounded"
              {...register("firstName")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Father Name</label>
            <input
              className="w-full p-2 border rounded"
              {...register("fatherName")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Grandfather Name</label>
            <input
              className="w-full p-2 border rounded"
              {...register("grandfatherName")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Family Name</label>
            <input
              className="w-full p-2 border rounded"
              {...register("familyName")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">الأسم الأول</label>
            <input
              className="w-full p-2 border rounded"
              {...register("localizedFirstName")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">اسم الأب</label>
            <input
              className="w-full p-2 border rounded"
              {...register("localizedFatherName")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">اسم الجد</label>
            <input
              className="w-full p-2 border rounded"
              {...register("localizedGrandFatherName")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">اللقب / اسم العائلة</label>
            <input
              className="w-full p-2 border rounded"
              {...register("localizedFamilyName")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Gender</label>
            <input
              className="w-full p-2 border rounded"
              {...register("gender")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Nationality</label>
            <input
              className="w-full p-2 border rounded"
              {...register("nationality")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">
              Additional Nationality
            </label>
            <input
              className="w-full p-2 border rounded"
              {...register("additionalNationality")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Passport Number</label>
            <input
              className="w-full p-2 border rounded"
              {...register("passportNumber")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Passport Issue Date</label>
            <input
              className="w-full p-2 border rounded"
              {...register("passportIssueDate")}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">
              Passport Expiry Date
            </label>
            <input
              className="w-full p-2 border rounded"
              {...register("passportExpiryDate")}
            />
          </div>

          <div className="col-span-3 flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="text-gray-600 px-4 py-2 rounded-md border"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-3 gap-6 mt-6 text-gray-800">
          <div>
            <p className="text-sm text-gray-500">National ID Number</p>
            <p className="font-medium">{user.nationalId?.idNumber || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">National ID Expiring Date</p>
            <p className="font-medium">{user.nationalId?.expiryDate || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Title</p>
            <p className="font-medium">{user.title || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">First Name</p>
            <p className="font-medium">{user.firstName || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Father Name</p>
            <p className="font-medium">{user.fatherName || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Grandfather Name</p>
            <p className="font-medium">{user.grandfatherName || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Family Name</p>
            <p className="font-medium">{user.familyName || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">الأسم الأول</p>
            <p className="font-medium">
              {user.localizedName?.firstName || "-"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">اسم الأب</p>
            <p className="font-medium">
              {user.localizedName?.fatherName || "-"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">اسم الجد</p>
            <p className="font-medium">
              {user.localizedName?.grandfatherName || "mohamed"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">اللقب / اسم العائلة</p>
            <p className="font-medium">
              {user.localizedName?.familyName || "ahmed"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="font-medium">{user.dateOfBirth || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-medium">{user.gender || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Nationality</p>
            <p className="font-medium">
              {user.nationalities?.[0]?.country.name || "-"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Additional Nationality</p>
            <p className="font-medium">
              {user.nationalities?.[1]?.country.name || "-"}
            </p>
          </div>
          <div className="w-[]">
            <p className="text-sm text-gray-500">Passport Number</p>
            <p className="font-medium">{user.passport?.number || "-"}</p>
          </div>
          <div className="w-[]">
            <p className="text-sm text-gray-500">Passport Issue Date</p>
            <p className="font-medium">{user.passport?.issueDate || "-"}</p>
          </div>
          <div className="w-[]">
            <p className="text-sm text-gray-500">Passport Expiry Date</p>
            <p className="font-medium">{user.passport?.expiryDate || "-"}</p>
          </div>
        </div>
      )}
      {error && (
        <p className="text-red-500 mt-4">
          An error occurred while updating: {error.message}
        </p>
      )}
    </div>
  );
};

export default EditableCard;
