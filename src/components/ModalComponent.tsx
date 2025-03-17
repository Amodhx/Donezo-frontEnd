import NoteModel from "../model/NoteModel.ts";
import {Button, Input, Modal, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import {updateNote} from "../reducers/NoteSlices.ts";

function ModalComponent({closeModal,openModal,selectedData}:{
    closeModal?: () => void,
    openModal: boolean,
    selectedData: NoteModel
}){
    const [noteData, setNoteData] = useState(selectedData);
    const [imageFile, setImageFile] = useState<File | null>(selectedData.image);
    const dispatch = useDispatch<AppDispatch>();
    const handleChange = (key: keyof NoteModel, value: string) => {
        setNoteData({...noteData, [key]: value});
    };
    const handleImageUpload = (file: File) => {
        setImageFile(null)
        setImageFile(file);
        return false;
    };
    useEffect(() => {
        setNoteData(selectedData);
        setImageFile(selectedData.image || null);
    }, [selectedData]);
    function handleUpdatingNote(){
        // noteData.image = imageFile;
        console.log(noteData)
        dispatch(updateNote(noteData))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        closeModal()
    }

    return(
        <Modal title="Basic Modal" open={openModal} onOk={handleUpdatingNote}  onCancel={closeModal}>
            <div>
                <Input value={noteData.note_title} placeholder="Title" style={{marginBottom: 10}} onChange={(e) => {
                    handleChange("note_title",e.target.value);
                }}/>
                <Input.TextArea value={noteData.note_content} placeholder="Description" rows={4} style={{marginBottom: 10}}
                                onChange={(e) => {
                                    handleChange("note_content",e.target.value);
                                }}/>
                <Upload
                    beforeUpload={handleImageUpload}
                    showUploadList={{showPreviewIcon: false}}
                    maxCount={1}
                >
                    <Button icon={<UploadOutlined/>}>Upload Image</Button>
                </Upload>
                {imageFile && (
                    <div style={{marginTop: 10}}>
                        <img
                            src={imageFile ? `data:image/png;base64,${imageFile}` : undefined}
                            alt="Uploaded"
                            style={{maxWidth: '100%', maxHeight: 200, borderRadius: 8}}
                        />
                    </div>
                )}
            </div>
        </Modal>
    )
}

export default ModalComponent;