import React, { Component } from 'react'
import classNames from 'classnames'
import { Row, MiddleColumn } from '../components/Grid'

class Section extends Component {
  render() {
    return (
      <div className={classNames(this.props.className, 'margin-big-vertical')}>
        {this.props.children}
      </div>
    )
  }
}

export class DarkSection extends Section {
  render() {
    return (
      <div
        className={classNames(
          this.props.className,
          'bg-white-dark padding-big-bottom'
        )}
      >
        <Row>{this.props.children}</Row>
      </div>
    )
  }
}

export class GreenSection extends Section {
  render() {
    return (
      <div
        className={classNames(
          this.props.className,
          'bg-white-dark-example padding-big-bottom'
        )}
        style={{
          background: 'rgba(235,251,225,0.9)',
          borderTop: '#cad9bf',
          borderBottom: '#cad9bf',
        }}
      >
        <Row>{this.props.children}</Row>
      </div>
    )
  }
}

export class SectionTitle extends Component {
  render() {
    const { children, ...props } = this.props
    return (
      <Row>
        <MiddleColumn mdMarginInColumns={1} {...props}>
          <h2>{children}</h2>
        </MiddleColumn>
      </Row>
    )
  }
}

export class Panel extends Component {
  render() {
    return (
      <div
        className={classNames(
          this.props.className,
          'panel panel-default padding-medium-top padding-medium-bottom'
        )}
      >
        <div className="panel-body text-center">{this.props.children}</div>
      </div>
    )
  }
}

export default Section
