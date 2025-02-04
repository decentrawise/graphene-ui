import React from "react";
import LoadingIndicator from "../LoadingIndicator";
import counterpart from "counterpart";
import {findDOMNode} from "react-dom";
import PropTypes from "prop-types";
import {Button} from "graphene-ui-style-guide";

/** This component gives a convenient way to indicate loading.
 *
 *  Use props as follows:
 *          id|style                 optional, html standard for container element
 *          className                optional, html standard for container element, default=button
 *          type                     optional, html standard for container element, default=button
 *          onClick                  function handle  onClick handler for the underlying button
 *          caption                  str  text within the button
 *          loadingType              str  style of the loading animation, default inside-feedback
 *                                      inside-feedback
 *                                          Displays a small loading indicator and the loadingMessage instead of the caption
 *                                          while loading. Button width is fixated even if the feedback text is too long
 *                                      inside
 *                                          Displays only a loading indicator while loading
 *                                      right-feedback
 *                                          Displays a loading indicator right next to the button and the loadingMessage
 *                                          next to it. Button caption remains unchanged.
 *          loadingMessage           str  default loadingMessage, can be overwritten by providing a string in the feedback call
 *          isLoading                boolean  indicates if the button should show loading or normal state
 *
 *  Example usage:
 *
 *  _loadButton(event, feedback) {
 *      event.preventDefault();
 *      try {
 *          feedback("Loading ...");  // this can also be a translation string
 *          // do someting that can cause an exception
 *          self.someInSyncStuff();
 *
 *          self.getSomeAsyncPromise().then(res => {
 *              // react on it, setState, whatnot
 *          }).catch(err => {
 *              // error handling
 *          }).finally(()=>{
 *              // tell button to stop loading, no argument
 *              feedback()
 *          });
 *      } catch (err) {
 *          // some other error handling
 *          // tell button to stop loading, since the promise was never entered
 *          feedback();
 *      }
 *  }
 *
 *  render() {
 *      return (
 *           <LoadingButton
 *               style={{
 *                   float: "right"
 *               }}
 *               id="load"
 *               caption="Load it"  // this can also be a translation string
 *               onClick={this._loadButton.bind(this)}
 *           />
 *
 *    @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */
class LoadingButton extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        type: PropTypes.string,
        style: PropTypes.object,
        //
        caption: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        //
        loadingType: PropTypes.string,
        loadingMessage: PropTypes.string,
        //
        isLoading: PropTypes.bool
    };

    static defaultProps = {
        style: {},
        isLoading: null,
        className: "button",
        type: "button",
        loadingType: "inside-feedback",
        loadingMessage: null
    };

    constructor(props) {
        super(props);
        // initialize state (do not use setState method!)
        this.state = {
            loading:
                this.props.isLoading == null ? false : this.props.isLoading,
            overrideMessage: null,
            loadingButtonWidth: null
        };
        this.processingOnClick = false;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.isLoading !== this.props.isLoading ||
            nextState.loading !== this.state.loading
        );
    }

    _feedback(done = null, message = null) {
        if (done == null) {
            this.setState({
                overrideMessage: null,
                loading: false
            });
            this.processingOnClick = false;
        } else if (typeof done === "string") {
            this.setState({
                overrideMessage: done
            });
        } else if (typeof done === "boolean") {
            if (!done) {
                this.setState({
                    overrideMessage: message
                });
            } else {
                this.setState({
                    loading: false
                });
                this.processingOnClick = false;
            }
        }
    }

    _onClick(event) {
        this.processingOnClick = true;
        if (this.state.loading) {
            return true;
        }
        if (this.props.onClick != null) {
            // persist button width
            this.setState({
                loadingButtonWidth: findDOMNode(
                    this.loadingButton
                ).getBoundingClientRect().width,
                loading: true
            });
            event.persist();
            this.props.onClick(event, this._feedback.bind(this));
            return true;
        }
    }

    _isLoading() {
        return this.processingOnClick
            ? this.state.loading
            : this.props.isLoading == null
            ? false
            : this.props.isLoading;
    }

    render() {
        let caption = this.props.caption || this.props.text || null;
        if (typeof caption === "string" && caption.indexOf(".") > 0) {
            caption = counterpart.translate(caption);
        }
        if (caption != null && caption.trim() == "") {
            caption = null;
        }

        let loadingMessage = this.props.loadingMessage || null;
        if (
            this.state.overrideMessage != null &&
            this.state.overrideMessage.trim() != ""
        ) {
            loadingMessage = this.state.overrideMessage;
        }
        if (
            typeof loadingMessage === "string" &&
            loadingMessage.indexOf(".") > 0
        ) {
            loadingMessage = counterpart.translate(loadingMessage);
        }
        if (loadingMessage != null && loadingMessage.trim() == "") {
            loadingMessage = null;
        }
        let leftElement = null;
        let rightElement = null;
        let fixButtonWidth = false;
        let buttonInner = <span>{caption}</span>;

        let loadingState = this._isLoading();

        switch (this.props.loadingType) {
            case "inside":
                if (loadingState) {
                    fixButtonWidth = true;
                    buttonInner = (
                        <span style={{margin: "auto", display: "inline-block"}}>
                            <LoadingIndicator type={"circle-small"} />
                        </span>
                    );
                }
                break;
            case "inside-feedback":
                if (loadingState) {
                    fixButtonWidth = true;
                    buttonInner = (
                        <span style={{float: "left"}}>
                            <span
                                style={{
                                    position: "absolute",
                                    whiteSpace: "nowrap",
                                    marginLeft: "12px"
                                }}
                            >
                                {loadingMessage}
                            </span>
                            <span>
                                <LoadingIndicator type={"circle-small"} />
                            </span>
                        </span>
                    );
                }
                break;
            case "overlay":
                if (loadingState) {
                    fixButtonWidth = true;
                    rightElement = <LoadingIndicator type="loading-overlay" />;
                }
                break;
            case "overlay-feedback":
                if (loadingState) {
                    fixButtonWidth = true;
                    rightElement = (
                        <LoadingIndicator
                            loadingText={loadingMessage}
                            type="loading-overlay"
                        />
                    );
                }
                break;
            case "inside-feedback-resize":
                if (loadingState) {
                    buttonInner = (
                        <span>
                            <span>{loadingMessage}</span>
                            <span style={{float: "left"}}>
                                <LoadingIndicator type={"circle-small"} />
                            </span>
                        </span>
                    );
                }
                break;
            case "right-feedback":
                if (loadingState) {
                    rightElement = (
                        <div
                            style={{
                                float: "left",
                                marginLeft: "-9px",
                                position: "relative"
                            }}
                            className="disabled"
                        >
                            <span>
                                <span
                                    style={{
                                        float: "left",
                                        marginTop: "7px"
                                    }}
                                >
                                    <LoadingIndicator type={"circle"} />
                                </span>
                                <span
                                    style={{
                                        float: "left",
                                        marginLeft: "6px",
                                        marginTop: "11px"
                                    }}
                                >
                                    {loadingMessage}
                                </span>
                            </span>
                        </div>
                    );
                }
                break;
            case "left-feedback":
                if (loadingState) {
                    leftElement = (
                        <div
                            style={{
                                float: "left",
                                marginRight: "6px",
                                position: "relative"
                            }}
                            className="disabled"
                        >
                            <span>
                                <span
                                    style={{
                                        float: "right",
                                        marginTop: "7px"
                                    }}
                                >
                                    <LoadingIndicator type={"circle"} />
                                </span>
                                <span
                                    style={{
                                        float: "right",
                                        marginRight: "6px",
                                        marginTop: "11px"
                                    }}
                                >
                                    {loadingMessage}
                                </span>
                            </span>
                        </div>
                    );
                }
                break;
        }

        let buttonStyle = {
            overflow: "hidden",
            position: "relative"
        };
        if (fixButtonWidth && this.state.loadingButtonWidth != null) {
            buttonStyle.width = this.state.loadingButtonWidth;
        }
        return (
            <div style={this.props.style}>
                {leftElement != null && leftElement}
                <span style={{float: "left"}}>
                    <Button
                        ref={instance => {
                            this.loadingButton = instance;
                        }}
                        disabled={loadingState}
                        type={this.props.type}
                        className={this.props.className}
                        id={this.props.id}
                        onClick={this._onClick.bind(this)}
                        style={buttonStyle}
                    >
                        {buttonInner}
                    </Button>
                </span>
                {rightElement != null && rightElement}
                <div style={{clear: "both"}} />
            </div>
        );
    }
}

export default LoadingButton;
