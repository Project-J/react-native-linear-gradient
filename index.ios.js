/**
 * @providesModule LinearGradient
 * @flow
 */

'use strict';

var React = require('react-native');
var { requireNativeComponent, processColor } = React;
var NativeMethodsMixin = require('NativeMethodsMixin');
var NativeLinearGradient = requireNativeComponent('BVLinearGradient', null);

var LinearGradient = React.createClass({
  mixins: [NativeMethodsMixin],
  render: function() {
    var { colors, ...otherProps } = this.props;
    return (
      <NativeLinearGradient {...otherProps} colors={colors.map(processColor)} />
    );
  }
});

module.exports = LinearGradient;
