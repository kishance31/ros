import React from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';
import AppConfigs from '../../utils/config';

let PayPalButtonComponent = null;

class PayPalButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showButton: false,
        };
        window.React = React;
        window.ReactDOM = ReactDOM;
    }

    componentDidMount() {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;

        if (isScriptLoaded && isScriptLoadSucceed) {
            PayPalButtonComponent = window.paypal.Buttons.driver("react", { React, ReactDOM });
            this.setState({ showButton: true });
            this.props.toggleOverlay(false);
        }
    }

    componentWillUnmount() {
        if (this.state.showButton) {
            window.paypal.Buttons().close();
            this.setState({
                showButton: false
            })
            this.props.toggleOverlay(false);
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { isScriptLoaded, isScriptLoadSucceed, toggleOverlay } = props;
        if (!state.showButton && isScriptLoaded && isScriptLoadSucceed) {
            PayPalButtonComponent = window.paypal.Buttons.driver("react", {
                React,
                ReactDOM
            });
            toggleOverlay(false);
            return {
                showButton: true,
            };
        }
        return null;
    }

    createOrder = (data, actions) => {
        this.props.toggleOverlay(true);
        return actions.order.create({
            purchase_units: [
                {
                    description: +"Purchase License",
                    amount: {
                        currency_code: "USD",
                        value: this.props.totalPrice
                    }
                }
            ]
        });
    };

    onApprove = (data, actions) => {
        const { payPurchaseLicenses } = this.props;
        actions.order.capture().then(details => {
            this.setState({ showButton: false });
            payPurchaseLicenses(data);
        });
    };

    onCancel = () => {
        this.props.toggleOverlay(false)
    }

    render() {
        const { showButton } = this.state;

        return (
            <>
                {
                    showButton ? (
                        // <button className="btn_blue">
                        <span>
                            <PayPalButtonComponent
                                createOrder={this.createOrder}
                                onApprove={this.onApprove}
                                onCancel={this.onCancel}
                            />
                        </span>
                        // </button>
                    ) : null
                }
            </>
        )
    }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${AppConfigs.paypalConfig.client.sandbox}`)(PayPalButton)