import { Box, Img, Text } from '@chakra-ui/react';
import './messageBox.css'
import ScrollableFeed from 'react-scrollable-feed'

function MessageBox({ loading, data }) {
  
    return (
        <Box fontFamily={'Lora'} className='example' w={["95%","80%"]} h={["72vh","76vh"]} m="auto" overflow={'scroll'} boxShadow='dark-lg' borderRadius={'10px'} mt="10px" p="15px" >
          {data.length?  <ScrollableFeed className='example'>
                {
                    data?.map((ele, i) => (
                        <Box key={i}>
                            {ele.send == "man" ? <Text bg={'blackAlpha.800'} color='white' borderRadius={'5px'} maxW={['80%',"50%"]}
                                w='fit-content' m='5px' p="5px" ml={'auto'} wordBreak='break-word'> {ele.name}</Text>
                                :
                                <Text bg={'blackAlpha.800'} color='white' borderRadius={'5px'} maxW={['80%',"70%"]} w='fit-content' m='5px'
                                    p="5px" mr={'auto'} wordBreak='break-word'> {ele.name}
                                </Text>
                            }
                        </Box>
                    ))
                }   
                         {loading ? <Img  mt={'30px'}  src="https://user-images.githubusercontent.com/3059371/49334754-3c9dfe00-f5ab-11e8-8885-0192552d12a1.gif" w={'100px'} alt="" /> : ""}

                </ScrollableFeed> : <Img  w={["95%","50%"]} m="auto"  src="https://www.webtunix.ai/static/img/rotatebrain.gif"/>}
        </Box>
    );
}

export default MessageBox;