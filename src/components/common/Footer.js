import React from 'react'
import { TabBar } from 'antd-mobile'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      selectedTab: 'homeTab',
    }
  }

  componentDidMount() {
  }

  render() {
    const tabs = [
      {
        id: 'homeTab',
        name: '首页',
        icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        route: '/'
      },
      {
        id:'rankTab',
        name: '排行榜',
        icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        route: '/search'
      }
    ]
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white">
          {
            tabs.map((el, index) => (
              <TabBar.Item
                title={el.name}
                key={el.id}
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${el.icon}) center center /  21px 21px no-repeat`
                }}
                />}
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${el.selectedIcon}) center center /  21px 21px no-repeat`
                }}
                />}
                selected={this.state.selectedTab === el.id}
                onPress={() => {
                  this.setState({
                    selectedTab: el.name,
                  });
                  this.props.history.push(el.route)
                }}
              >
              </TabBar.Item>
            ))
          }
        </TabBar>
      </div>
    )
  }
}
