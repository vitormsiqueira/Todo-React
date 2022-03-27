import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}


export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    padding: 25px;
    align-items: center;
    display: flex;
    flex: 1;
    border-bottom: 1px solid rgb(0, 0, 0, .1);


    label{
        color: ${done ? '#757575' : '#3d3a3a'};
        text-decoration: ${done ? 'line-through' : 'initial'};
        font-size: 22px;
        flex: 1;
        text-align: left;
    }

    


    //checkbox
    input{
        width: 22px;
        height: 22px;
        margin-right: 25px;
        margin-left: 10px;
        background: #000;
    }

`
));