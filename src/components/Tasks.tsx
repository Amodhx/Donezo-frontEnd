import {theme} from "antd";
import {Content} from "antd/es/layout/layout";

function Tasks(){
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return(
        <>
            <Content>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        margin : '10px'
                    }}
                >
                    Tasks
                </div>
            </Content>
        </>


    )
}
export default Tasks