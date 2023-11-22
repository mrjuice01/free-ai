import { Box, Button, Img, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import SpeechRecognition, {
    useSpeechRecognition
} from "react-speech-recognition";

import { getQuestion } from '../Api';

function ChatInput({ Question, setLoading, data, setdata }) {


    const ref = useRef(null);
    const [text, setText] = useState("");
    const [mic, Setmic] = useState(false);
    const { transcript, resetTranscript } = useSpeechRecognition({
        continuous: true
    });

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return "Your Broswer is not support voice search please use different broswer";
    }

    const handleSubmit = async () => {
        Setmic(false);
        setLoading(true);
        var obj = {
            name: ref.current.value,
            send: "man",
        }
        var VoiceObj = {
            name: transcript,
            send: "man",
        }
        ref.current.value && setdata([...data, obj])
        VoiceObj.name && setdata([...data, VoiceObj])
        var msg = {
            message: ref.current.value
        }
        var msg2 = {
            message: transcript
        }
        var Message = msg.message ? msg : msg2
        setText("");
        var res = await getQuestion(Message);
        // SpeechRecognition.resetTranscript();
        ref.current.value = "";
        var receiver = {
            name: res,
            send: "ai"
        }
        obj.name && setdata([...data, obj, receiver])
        VoiceObj.name && setdata([...data, VoiceObj, receiver])
        setLoading(false);
    }
    // by using click
    const ClickHandler = async (e) => {
        if (e.key == "Enter") {
            Setmic(false);
            setText("");
            setLoading(true);
            var obj = {
                name: ref.current.value,
                send: "man",
            }
            var VoiceObj = {
                name: transcript,
                send: "man",
            }
            ref.current.value && setdata([...data, obj])
            VoiceObj.name && setdata([...data, VoiceObj])
            var msg = {
                message: ref.current.value
            }
            var msg2 = {
                message: transcript
            }
            var Message = msg.message ? msg : msg2
            setText("");
            var res = await getQuestion(Message);

            ref.current.value = "";

            var receiver = {
                name: res,
                send: "ai"
            }
            obj.name && setdata([...data, obj, receiver])
            VoiceObj.name && setdata([...data, VoiceObj, receiver])
            setLoading(false);
        }
    }
    const voiceHandler = (e) => {
        setText(e.target.value)
    }
    const handleStart = () => {
        Setmic(true);
        setText(transcript)
        setTimeout(() => {
            Setmic(false);
        }, 6000);

    }

    return (
        <Box fontFamily={'Lora'} w={["95%", "80%"]} display={'flex'} h="10vh" m="auto" boxShadow='dark-lg' mt="10px" p="15px" borderRadius={'10px'}>
            {mic ? <Img pr="5px" w="45px" borderRadius={'50%'} _hover={{ cursor: "pointer" }}
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Mic-Animation.gif" />
                : <Img pr="5px" h="38px" _hover={{ cursor: "pointer" }}
                    onClick={() => { SpeechRecognition.startListening(); handleStart() }}
                    src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" />}
            <Input h="40px" color={'blue'} type="text" ref={ref} value={text ? text : transcript} onKeyPress={ClickHandler} onKeyUp={resetTranscript} onChange={voiceHandler} placeholder="Type or speak on mic whatever you want" />
            <Img _hover={{ cursor: "pointer" }} onClick={() => { handleSubmit(); resetTranscript() }} pl="5px" h="38px" src="https://w7.pngwing.com/pngs/891/367/png-transparent-computer-icons-symbol-send-email-button-miscellaneous-blue-angle.png" alt="" />
        </Box>
    );
}

export default ChatInput;