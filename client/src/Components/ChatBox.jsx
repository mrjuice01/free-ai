import React, { useState } from 'react';
import ChatInput from './ChatInput';
import Header from './Header';
import MessageBox from './MessageBox';

function ChatBox() {
    const [Question, setQuestion] = useState("");
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false)

    return (
        <div>
            <Header/> 
            <MessageBox loading={loading} Question={Question} data={data} />
            <ChatInput setQuestion={setQuestion} setdata={setdata} setLoading={setLoading} data={data} Question={Question} />
        </div>
    );
}

export default ChatBox;