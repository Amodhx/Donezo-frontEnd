import {Content} from "antd/es/layout/layout";
import {theme} from "antd";

function Notes(){
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
                    Notes
                </div>
            </Content>
        </>


    )
}
export default Notes