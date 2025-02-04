import React from "react";
import Translate from "react-translate-component";
import PropTypes from "prop-types";
import {Row, Col, Tooltip} from "graphene-ui-style-guide";
import AmountSelector from "../Utility/AmountSelectorStyleGuide";
import AssetSelect from "../Utility/AssetSelect";

class AmountSelector2 extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        assetInput: PropTypes.string,
        asset: PropTypes.string,
        assets: PropTypes.array,
        amount: PropTypes.string,
        disabled: PropTypes.bool,
        onAssetInputChange: PropTypes.func,
        onAmountChange: PropTypes.func,
        onImageError: PropTypes.func,
        onSearch: PropTypes.func,
        imgName: PropTypes.string,
        placeholderAmount: PropTypes.string,
        placeholder: PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        imgName: "unknown",
        placeholderAmount: "0.0",
        placeholder: ""
    };

    constructor(props) {
        super(props);
        this.state = {
            imageError: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            !!this.props.imgName &&
            this.props.imgName !== prevProps.imgName &&
            this.props.imgName !== "unknown"
        ) {
            this.setState({
                imageError: false
            });
        }
    }

    onImageError() {
        this.setState({
            imageError: true
        });
    }

    render() {
        let {
            label,
            assetInput,
            asset,
            assets,
            amount,
            disabled,
            onAssetInputChange,
            onSearch,
            onAmountChange,
            onImageError,
            imgName,
            placeholder,
            placeholderAmount,
            tooltipText
        } = this.props;

        if (this.state.imageError) {
            imgName = "unknown";
        }

        const labelText = (
            <Translate
                className="left-label"
                component="label"
                content={label}
                style={{
                    fontSize: "1.2rem",
                    margin: "0",
                    padding: "0"
                }}
            />
        );

        const assetSelector = (
            <AssetSelect
                placeholder={placeholder}
                showSearch={true}
                value={!!assetInput ? assetInput : undefined}
                onChange={onAssetInputChange}
                assets={assets}
                onSearch={onSearch}
            />
        );

        const image = (
            <img
                style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    marginTop: "0.5rem"
                }}
                onError={this.onImageError.bind(this)}
                src={`${__BASE_URL__}asset-symbols/${imgName.toLowerCase()}.png`}
            />
        );

        const amountSelector = (
            <AmountSelector
                onChange={onAmountChange}
                amount={amount}
                asset={asset}
                assets={[asset]}
                placeholder={placeholderAmount}
                disabled={disabled}
            />
        );

        return (
            <div
                className="amount-selector-2"
                style={{
                    minWidth: "3.5rem",
                    width: "100%"
                }}
            >
                {labelText}
                <Row
                    style={{
                        minWidth: "18rem"
                    }}
                >
                    <Col
                        style={{
                            minWidth: "3.5rem"
                        }}
                        span={5}
                    >
                        {image}
                    </Col>
                    <Col span={19}>
                        <Tooltip placement="top" title={tooltipText}>
                            {assetSelector}
                        </Tooltip>
                        {amountSelector}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AmountSelector2;
