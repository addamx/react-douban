import React from 'react'

export default class Collect extends React.Component {
  constructor() {
    super()
  }
  render() {
    let actions = this.props.actions
    let wanna = actions.wanna ? <button>想看</button> : '';
    return (
      <div>
        {wanna}
      </div>
    )
  }
}
