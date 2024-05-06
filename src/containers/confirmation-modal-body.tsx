import { CONFIRMATION_MODAL_CLOSE_TYPES } from '@/helper/app-constants';
import { useAppDispatch } from '@/lib/hooks';
import { deleteLead } from '@/features/leads/leadSlice';
import { showNotification } from '@/features/common/headerSlice';


interface Props {
    extraObject?: any;
    closeModal: () => void;
}

function ConfirmationModalBody({ extraObject, closeModal }: Props) {
    const dispatch = useAppDispatch();

    const { message, type, index } = extraObject;

    const proceedWithYes = async () => {
        if (type === CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE) {
            // positive response, call api or dispatch redux function
            dispatch(deleteLead({ index }));
            dispatch(showNotification({ message: "Lead Deleted!", status: 1 }));
        }
        closeModal();
    };

    return (
        <>
            <p className='text-xl mt-8 text-center'>
                {message}
            </p>

            <div className="modal-action mt-12">
                <button className="btn btn-outline" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary w-36" onClick={() => proceedWithYes()}>Yes</button>
            </div>
        </>
    );
}

export default ConfirmationModalBody;
