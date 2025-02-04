import React from "react";
import PropTypes from "prop-types";
import Translate from "react-translate-component";
import {Button} from "graphene-ui-style-guide";
import counterpart from "counterpart";

export default function WalletBlockSelection(props) {
    return (
        <div
            className="wallet-block-registration"
            onClick={props.onChangeActive}
        >
            <div className="overflow-bg-block show-for-small-only">
                <span className="content" />
            </div>
            <Translate
                content="registration.securityKey"
                component="p"
                className={`model-option security-key ${
                    !props.active ? "inactive-text" : ""
                }`}
            />
            <Translate
                content="registration.securityWalletModel"
                component="p"
                className={`model-option-value option-border ${
                    !props.active ? "inactive-text" : ""
                }`}
            />
            <Translate
                content="registration.loginByKey"
                component="p"
                className={`model-option ${
                    !props.active ? "inactive-text" : ""
                }`}
            />
            <Translate
                content="registration.walletLoginByValue"
                component="p"
                className={`model-option-value option-border ${
                    !props.active ? "inactive-text" : ""
                }`}
            />
            <Translate
                content="registration.backUpRestoreKey"
                component="p"
                className={`model-option ${
                    !props.active ? "inactive-text" : ""
                }`}
            />
            <Translate
                content="settings.yes"
                component="p"
                className={`model-option-value ${
                    !props.active ? "inactive-text" : ""
                }`}
            />

            {props.active ? (
                <Button onClick={props.onSelect} type="primary">
                    {counterpart.translate("registration.continue")}
                </Button>
            ) : (
                <Button>{counterpart.translate("registration.select")}</Button>
            )}
        </div>
    );
}

WalletBlockSelection.propTypes = {
    active: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    onChangeActive: PropTypes.func.isRequired
};
