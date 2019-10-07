import trackUploadStateHoc from "../../components/uploadFile/trackUploadStateHoc";
import uploadFileHoc from "../../components/uploadFile/uploadFileHoc";
import uploadFilePresenter from "../../components/uploadFile/uploadFilePresenter";
import uploadFileOptions from "./options";
import compose from "lodash/fp/compose";

const uploadFileContainer = compose(
    trackUploadStateHoc,
    uploadFileHoc(uploadFileOptions)
);

const UploadFile = uploadFileContainer(uploadFilePresenter);

export default UploadFile;