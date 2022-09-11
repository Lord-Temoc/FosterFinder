export default function Chat() {
    return (<div class="chat-bar-collapsible">
    <button id="chat-button" type="button" class="collapsible">Chat with us!
        <i id="chat-icon" style="color: #fff;" class="fa fa-fw fa-comments-o"></i>
    </button>

    <div class="content">
        <div class="full-chat-block">
            <div class="outer-container">
                <div class="chat-container">
                    <div id="chatbox">
                        <h5 id="chat-timestamp"></h5>
                        <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                    </div>

                    <div class="chat-bar-input-block">
                        <div id="userInput">
                            <input id="textInput" class="input-box" type="text" name="msg"
                                placeholder="Tap 'Enter' to send a message">
                            <p></p>
                        </div>

                    </div>

                    <div id="chat-bar-bottom">
                        <p></p>
                    </div>

                </div>
            </div>

        </div>
    </div>

</div>
);
}