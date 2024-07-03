import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../common/headerSlice";
import { addNewLead } from "../leadSlice";
import InputText from "@/components/input/input-text";
import TextArea from "@/components/input/text-area";
import ErrorText from "@/components/typography/error-text";
import { Lead } from "@/helper/types";


interface Props {
    closeModal: () => void;
    extraObject : any
}

const INITIAL_LEAD_OBJ: Lead = {
    first_name: "",
    last_name: "",
    email: "",
    avatar : "",
    description: "",
};

function AddLeadModalBody({ closeModal }: Props) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [leadObj, setLeadObj] = useState<Lead>(INITIAL_LEAD_OBJ);

    const saveNewLead = () => {
        if (leadObj.first_name.trim() === "") return setErrorMessage("First Name is required!");
        else if (leadObj.email.trim() === "") return setErrorMessage("Email id is required!");
        else {
            const newLeadObj : Lead = {
                id: 7,
                email: leadObj.email,
                first_name: leadObj.first_name,
                last_name: leadObj.last_name,
                description: leadObj.description,
                avatar: "https://reqres.in/img/faces/1-image.jpg"
            };
            dispatch(addNewLead({ newLeadObj }));
            dispatch(showNotification({ message: "New Lead Added!", status: 1 }));
            closeModal();
        }
    };

    const updateFormValue = (updateType:string, value: string) => {
        setErrorMessage("");
        setLeadObj({ ...leadObj, [updateType]: value });
    };

    return (
        <>
            <InputText type="text" defaultValue={leadObj.first_name} updateType="first_name" containerStyle="mt-4" labelTitle="First Name" updateFormValue={updateFormValue} />

            <InputText type="text" defaultValue={leadObj.last_name} updateType="last_name" containerStyle="mt-4" labelTitle="Last Name" updateFormValue={updateFormValue} />

            <InputText type="email" defaultValue={leadObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue} />

            <TextArea defaultValue={leadObj.description} updateType="description" containerStyle="mt-4" labelTitle="Description" updateFormValue={updateFormValue} />

            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
            </div>
        </>
    );
}

export default AddLeadModalBody;
