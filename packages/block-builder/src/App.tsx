//导入依赖 
import { Layout, Menu, Button } from 'antd'
import './App.css'
import { useState } from 'react'
import BlockEditor from './BlockEditor'



const Save = () => {
  return <Button type="primary">保存</Button>
}
const generateMenuItem = () => {
  const key = Math.random() + "";
  return {
    key: key,
    label: '块' + key,
    onClick: () => {
      console.log('块', key)
    }
  }
}


export default function () {

  const [secondMenu, setSecondMenu] = useState([
    {
      key: "22",
      label: '块1',
      onClick: () => {
        console.log('块1')
      }
    }
  ]);

  return <>

    <Layout style={{
      height: '100vh',
    }}>
      <Layout.Header
        style={{
          background: 'white'
        }}>
        <Menu
          mode="horizontal"
          style={{
            background: 'white',
          }}
          items={[
            {
              key: "1",
              label: <Save />,
              onClick: () => {
                setSecondMenu(s => [...s, generateMenuItem()])
              },
            },
            {
              key: "2",
              label: '切换块',
              children: secondMenu
            }
          ]}
        >
        </Menu>
      </Layout.Header >
      <Layout.Content>
        <BlockEditor />
      </Layout.Content>
    </Layout >
  </>
}
