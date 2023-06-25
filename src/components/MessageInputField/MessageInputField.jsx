import "./MessageInputField.css";
const MessageInputField = ({ setInputMessage, inputMessage, handleOnSubmitBtn }) => {

    return (

        <form className="chatScreen__input">
            <input
                value={inputMessage}
                className="chatScreen__inputField"
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder='Type a message...' type="text" />
            <button
                type="submit"
                onClick={handleOnSubmitBtn}
                className="chatScreen__btn">SEND</button>
        </form>
    );
};

export default MessageInputField;