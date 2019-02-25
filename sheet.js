/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
*/
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const createReactClass = require('create-react-class');
const { Animated, StyleSheet, View, Dimensions } = ReactNative;

const DEFAULT_BOTTOM = -300;
const DEFAULT_ANIMATE_TIME = 300;

module.exports = createReactClass({
    getInitialState: function () {
        return {
            bottom: new Animated.Value(DEFAULT_BOTTOM),
        };
    },
    componentWillReceiveProps: function (newProps) {
        return Animated.timing(this.state.bottom, {
            toValue: newProps.visible ? 0 : DEFAULT_BOTTOM,
            duration: DEFAULT_ANIMATE_TIME,
        }).start();
    },

    render: function () {
        return (
            <Animated.View style={{ bottom: this.state.bottom }}>
                {this.props.children}
            </Animated.View>
        );
    },
});
