import React from 'react'
import { TabBar } from 'antd-mobile'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      selectedTab: this.props.pageId,
    }
  }

  componentDidMount() {
  }

  render() {
    const tabs = [
      {
        id: 'homeTab',
        name: '首页',
        icon: (<svg width="20" height="20"><use xlinkHref="#home"></use></svg>),
        selectedIcon: (<svg width="20" height="20"><use xlinkHref="#home-selected"></use></svg>),
        route: '/'
      },
      {
        id:'rankTab',
        name: '排行榜',
        icon: (<svg width="20" height="20"><use xlinkHref="#rank"></use></svg>),
        selectedIcon: (<svg width="20" height="20"><use xlinkHref="#rank-selected"></use></svg>),
        route: '/rank'
      }
    ]
    return (
      <footer>
        <TabBar
          unselectedTintColor="#333333"
          tintColor="#36a836"
          barTintColor="#ffffff">
          {
            tabs.map((el, index) => (
              <TabBar.Item
                title={el.name}
                key={el.id}
                icon={el.icon}
                selectedIcon={el.selectedIcon}
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
      </footer>
    )
  }
}
