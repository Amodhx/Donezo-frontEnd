import {Drawer} from "antd";
import {DataType} from "./Tasks.tsx";

function DrawerComponent({closeModal,openModal,selectedData}: {closeModal?: () => void , openModal : boolean,selectedData:DataType }) {
    return(
        <>
            <Drawer size={"large"} title="Basic Drawer" onClose={closeModal} open={openModal}>
                <p>{selectedData.status}</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}
export default DrawerComponent