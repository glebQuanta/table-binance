import {
    PopupContainer,
    PopupInner,
    CloseButton,
    PopupName,
    PopupText
} from "../assets/table.style";

export const Popup = ({ data, onClose }) => {

    return (

        <PopupContainer>

            <PopupInner>

                <CloseButton
                    onClick={onClose}>

                    &times;

                </CloseButton>

                <PopupName>

                    {data.name}

                </PopupName>

                <PopupText>

                    All Time: {data.allTime}

                </PopupText>

                <PopupText>

                    All Time PnL: {data.allTimePnL}

                </PopupText>

                <PopupText>

                    All Time ROI: {data.allTimeRoi}

                </PopupText>

                <PopupText>

                    All Time Pay: {data.allTimePay}

                </PopupText>

            </PopupInner>

        </PopupContainer>

    );

};
