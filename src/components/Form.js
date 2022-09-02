import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/native';

const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: 'none',
    autoCorrect: false,
})`
border: 1px solid #757575;
padding: 10px;
margin: 10px 0;
width: 200px;
font-size: 20px;
`;

const StyledText = styled.Text`
font-size: 24px;
margin: 10px;
`;

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const refName = useRef(null);
    const refEmail = useRef(null);

    useEffect(() => {
        console.log('\n===== Form Component Mount =====\n');
        refName.current.focus();
        return () => console.log('\n===== Form Component Unmount =====\n')
    }, []);   //두번째 파라미터에 빈 배열을 전달하면 컴포넌트가 처음 렌더링될 때만 함수가 호출되도록 작성 가능

   /*  useEffect(() => {
        console.log(`name: ${name}, email: ${email}\n`);
    }, [email]); */  // 모든 내용이 바뀔 때마다 콘솔 출력

    useEffect(() => {
        console.log(`name: ${name}, email: ${email}\n`);
    }, [email]); // email 내용이 바뀌는 경우에만 콘솔 출력


    return (
        <>
        <StyledText>Name: {name}</StyledText>
        <StyledText>Email: {email}</StyledText>
        <StyledTextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="name"
        ref={refName}
        returnKeyType="next"
        onSubmitEditing={() => refEmail.current.focus()}
        />
        <StyledTextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="email"
        ref={refEmail}
        returnKeyType="done"
        />
        </>
    );
};

export default Form;