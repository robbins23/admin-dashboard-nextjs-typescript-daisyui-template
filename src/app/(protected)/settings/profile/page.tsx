"use client";
import TitleCard from "@/components/cards/title-card";
import { showNotification } from "@/components/features/common/headerSlice";
import InputText from "@/components/input/input-text";
import TextArea from "@/components/input/text-area";
import ToggleInput from "@/components/input/toggle-input";
import { useDispatch } from "react-redux";
import { namespaceTranslation } from "@/helper/i18n";
const t = namespaceTranslation("profile");

function ProfileSettings() {
  const dispatch = useDispatch();

  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: t("Profile Updated"), status: 1 }));
  };

  const updateFormValue = (updateType: string, value: any) => {
    console.log(updateType, value);
  };

  return (
    <>
      <TitleCard title={t("Profile Settings")} topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle={t("Name")}
            defaultValue="Alex"
            updateFormValue={updateFormValue}
            updateType={"name"}
          />
          <InputText
            labelTitle={t("Email Id")}
            defaultValue="alex@dashwind.com"
            updateFormValue={updateFormValue}
            updateType={"email"}
          />
          <InputText
            labelTitle={t("Title")}
            defaultValue="UI/UX Designer"
            updateFormValue={updateFormValue}
            updateType={"title"}
          />
          <InputText
            labelTitle={t("Place")}
            defaultValue="California"
            updateFormValue={updateFormValue}
            updateType={"place"}
          />
          <TextArea
            labelTitle={t("About")}
            defaultValue="Doing what I love, part time traveller"
            updateFormValue={updateFormValue}
            updateType={"about"}
          />
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle={t("Language")}
            defaultValue="English"
            updateFormValue={updateFormValue}
            updateType={"language"}
          />
          <InputText
            labelTitle={t("Timezone")}
            defaultValue="IST"
            updateFormValue={updateFormValue}
            updateType={"timezone"}
          />
          <ToggleInput
            labelTitle={t("Sync Data")}
            defaultValue={true}
            updateFormValue={updateFormValue}
            updateType="syncData"
          />
        </div>

        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}
          >
            {t("Update")}
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;
