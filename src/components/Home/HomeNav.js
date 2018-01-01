import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Tabs } from 'antd-mobile'
import InTheaters from './InTheaters'
import ComingSoon from './ComingSoon'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const tabs = [
      {title: '正在上映'}, {title: '即将上映'}
    ]
    return (
      <div className="home-tabs">
        <Tabs tabs={tabs}>
          <div className="tab" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <InTheaters {...this.props} />
          </div>
          <div className="tab" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <ComingSoon {...this.props} />
          </div>
        </Tabs>
      </div>
    )
  }
}
