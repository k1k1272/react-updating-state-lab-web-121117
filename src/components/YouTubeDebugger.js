import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

    changeState = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }
    changeResolution = () => {
      // this.setState({
      //   video: {
      //     ...this.state.video,
      //     resolution: '720p'
      //   }
      // })
    }

    render() {
      return (
        <div>
          <button className="bitrate" onClick={this.changeState}>Change state</button>
          <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
        </div>
      )
    }

}
