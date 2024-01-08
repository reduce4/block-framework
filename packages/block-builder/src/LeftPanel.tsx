import { Layout } from "antd";

export default function () {
    return <Layout.Sider style={{ background: 'white' }} >
        <Layout style={{ height: "100%" }}>
            <Layout.Sider width={60} style={{ background: "#272727", color: 'white' }}></Layout.Sider>
            <Layout.Content style={{ borderRight: "1px solid white" }}>content</Layout.Content>
        </Layout>
    </Layout.Sider>

}