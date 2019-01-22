//HOC === Higher Order Component === decorator
import React from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) => {
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) =>
      this.setState({
        openItemId: openItemId === this.state.openItemId ? null : openItemId
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }

  DecoratedComponent.propTypes = {
    OriginalComponent: PropTypes.element
  }

  return DecoratedComponent
}
