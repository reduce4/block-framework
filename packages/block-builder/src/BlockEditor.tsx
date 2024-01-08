import { Layout } from 'antd'
import LeftPanel from './LeftPanel'

export default function BlockEditor() {
    return <>
        <Layout style={{
            height: '100%'
        }}>
            <LeftPanel />
            <Layout.Content>ad</Layout.Content>
        </Layout>
    </>
}